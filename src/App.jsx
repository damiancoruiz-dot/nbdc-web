import SplashIntro from "./components/SplashIntro";

export default function App() {
  return (
    <>
      <SplashIntro />
      {/* ...lo que ya tienes (Navbar, Hero, etc.) */}
    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";         // 👈 nuevo
import Nosotros from "./components/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./components/Contacto";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />                                  {/* 👈 aquí va el bloque destacado */}
      <Nosotros />
      <Productos />
      <Contacto />
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
