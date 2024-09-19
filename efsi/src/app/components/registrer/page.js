// pages/register.js
import Link from 'next/link';

export default function Register() {
  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      <form>
        <label>Nombre</label>
        <input type="text" placeholder="Ingresa tu nombre" required />
        <label>Email</label>
        <input type="email" placeholder="Ingresa tu email" required />
        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" required />
        <label>Confirmar Contraseña</label>
        <input type="password" placeholder="Confirma tu contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <Link href="/">Inicia sesión aquí</Link></p>
    </div>
  );
}