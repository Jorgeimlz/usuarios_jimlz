// src/app/auth/protected/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function ProtectedPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8000/protected/', {
          withCredentials: true,
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('No autenticado', error);
        router.push('/auth/login'); // Redirige si no está autenticado
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  if (isLoading) return <p>Cargando...</p>;
  if (!isAuthenticated) return null;

  return (
    <div>
      <h1>Vista Protegida</h1>
      <p>Bienvenido a la vista protegida. Solo los usuarios autenticados pueden verla.</p>
    </div>
  );
}

