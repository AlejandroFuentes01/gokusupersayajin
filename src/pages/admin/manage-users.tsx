import AdminHeader from '@/components/AdminHeader';
import GeneralFooter from '@/components/GeneralFooter';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import * as XLSX from 'xlsx';

export default function GenerateCodes() {
    const [quantity, setQuantity] = useState<string>('1'); // Almacena el valor como una cadena
    const [generatedCodes, setGeneratedCodes] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateCodes = async () => {
        const parsedQuantity = parseInt(quantity, 10);
        if (isNaN(parsedQuantity) || parsedQuantity < 1) {
            alert('La cantidad debe ser al menos 1.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/admin/generate-codes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity: parsedQuantity }),
            });
            const data = await response.json();

            if (response.ok) {
                setGeneratedCodes(data.codes);
            } else {
                alert(data.message || 'Error al generar los códigos.');
            }
        } catch (error) {
            alert('Error de conexión con el servidor.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            generatedCodes.map((code, index) => ({ Número: index + 1, Código: code }))
        );
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Códigos');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        const blob = new Blob([excelBuffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        saveAs(blob, 'CodigosAcceso.xlsx');
    };

    const handleClearCodes = () => {
        setGeneratedCodes([]);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <AdminHeader />

            {/* Contenido Principal */}
            <main className="container mx-auto py-10 flex-grow">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Generar Códigos de Acceso
                </h2>

                <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
                    <div className="mb-4">
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Cantidad de Códigos
                        </label>
                        <input
                            type="text" // Permite caracteres como '0'
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} // No convierte directamente a número
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={handleGenerateCodes}
                            disabled={isLoading}
                            className={`w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none ${
                                isLoading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {isLoading ? 'Generando...' : 'Generar Códigos'}
                        </button>

                        {generatedCodes.length > 0 && (
                            <>
                                <button
                                    onClick={handleDownloadExcel}
                                    className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
                                >
                                    Descargar Excel
                                </button>
                                <button
                                    onClick={handleClearCodes}
                                    className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                                >
                                    Limpiar Códigos
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mostrar los códigos generados */}
                    {generatedCodes.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                Códigos Generados:
                            </h3>
                            <ul className="list-disc list-inside bg-gray-50 rounded-lg p-4">
                                {generatedCodes.map((code, index) => (
                                    <li key={index} className="text-sm text-gray-600">
                                        {code}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <GeneralFooter />
        </div>
    );
}
