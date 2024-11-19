import GeneralFooter from '@/components/GeneralFooter';
import UserHeader from '@/components/UserHeader';

export default function UserHome() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <UserHeader />

            {/* Contenido Principal */}
            <main className="flex-grow container mx-auto py-10">
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Crear Reporte</h2>
                    <form className="space-y-4">
                        {/* ID y Fecha de Emisión */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="id">
                                    ID
                                </label>
                                <input
                                    type="text"
                                    id="id"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fecha">
                                    Fecha de Emisión
                                </label>
                                <input
                                    type="date"
                                    id="fecha"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Escoge el Área */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="area">
                                Escoja el Área *
                            </label>
                            <input
                                type="text"
                                id="area"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Escriba el área..."
                            />
                        </div>
                        
                        {/* Observaciones */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="observaciones">
                                Observaciones *
                            </label>
                            <textarea
                                id="observaciones"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Describa el problema..."
                            ></textarea>
                        </div>

                        {/* Adjuntar Evidencia */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="evidencia">
                                Adjuntar Evidencia
                            </label>
                            <div
                                className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 focus-within:border-blue-400"
                            >
                                <p className="text-sm text-gray-600 mb-2">Arrastre y suelte un archivo aquí</p>
                                <p className="text-sm text-gray-500 mb-4">o</p>
                                <label
                                    htmlFor="evidencia"
                                    className="cursor-pointer bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 inline-block"
                                >
                                    Seleccionar Archivo
                                </label>
                                <input
                                    type="file"
                                    id="evidencia"
                                    className="hidden"
                                />
                            </div>
                        </div>

                        {/* Botón Enviar */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <GeneralFooter />
        </div>
    );
}
