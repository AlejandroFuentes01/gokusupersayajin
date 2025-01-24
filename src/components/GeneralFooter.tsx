import { Mail } from 'lucide-react';

const GeneralFooter = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center space-y-4">
                    <p className="text-slate-400 text-sm flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        email@example.com
                    </p>
                    
                    {/* Copyright */}
                    <div className="pt-4 border-t border-slate-800">
                        <p className="text-center text-slate-500 text-sm">
                            &copy; {new Date().getFullYear()} Sistema de Incidencias. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default GeneralFooter;