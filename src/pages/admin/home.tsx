import AdminHeader from '@/components/AdminHeader';

export default function AdminDashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <AdminHeader />

            {/* Contenido Principal */}
            <main className="container mx-auto py-10 flex-grow">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Todos los Reportes</h2>
                <div className="overflow-x-auto rounded-lg bg-white shadow-md">
                    <table className="table-auto w-full border-collapse">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="border px-4 py-2 text-left text-sm">ID</th>
                                <th className="border px-4 py-2 text-left text-sm">Área</th>
                                <th className="border px-4 py-2 text-left text-sm">Fecha de Emisión</th>
                                <th className="border px-4 py-2 text-left text-sm">Observaciones</th>
                                <th className="border px-4 py-2 text-left text-sm">Quién Reportó</th>
                                <th className="border px-4 py-2 text-left text-sm">Quién le dio Seguimiento</th>
                                <th className="border px-4 py-2 text-left text-sm">Días Transcurridos</th>
                                <th className="border px-4 py-2 text-center text-sm">Gestionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-center text-sm" colSpan={8}>
                                    No hay reportes disponibles.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-200 text-gray-600 text-center py-4 mt-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} Sistema de Incidencias. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
