// src/App.jsx
import SplashIntro from "./components/SplashIntro.jsx";
import WhatsAppFab from "./components/WhatsAppFab.jsx";
import Maintenance from "./components/Maintenance.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Quote from "./components/Quote.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Productos from "./components/Productos.jsx";
import Contacto from "./components/Contacto.jsx";

export default function App() {
  // --- ACTIVAR / DESACTIVAR ---
  const MAINTENANCE_MODE = true; // ← cámbialo a false para restaurar el sitio
  // ----------------------------

  if (MAINTENANCE_MODE) {
    return <Maintenance />;  // ← solo muestra la pantalla de mantenimiento
  }

  // Si NO está en mantenimiento, muestra la web normal
  return (
    <>
      {/* Cortinilla de inicio */}
      <SplashIntro />

      {/* Contenido principal */}
      <Navbar />
      <Hero />
      <Quote />
      <Nosotros />
      <Productos />
      <Contacto />

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px 0",
          background: "#f0f4f8",
          marginTop: 24,
          color: "#607086",
        }}
      >
        © {new Date().getFullYear()} NBDC | Nationwide Bio Distribution Center — Envíos a todo México
      </footer>

      {/* Botón flotante WhatsApp */}
      <WhatsAppFab />
    </>
  );
}
