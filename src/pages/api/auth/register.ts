import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type ResponseData = {
    message: string;
    usuario?: any;
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { codigo, nombre, email, password } = req.body;

    // Validar campos requeridos
    if (!codigo || !nombre || !email || !password) {
        return res.status(400).json({
            message: 'Todos los campos son requeridos'
        });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: 'Formato de email inválido'
        });
    }

    // Validar longitud de contraseña
    if (password.length < 6) {
        return res.status(400).json({
            message: 'La contraseña debe tener al menos 6 caracteres'
        });
    }

    try {
        // Verificar si el email ya está registrado
        const existingUser = await prisma.usuario.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({
                message: 'El email ya está registrado'
            });
        }

        // Verificar el código de acceso
        const codigoAcceso = await prisma.codigoAcceso.findUnique({
            where: { codigo },
        });

        if (!codigoAcceso) {
            return res.status(400).json({
                message: 'Código de acceso inválido'
            });
        }

        if (codigoAcceso.usado) {
            return res.status(400).json({
                message: 'Este código de acceso ya ha sido utilizado'
            });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Usar transacción para garantizar la integridad de los datos
        const usuario = await prisma.$transaction(async (prisma) => {
            // Crear el usuario
            const newUser = await prisma.usuario.create({
                data: {
                    nombre,
                    email,
                    password: hashedPassword,
                    rol: 'usuario',
                    codigoAccesoId: codigoAcceso.id // Conectar con el código de acceso
                },
                select: {
                    id: true,
                    nombre: true,
                    email: true,
                    rol: true
                }
            });

            // Marcar el código como usado
            await prisma.codigoAcceso.update({
                where: { id: codigoAcceso.id },
                data: { usado: true }
            });

            return newUser;
        });

        return res.status(201).json({
            message: 'Usuario registrado exitosamente',
            usuario
        });

    } catch (error) {
        console.error('Error en registro:', error);
        return res.status(500).json({
            message: 'Error en el servidor',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    } finally {
        await prisma.$disconnect();
    }
}