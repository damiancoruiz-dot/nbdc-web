import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Quote from "./components/Quote.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Productos from "./components/Productos.jsx";
import Contacto from "./components/Contacto.jsx";
import WhatsAppFab from "./components/WhatsAppFab.jsx"; // <— nombre y ruta exactos
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
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

      <WhatsAppFab />
    </>
  );
}
