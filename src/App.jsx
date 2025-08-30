// src/App.jsx
import SplashIntro from "./components/SplashIntro";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Nosotros from "./components/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./components/Contacto";
import FabWhatsApp from "./components/FabWhatsApp";

export default function App() {
  return (
    <>
      <SplashIntro />   {/* cortinilla al cargar */}
      <Navbar />
      <Hero />
      <Quote />
      <Nosotros />
      <Productos />     {/* LabInfo vive dentro de Productos.jsx */}
      <Contacto />
      <FabWhatsApp />   {/* botón flotante */}
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
    </>
  );
}
