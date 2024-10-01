"use client";  // Asegúrate de que esta línea esté descomentada

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Importa desde 'next/navigation'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const router = useRouter(); // Utiliza useRouter aquí

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

    try {
      await axios.post('/api/user/register', {
        username: formData.email,
        password: formData.password,
        first_name: formData.name,
      });
      alert('Usuario registrado con éxito');
      router.push('/'); // Redirigir a la página de login
    } catch (err) {
      setError('Error al registrar: ' + err.response?.data?.message || err.message);
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
          name="name"
          placeholder="Ingresa tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={formData.email}
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
        <button type="submit" className="button">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <Link href="/">Inicia sesión aquí</Link></p>
    </div>
  );
}

