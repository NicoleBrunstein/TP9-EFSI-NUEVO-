"use client";  // Asegura que se ejecuta en el cliente

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Simulación de la lógica de logout
    // Aquí puedes borrar tokens o limpiar estados de autenticación

    // Redirigir al login después de "cerrar sesión"
    router.push('/');
  }, [router]);

  return (
    <div className="logout-container">
      <h1>Cerrando sesión...</h1>
      <p>Serás redirigido al inicio de sesión en breve.</p>
    </div>
  );
}
