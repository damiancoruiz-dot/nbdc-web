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

        {/* Botón hamburguesa (móvil) */}
        <button
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`bar ${open ? "open" : ""}`} />
          <span className={`bar ${open ? "open" : ""}`} />
          <span className={`bar ${open ? "open" : ""}`} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`nav-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer móvil */}
      <aside
        id="drawer"
        className={`nav-drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer-header">
          <strong>Menú</strong>
          <button
            className="drawer-close"
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="drawer-links" onClick={() => setOpen(false)}>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </aside>
    </header>
  );
}
