import { useState } from "react";
import { theme } from "../theme";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: theme.colors.primary,
    color: "white",
    borderBottom: "1px solid rgba(255,255,255,.08)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: 14,
    opacity: 0.95,
    transition: "opacity 0.2s, border-bottom 0.2s",
    paddingBottom: 2,
  };

  return (
    <header style={navStyle}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "white",
            textDecoration: "none",
          }}
        >
          <img
            src="/brand/nbdc-logo.png"
            alt="NBDC"
            style={{ height: 32 }}
          />
 
        </a>

        {/* Botón hamburguesa (solo móviles) */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "white",
            fontSize: 22,
            cursor: "pointer",
          }}
          className="nav-toggle"
        >
          ☰
        </button>

        {/* Links */}
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          style={{
            display: "flex",
            gap: 18,
          }}
        >
          <a href="#inicio" style={linkStyle}>
            Inicio
          </a>
          <a href="#nosotros" style={linkStyle}>
            Nosotros
          </a>
          <a href="#productos" style={linkStyle}>
            Productos
          </a>
          <a href="#contacto" style={linkStyle}>
            Contacto
          </a>
        </nav>
      </div>

      {/* Estilos responsivos */}
      <style>
        {`
          .nav-toggle {
            display: none;
          }

          .nav-links a:hover {
            opacity: 1;
            border-bottom: 1px solid white;
          }

          @media (max-width: 768px) {
            .nav-toggle {
              display: block;
            }

            .nav-links {
              display: none;
              flex-direction: column;
              background: ${theme.colors.primary};
              padding: 10px 20px;
            }

            .nav-links.open {
              display: flex;
            }
          }
        `}
      </style>
    </header>
  );
}
