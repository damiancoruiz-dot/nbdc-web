// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          {/* Marca */}
          <a href="#inicio" className="brand" aria-label="Ir al inicio">
            <img src="/brand/nbdc-logo.svg" alt="NBDC" className="brand-logo" />
          </a>

          {/* Links (se ocultan en móvil por CSS) */}
          <nav className="nav-links" aria-label="Principal">
            <a href="#nosotros">Nosotros</a>
            <a href="#productos">Productos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          {/* Botón hamburguesa (solo móvil) */}
         <button
  className="nav-toggle"
  aria-label={open ? "Cerrar menú" : "Abrir menú"}
  aria-expanded={open}
  onClick={() => setOpen(!open)}
>
  <span className={`bar ${open ? "open" : ""}`} />
  <span className={`bar ${open ? "open" : ""}`} />
  <span className={`bar ${open ? "open" : ""}`} />
  <span className="sr-only">{open ? "Cerrar" : "Abrir"}</span>
</button>

        </div>
      </header>

      {/* Overlay + Drawer */}
      <div className={`nav-overlay ${open ? "show" : ""}`} onClick={close} />
      <aside
        className={`nav-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-label="Menú"
      >
        <div className="drawer-header">
          <strong>Menú</strong>
          <button className="drawer-close" aria-label="Cerrar" onClick={close}>
            ×
          </button>
        </div>

        <nav className="drawer-links" onClick={close}>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </aside>
    </>
  );
}
