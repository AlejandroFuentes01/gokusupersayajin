import UserHeader from '@/components/AdminHeader';
import GeneralFooter from '@/components/GeneralFooter';

export default function UserHome() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <UserHeader />

            {/* Contenido Principal */}
            <main className="container mx-auto py-10 flex-grow">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Todos los Reportes</h2>
                <div className="overflow-x-auto rounded-lg bg-white shadow-md">
                    <table className="table-auto w-full border-collapse">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="border px-4 py-2 text-left text-sm">ID</th>
                                <th className="border px-4 py-2 text-left text-sm">Área</th>
                                <th className="border px-4 py-2 text-left text-sm hidden md:table-cell">Fecha de Emisión</th>
                                <th className="border px-4 py-2 text-left text-sm">Observaciones</th>
                                <th className="border px-4 py-2 text-left text-sm hidden lg:table-cell">Quién Reportó</th>
                                <th className="border px-4 py-2 text-left text-sm hidden lg:table-cell">Quién le dio Seguimiento</th>
                                <th className="border px-4 py-2 text-left text-sm hidden md:table-cell">Fecha de Término</th>
                                <th className="border px-4 py-2 text-center text-sm">Gestionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Ejemplo de Fila */}
                            <tr>
                                <td className="border px-4 py-2 text-center text-sm">1</td>
                                <td className="border px-4 py-2 text-left text-sm">Aula 101</td>
                                <td className="border px-4 py-2 text-left text-sm hidden md:table-cell">2024-01-10</td>
                                <td className="border px-4 py-2 text-left text-sm">Falla en el proyector</td>
                                <td className="border px-4 py-2 text-left text-sm hidden lg:table-cell">Juan Pérez</td>
                                <td className="border px-4 py-2 text-left text-sm hidden lg:table-cell">María López</td>
                                <td className="border px-4 py-2 text-left text-sm hidden md:table-cell">2024-01-15</td>
                                <td className="border px-4 py-2 text-center text-sm">
                                    <button className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                                        Ver
                                    </button>
                                </td>
                            </tr>
                            {/* Fila Vacía */}
                            <tr>
                                <td className="border px-4 py-2 text-center text-sm" colSpan={8}>
                                    No hay más reportes disponibles.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Footer */}
            <GeneralFooter />
        </div>
    );
}
