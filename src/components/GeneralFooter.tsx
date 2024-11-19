const GeneralFooter = () => {
    return (
        <footer className="bg-gray-200 text-gray-600 text-center py-4">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Sistema de Incidencias. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default GeneralFooter;
