import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./components/Contacto";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
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
