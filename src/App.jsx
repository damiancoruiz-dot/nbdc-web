import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  return (
    <>
      {/* Tu contenido habitual */}
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

      {/* Botón flotante */}
      <WhatsAppFab />
    </>
  );
}
