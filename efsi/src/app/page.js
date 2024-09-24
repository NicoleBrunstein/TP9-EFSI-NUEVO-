"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async (user, pass) => {
    try {
      const response = await axios.post('/api/user', {
        username: user,
        password: pass
      });
      return response.data.token; // Asumiendo que el token se encuentra aquí
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      throw error; // Lanza el error para manejarlo más adelante
    }
  };

  const handleLoginRedirect = async () => {
    if (email && password) {
      try {
        const token = await login(email, password);
        console.log('Inicio de sesión exitoso, token:', token);
        // Aquí puedes guardar el token o manejarlo como prefieras
        router.push('/home');
      } catch (error) {
        alert('Error de inicio de sesión. Verifica tus credenciales.');
      }
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


