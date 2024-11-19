import AdminHeader from '@/components/AdminHeader';
import { FormEvent, useState } from 'react';

export default function CreateUser() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        password: '',
        rol: 'usuario', // Por defecto, será "usuario"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Datos del formulario:', form);
        // Aquí puedes agregar la lógica para enviar los datos al backend
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <AdminHeader />

            {/* Contenido Principal */}
            <main className="flex-grow container mx-auto py-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Crear Usuario</h2>
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Nombre */}
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                required
                                value={form.nombre}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Ingresa el nombre completo"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Ingresa el correo electrónico"
                            />
                        </div>

                        {/* Contraseña */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={form.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Ingresa la contraseña"
                            />
                        </div>

                        {/* Rol */}
                        <div>
                            <label htmlFor="rol" className="block text-sm font-medium text-gray-700">
                                Rol
                            </label>
                            <select
                                id="rol"
                                name="rol"
                                required
                                value={form.rol}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="usuario">Usuario</option>
                                <option value="administrador">Administrador</option>
                            </select>
                        </div>

                        {/* Botón para Crear Usuario */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-indigo-500 focus:outline-none"
                        >
                            Crear Usuario
                        </button>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-200 text-gray-600 text-center py-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Sistema de Incidencias. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
