// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Nosotros from "./components/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./components/Contacto";
import FabWhatsApp from "./components/FabWhatsApp"; // opcional

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <Nosotros />
      <Productos />   {/* LabInfo se renderiza DENTRO de Productos.jsx */}
      <Contacto />
      <FabWhatsApp /> {/* opcional */}
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
