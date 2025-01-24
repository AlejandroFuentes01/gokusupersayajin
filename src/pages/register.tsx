// src/pages/register.tsx
import GeneralFooter from '@/components/GeneralFooter';
import GeneralHeader from '@/components/GeneralHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';

interface RegisterForm {
    codigo: string;
    nombre: string;
    email: string;
    password: string;
}

interface FormErrors {
    codigo?: string;
    nombre?: string;
    email?: string;
    password?: string;
}

export default function Register() {
    const [form, setForm] = useState<RegisterForm>({
        codigo: '',
        nombre: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        // Validar código
        if (form.codigo.trim().length < 4) {
            newErrors.codigo = 'El código debe tener al menos 4 caracteres';
        }

        // Validar nombre
        if (form.nombre.trim().length < 3) {
            newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido';
        }

        // Validar password
        if (form.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        // Limpiar error específico del campo cuando el usuario empiece a escribir
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Registro exitoso. Redirigiendo a inicio de sesión...');
                setTimeout(() => {
                    router.push('/');
                }, 2000);
            } else {
                setError(data.message || 'Error en el registro');
            }
        } catch (err) {
            setError('Error de conexión con el servidor');
        } finally {
            setIsLoading(false);
        }
    };

    const renderInput = (
        name: keyof RegisterForm,
        label: string,
        type: string = 'text',
        placeholder: string
    ) => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                required
                value={form[name]}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors[name] ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={placeholder}
                disabled={isLoading}
            />
            {errors[name] && (
                <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
            )}
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <GeneralHeader />

            {/* Contenido Principal */}
            <main className="flex-grow flex items-center justify-center py-10">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-center text-gray-800">Regístrate</h2>
                        <p className="text-center text-gray-600">Completa los campos para continuar</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {renderInput('codigo', 'Código de Acceso', 'text', 'Ingresa tu código de acceso')}
                        {renderInput('nombre', 'Nombre Completo', 'text', 'Ingresa tu nombre')}
                        {renderInput('email', 'Correo electrónico', 'email', 'Ingresa tu correo electrónico')}
                        {renderInput('password', 'Contraseña', 'password', 'Ingresa tu contraseña')}

                        {error && (
                            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="p-3 text-sm text-green-500 bg-green-50 rounded-lg">
                                {success}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`w-full px-4 py-2 text-white bg-indigo-600 rounded-lg 
                                hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 
                                focus:ring-indigo-500 focus:outline-none
                                disabled:opacity-50 disabled:cursor-not-allowed
                                transition duration-200 ease-in-out
                                ${isLoading ? 'cursor-not-allowed' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Registrando...' : 'Registrarse'}
                        </button>

                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <p>¿Ya tienes una cuenta?</p>
                            <Link href="/" legacyBehavior>
                                <a className="text-indigo-600 hover:text-indigo-500">
                                    Iniciar Sesión
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <GeneralFooter />
        </div>
    );
}
