// pages/api/auth/verify-code.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { codigo } = req.body;

    try {
        const codigoAcceso = await prisma.codigoAcceso.findUnique({
            where: { codigo },
        });

        if (!codigoAcceso || codigoAcceso.usado) {
            return res.status(400).json({ message: 'Código inválido o ya usado' });
        }

        return res.status(200).json({ message: 'Código válido' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}
