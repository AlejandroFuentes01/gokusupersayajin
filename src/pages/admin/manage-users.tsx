import UserHeader from '@/components/AdminHeader';
import GeneralFooter from '@/components/GeneralFooter';

export default function UserHome() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <UserHeader />

            {/* Contenido Principal */}
            <main className="container mx-auto py-10 flex-grow">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Gestión de Usuarios</h2>
                <div className="overflow-x-auto rounded-lg bg-white shadow-md">
                    <table className="table-auto w-full border-collapse">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="border px-4 py-2 text-center text-sm">Nombre</th>
                                <th className="border px-4 py-2 text-center text-sm">Correo</th>
                                <th className="border px-4 py-2 text-center text-sm">No. de Cuenta</th>
                                <th className="border px-4 py-2 text-center text-sm">Gestionar Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Fila de ejemplo de mensaje vacío */}
                            <tr>
                                <td className="border px-4 py-2 text-center text-sm" colSpan={4}>
                                    No hay usuarios disponibles.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-200 text-gray-600 text-center py-4 mt-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} Sistema de Gestión de Usuarios. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}