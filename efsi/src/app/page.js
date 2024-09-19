"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Función para manejar la redirección al index
  const handleLoginRedirect = () => {
    if (email && password) {
      router.push('/index');
    } else {
      alert('Por favor, completa ambos campos.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="button" onClick={handleLoginRedirect}>Ingresar</button>
        <button type="button" onClick={() => router.push('/registrer')}>Registrarse</button>
      </form>
    </div>
  );
}

