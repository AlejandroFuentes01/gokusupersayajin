import Link from 'next/link';
import { useRouter } from 'next/router';

const UserHeader = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/');
    };

    return (
        <header className="bg-indigo-600 text-white shadow-md">
            {/* Línea superior con Sistema de Incidencias y Logout */}
            <div className="flex justify-between items-center px-4 py-3">
                <h1 className="text-lg font-bold">SISTEMA DE INCIDENCIAS</h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 text-sm font-semibold"
                >
                    Logout
                </button>
            </div>

            {/* Línea inferior con opciones de navegación */}
            <nav className="bg-gray-100 text-gray-600 border-t border-b border-gray-300">
                <div className="container mx-auto flex justify-around items-center py-2">
                    <Link href="/user/home" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${
                                router.pathname === '/user/reports' ? 'text-indigo-600' : ''
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7h18M3 12h18M3 17h18"
                                />
                            </svg>
                            Mis Reportes
                        </a>
                    </Link>
                    <Link href="/user/create-report" legacyBehavior>
                        <a
                            className={`flex flex-col items-center text-sm font-medium hover:text-indigo-600 ${
                                router.pathname === '/user/create-report' ? 'text-indigo-600' : ''
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m6-6H6"
                                />
                            </svg>
                            Crear Reporte
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default UserHeader;
