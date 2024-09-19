import localFont from "next/font/local";
import Link from "next/link";

// Importación de estilos globales y de bootstrap
import "./bootstrap-icons.css";
import "./bootstrap.min.css";
import "./globals.css";

// Fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata del sitio
export const metadata = {
  title: "Eventos",
  description: "Plataforma de gestión de eventos",
};

// Layout principal
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased d-flex flex-column min-vh-100`}
      >
        {/* Encabezado con logo y menú de navegación */}
        <header className="bg-dark text-light py-3">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo d-flex align-items-center">
              <Link href="/" className="text-light text-decoration-none">
                <img src="/images/logo.png" alt="Logo" style={{ height: '70px' }} />
              </Link>
            </div>
            <nav>
              <ul className="nav d-flex align-items-center">
                <li className="nav-item">
                  <Link href="/index" className="nav-link text-light">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contacto" className="nav-link text-light">
                    Contacto
                  </Link>
                </li>
                {/* Mostrar cuando el usuario está logueado */}
                <li className="nav-item">
                  <a href="/profile" className="nav-link text-light">
                    <i className="bi bi-person-circle"></i> Juan Perez
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/logout" className="nav-link text-light">
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Contenido de la página */}
        <main className="flex-grow-1 py-4">
          <div className="container">
            {/*  <TokenProvider>  */}
              {children}
            {/*  </TokenProvider>  */}
          </div>
        </main>

        {/* Pie de página */}
        <footer className="bg-dark text-light text-center py-3 mt-auto">
          <div className="container">
            <p>&copy; 2024 Eventos. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
