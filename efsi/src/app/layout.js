import localFont from "next/font/local";
import Link from "next/link";

// Importación de estilos globales y de bootstrap
import "./bootstrap-icons.css";
import "./bootstrap.min.css";
import "./globals.css";
import TokenProvider from "@/context/TokenContext";
import Navbar from "./components/Navbar";

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
        <TokenProvider>
        {/* Encabezado con logo y menú de navegación */}
        <header className="bg-dark text-light py-3">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo d-flex align-items-center">
              <Link href="/" className="text-light text-decoration-none">
                <img src="/images/logo.png" alt="Logo" style={{ height: '70px' }} />
              </Link>
            </div>
            <Navbar />
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
        </TokenProvider>
      </body>
    </html>
  );
}
