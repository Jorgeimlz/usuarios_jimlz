// src/app/page.tsx

export default function Home() {
  return (
    <section style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Bienvenido a Mi Aplicación de Autenticación</h1>
      <p>Esta es una aplicación sencilla para registrar y autenticar usuarios usando Next.js y Django.</p>
      <p>Por favor, <a href="/auth/register">regístrate</a> o <a href="/auth/login">inicia sesión</a> para continuar.</p>
    </section>
  );
}
