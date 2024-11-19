// test-db.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Crear un nuevo usuario de prueba
    const nuevoUsuario = await prisma.usuario.create({
        data: {
            nombre: 'Alex',
            email: 'alex@example.com',
            password: 'password123',
            rol: 'admin'
        },
    });

    console.log('Usuario creado:', nuevoUsuario);

    // Leer todos los usuarios de la base de datos
    const usuarios = await prisma.usuario.findMany();
    console.log('Usuarios en la base de datos:', usuarios);
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
