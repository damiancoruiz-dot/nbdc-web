// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Nosotros from "./components/Nosotros";
import Productos from "./pages/Productos";
import LabInfo from "./components/LabInfo";
import Contacto from "./components/Contacto";
import FabWhatsApp from "./components/FabWhatsApp";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <Nosotros />
      <Productos />
      <LabInfo />
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

      {/* Botón flotante de WhatsApp */}
      <FabWhatsApp />
    </>
  );
}
