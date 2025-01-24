import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { codigo, nombre, email, password } = req.body;

    // Validar datos del formulario
    if (!codigo || !nombre || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        // Verificar si el código de acceso es válido y no ha sido usado
        const codigoAcceso = await prisma.codigoAcceso.findUnique({
            where: { codigo },
        });

        if (!codigoAcceso) {
            return res.status(404).json({ message: 'El código de acceso no es válido' });
        }

        if (codigoAcceso.usado) {
            return res.status(400).json({ message: 'El código de acceso ya ha sido usado' });
        }

        // Verificar si el email ya está registrado
        const emailExistente = await prisma.usuario.findUnique({
            where: { email },
        });

        if (emailExistente) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el nuevo usuario y asociarlo al código de acceso
        const usuario = await prisma.usuario.create({
            data: {
                nombre,
                email,
                password: hashedPassword,
                rol: 'usuario', // Asignar rol por defecto
                codigoAcceso: { connect: { id: codigoAcceso.id } },
            },
        });

        // Marcar el código de acceso como usado
        await prisma.codigoAcceso.update({
            where: { id: codigoAcceso.id },
            data: { usado: true },
        });

        return res.status(201).json({ message: 'Registro exitoso', usuario });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}
