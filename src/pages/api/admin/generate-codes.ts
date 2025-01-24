import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '/Users/PC/sistema-incidencias/lib/prisma'; // Ajusta esta ruta según la ubicación de tu archivo prisma.ts

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.setHeader('Allow', ['POST']).status(405).json({ message: `Método ${req.method} no permitido.` });
    }

    const { quantity } = req.body;

    // Validación del parámetro
    if (!quantity || typeof quantity !== 'number' || quantity < 1) {
        return res.status(400).json({ message: 'La cantidad debe ser un número mayor o igual a 1.' });
    }

    try {
        // Generar códigos únicos
        const codes = Array.from({ length: quantity }, () =>
            Math.random().toString(36).substring(2, 10).toUpperCase()
        );

        // Crear códigos en la base de datos
        const createdCodes = await prisma.codigoAcceso.createMany({
            data: codes.map((code) => ({ codigo: code, usado: false })),
        });

        // Enviar respuesta
        return res.status(201).json({
            message: 'Códigos generados exitosamente.',
            codes: codes,
            count: createdCodes.count, // Verifica cuántos se insertaron realmente
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al generar los códigos.' });
    }
}
