import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminHeader = () => {
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7h18M3 12h18M3 17h18"
                                />
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 16l-4 4m0 0l-4-4m4 4V4"
                                />
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v8m4-4H8"
                                />
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4m0 4h.01M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
                                />
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m6-6H6"
                                />
                            </svg>
                            Generar Códigos
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default AdminHeader;
