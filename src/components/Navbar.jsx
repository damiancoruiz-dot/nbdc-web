// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        {/* Marca */}
        <a href="#inicio" className="brand" aria-label="Ir al inicio">
          {/* Usa el SVG si lo tienes en /public/brand/nbdc-logo.svg */}
          <img
            src="/brand/nbdc-logo.svg"
            onError={(e) => { e.currentTarget.src = "/brand/nbdc-logo.png"; }}
            alt="NBDC"
            className="brand-logo"
          />
          {/* Si algún día quieres texto al lado del ícono:
          <span className="brand-name">NBDC</span> */}
        </a>

        {/* Links (desktop) */}
        <nav className="nav-links">
          <a href="#nosotros">Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* CTAs (desktop) */}
        <div className="nav-cta">
          <a href="#contacto" className="btn-ghost">Contacto</a>
          <a href="#productos" className="btn-cta">Ver catálogo</a>
        </div>

        {/* Botón móvil */}
        <button
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* Drawer móvil */}
      <aside className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-head">
          <strong>Menú</strong>
          <button className="drawer-close" aria-label="Cerrar" onClick={() => setOpen(false)}>×</button>
        </div>

        <nav className="drawer-links" onClick={() => setOpen(false)}>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="drawer-cta">
          <a href="#productos" className="btn-cta block">Ver catálogo</a>
          <a href="#contacto" className="btn-ghost block">Contacto</a>
        </div>
      </aside>
    </header>
  );
}
