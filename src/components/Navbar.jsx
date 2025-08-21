// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        {/* Marca */}
        <a href="#inicio" className="brand" aria-label="Ir al inicio">
          <img src="/brand/nbdc-logo.svg" alt="NBDC" className="brand-logo" />
        </a>

        {/* Links desktop */}
        <nav className="nav-links" aria-label="Principal">
          <a href="#nosotros">Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* CTAs desktop */}
        <div className="nav-cta">
          <a href="#contacto" className="btn-ghost">Contacto</a>
          <a href="#productos" className="btn-cta">Ver catálogo</a>
        </div>

        {/* Burger móvil (se muestra con el media query) */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          <span className={`bar ${open ? "open" : ""}`}></span>
          <span className={`bar ${open ? "open" : ""}`}></span>
          <span className={`bar ${open ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Overlay + Drawer móvil */}
      <div className={`nav-overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`nav-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-header">
          <strong style={{ fontWeight: 700 }}>Menú</strong>
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
