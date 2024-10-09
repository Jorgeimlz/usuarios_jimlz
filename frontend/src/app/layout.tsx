// src/app/layout.tsx

import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Mi Aplicación de Autenticación',
  description: 'Aplicación básica con autenticación usando Next.js y Django',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
          <nav>
            <Link href="/" style={{ marginRight: '1rem' }}>Inicio</Link>
            <Link href="/auth/login" style={{ marginRight: '1rem' }}>Login</Link>
            <Link href="/auth/register">Registro</Link>
          </nav>
        </header>
        
        <main style={{ padding: '1rem' }}>
          {children}
        </main>

        <footer style={{ padding: '1rem', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
          <p>© 2023 Mi Aplicación. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
