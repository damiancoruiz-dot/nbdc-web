import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        {/* Marca */}
        <a href="#inicio" className="brand" aria-label="Ir al inicio">
          {/* Usa el SVG si existe; si falla, cae al PNG */}
          <img
            src="/brand/nbdc-logo.svg"
            onError={(e) => { e.currentTarget.src = "/brand/nbdc-logo.png"; }}
            alt="NBDC"
            className="brand-logo"
          />
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

        {/* Botón hamburguesa (móvil) */}
        <button
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`bar ${open ? "open" : ""}`} />
          <span className={`bar ${open ? "open" : ""}`} />
          <span className={`bar ${open ? "open" : ""}`} />
        </button>
      </div>

      {/* Overlay y Drawer móvil (clases según tu CSS) */}
      <div
        className={`nav-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside className={`nav-drawer ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="drawer-header">
          <strong>Menú</strong>
          <button className="drawer-close" aria-label="Cerrar" onClick={() => setOpen(false)}>
            ×
          </button>
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
