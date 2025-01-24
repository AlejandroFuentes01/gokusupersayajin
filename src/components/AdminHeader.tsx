import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const AdminHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/');
    };

    return (
        <header className="bg-indigo-600 text-white shadow-md">
            {/* Línea superior con Administrador y Logout */}
            <div className="flex justify-between items-center px-4 py-3">
                <h1 className="text-lg font-bold">ADMINISTRADOR</h1>

                {/* Botón Hamburguesa */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Botón de Logout en Pantallas Grandes */}
                <button
                    onClick={handleLogout}
                    className="hidden md:block px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-sm font-semibold"
                >
                    Logout
                </button>
            </div>

            {/* Menú de Opciones */}
            <nav
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } md:flex bg-gray-100 text-gray-600 border-t border-gray-300`}
            >
                <div className="container mx-auto md:flex justify-around items-center py-2">
                    {/* Opciones de Navegación */}
                    <Link href="/admin/home" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${
                                router.pathname === '/admin/home' ? 'text-indigo-600' : ''
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                            Gestionar Reportes
                        </a>
                    </Link>
                    <Link href="/admin/manage-users" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${
                                router.pathname === '/admin/manage-users' ? 'text-indigo-600' : ''
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 16l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Gestionar Usuarios
                        </a>
                    </Link>
                    <Link href="/admin/create-user" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${
                                router.pathname === '/admin/create-user' ? 'text-indigo-600' : ''
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
                            </svg>
                            Crear Usuarios
                        </a>
                    </Link>
                    <Link href="/admin/history" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${
                                router.pathname === '/admin/history' ? 'text-indigo-600' : ''
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                            </svg>
                            Histórico
                        </a>
                    </Link>
                    <Link href="/admin/generate-codes" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${
                                router.pathname === '/admin/generate-codes' ? 'text-indigo-600' : ''
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mb-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                            Generar Códigos
                        </a>
                    </Link>

                    {/* Botón Logout en el Menú (Solo para Móviles) */}
                    <div
                        className={`flex flex-col items-center text-sm font-medium text-red-500 hover:text-red-600 ${
                            isMenuOpen ? 'block' : 'hidden'
                        } md:hidden`}
                        onClick={handleLogout}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mb-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7"
                            />
                        </svg>
                        Logout
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default AdminHeader;
