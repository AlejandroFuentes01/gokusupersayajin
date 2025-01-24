import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const UserHeader = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/');
    };

    return (
        <header className="bg-indigo-600 text-white shadow-md">
            {/* Línea superior con Sistema de Incidencias y Botón Hamburguesa */}
            <div className="flex justify-between items-center px-4 py-3">
                <h1 className="text-lg font-bold">SISTEMA DE INCIDENCIAS</h1>

                {/* Botón Hamburguesa */}
                <button
                    className="text-white focus:outline-none md:hidden"
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
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } md:flex bg-gray-100 text-gray-600 border-t border-b border-gray-300`}
            >
                <div className="container mx-auto md:flex justify-around items-center py-2">
                    {/* Opciones de Navegación */}
                    <Link href="/user/home" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${router.pathname === '/user/home' ? 'text-indigo-600' : ''
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
                            Mis Reportes
                        </a>
                    </Link>
                    <Link href="/user/create-report" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${router.pathname === '/user/create-report' ? 'text-indigo-600' : ''
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
                            Crear Reporte
                        </a>
                    </Link>

                    {/* Botón Logout en el Menú (Solo para Móviles) */}
                    <div
                        className={`flex flex-col items-center text-sm font-medium text-red-500 hover:text-red-600 ${isMenuOpen ? 'block' : 'hidden'
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
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                            />
                        </svg>


                        Logout
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default UserHeader;
