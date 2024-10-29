import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token'); // Obtener el token de las cookies
  const { pathname } = req.nextUrl;
  console.log('hola',token);

  // Redirigir a /login si el usuario intenta acceder a /home o cualquier ruta protegida sin token
  if (pathname === '/home' && !token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Puedes agregar más rutas protegidas verificando si el token existe
  if (pathname.startsWith('/event') && !token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Si el usuario intenta acceder a /login estando logueado (token presente), redirigir a /home
  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  // Permitir el acceso a la ruta solicitada si ninguna de las condiciones anteriores se cumple
  return NextResponse.next();
}
