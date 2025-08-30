// src/App.jsx
import "./index.css";

// Intro (cortinilla del logo)
import SplashIntro from "./components/SplashIntro";

// Secciones
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Nosotros from "./components/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./components/Contacto";

// Animación de aparición al hacer scroll
import useReveal from "./hooks/useReveal";

export default function App() {
  // Activa animación para cualquier elemento con className="reveal"
  useReveal(); // usa el selector por defecto ".reveal"

  return (
    <>
      <SplashIntro />

      <Navbar />
      <Hero />

      <main>
        <Quote />
        <Nosotros />
        <Productos />
        <Contacto />
      </main>

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
