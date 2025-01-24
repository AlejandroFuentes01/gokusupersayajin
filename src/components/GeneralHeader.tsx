"use client";

import { AlertCircle } from "lucide-react";
import Link from 'next/link';

const GeneralHeader = () => {
    return (
        <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center h-20">
                    {/* Logo y Título */}
                    <Link href="/" className="flex items-center space-x-3 text-xl font-bold tracking-tight hover:text-teal-400 transition-all duration-300">
                        <AlertCircle className="h-8 w-8 text-teal-400" />
                        <span>Sistema de Incidencias</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default GeneralHeader;