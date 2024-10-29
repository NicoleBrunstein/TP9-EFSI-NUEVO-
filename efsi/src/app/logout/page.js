"use client";  // Asegura que se ejecuta en el cliente

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Borrar el token de las cookies
    Cookies.remove('token', { path: '/' });  // Asegúrate de especificar el mismo path que al guardar la cookie

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
