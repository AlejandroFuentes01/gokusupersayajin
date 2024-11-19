// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../app/globals.css'; // Importa tus estilos globales aquí

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
