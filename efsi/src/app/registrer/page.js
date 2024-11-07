"use client";  // Asegúrate de que esta línea esté descomentada

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    setError(''); // vacia el error

    try {
      const response = await axios.post('https://set-previously-redfish.ngrok-free.app/api/user/register', {
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        password: formData.password,
      });
      alert('Usuario registrado con éxito');
      router.push('/'); // va a la página de login
    } catch (err) {
      console.error(err); // muestra el error en la consola 
      setError('Error al registrar: ' + (err.response?.data?.message || err.message || 'Error desconocido'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="first_name"
          placeholder="Ingresa tu nombre"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <label>Apellido</label>
        <input
          type="text"
          name="last_name"
          placeholder="Ingresa tu apellido"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="username"
          placeholder="Ingresa tu email"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label>Confirmar Contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirma tu contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Cargando...' : 'Registrarse'}
        </button>
      </form>
      <p>¿Ya tienes cuenta? <Link href="/">Inicia sesión aquí</Link></p>
    </div>
  );
}
