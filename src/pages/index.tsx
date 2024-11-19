import GeneralFooter from '@/components/GeneralFooter';
import GeneralHeader from '@/components/GeneralHeader';
import { FormEvent, useState } from 'react';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '', rememberMe: false });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Formulario enviado:', form);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <GeneralHeader />

            {/* Contenido Principal */}
            <main className="flex-grow flex items-center justify-center py-10">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Ingresa tu correo"
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
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>

                        {/* Recordarme y Recuperar Contraseña */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={form.rememberMe}
                                    onChange={(e) => setForm({ ...form, rememberMe: e.target.checked })}
                                    className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                Recordarme
                            </label>
                            <a href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

                        {/* Botón de Iniciar Sesión */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-indigo-500 focus:outline-none"
                        >
                            Iniciar Sesión
                        </button>

                        {/* Enlace para registrarse */}
                        <div className="text-center text-sm text-gray-600">
                            ¿No tienes una cuenta?{' '}
                            <a href="/register" className="text-indigo-600 hover:text-indigo-500">
                                Regístrate
                            </a>
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <GeneralFooter />
        </div>
    );
}
