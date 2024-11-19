import GeneralFooter from '@/components/GeneralFooter';
import UserHeader from '@/components/UserHeader';

export default function UserHome() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <UserHeader />

            {/* Contenido Principal */}
            <main className="flex-grow container mx-auto py-10">
                {/*Aquí debe de ir el contenido de toda la pagina*/}
            </main>

            {/* Footer */}
            <GeneralFooter />
        </div>
    );
}
