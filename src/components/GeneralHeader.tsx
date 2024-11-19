import Link from 'next/link';

const GeneralHeader = () => {
    return (
        <header className="bg-indigo-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                {/* Logo o Titulo */}
                <Link href="/" legacyBehavior>
                    <a className="text-lg font-bold">Sistema de Incidencias</a>
                </Link>

                {/* Opciones adicionales (si es necesario) */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="text-sm font-medium hover:underline">Inicio</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default GeneralHeader;
