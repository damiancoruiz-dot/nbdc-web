// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="nbdc-header" role="banner">
        <div className="nbdc-wrap">
          {/* Marca */}
          <a href="#inicio" className="nbdc-brand" aria-label="Ir al inicio">
            <img src="/brand/nbdc-logo.svg" alt="NBDC" className="nbdc-logo" />
          </a>

          {/* Links (ocultos en móvil) */}
          <nav className="nbdc-links" aria-label="Principal">
            <a href="#nosotros">Nosotros</a>
            <a href="#productos">Productos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          {/* Burger (solo móvil) */}
          <button
            className="nbdc-burger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {/* SVG para evitar texto tipo --- */}
            {!open ? (
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="6" width="18" height="2" rx="1" fill="#fff" />
                <rect x="3" y="11" width="18" height="2" rx="1" fill="#fff" />
                <rect x="3" y="16" width="18" height="2" rx="1" fill="#fff" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6 L18 18 M18 6 L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Overlay + Drawer */}
      <div className={`nbdc-overlay ${open ? "show" : ""}`} onClick={close} />
      <aside
        className={`nbdc-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-label="Menú de navegación"
      >
        <div className="nbdc-drawer-head">
          <strong>Menú</strong>
          <button className="nbdc-close" aria-label="Cerrar" onClick={close}>×</button>
        </div>
        <nav className="nbdc-drawer-links" onClick={close}>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </aside>

      {/* CSS encapsulado para evitar conflictos */}
      <style>{`
        .nbdc-header{
          position: sticky; top:0; z-index:50;
          background:#0b6aa1; color:#fff;
          border-bottom:1px solid rgba(255,255,255,.06);
          box-shadow:0 8px 18px rgba(0,0,0,.08);
          backdrop-filter:saturate(180%) blur(4px);
        }
        .nbdc-wrap{
          max-width:1200px; margin:0 auto;
          padding:18px 24px;
          display:grid; grid-template-columns:auto 1fr auto; gap:20px; align-items:center;
        }
        .nbdc-brand{ display:inline-flex; align-items:center; gap:14px; color:#fff; text-decoration:none; }
        .nbdc-logo{ height:clamp(44px, 6.2vw, 64px); width:auto; object-fit:contain; }

        .nbdc-links{ display:inline-flex; align-items:center; justify-content:center; gap:clamp(16px,3vw,28px); }
        .nbdc-links a{
          color:#e9f1f6; font-weight:600; font-size:15px; letter-spacing:.2px;
          padding:8px 6px; border-radius:8px; text-decoration:none;
          transition:opacity .2s ease, color .2s ease, background .2s ease;
        }
        .nbdc-links a:hover{ color:#fff; background:rgba(255,255,255,.07); }

        .nbdc-burger{
          display:none; /* solo móvil */
          width:42px; height:42px; border:0; background:transparent; border-radius:10px;
          padding:0; margin:0; cursor:pointer;
        }

        /* Overlay / Drawer */
        .nbdc-overlay{
          position:fixed; inset:0;
          background:rgba(0,0,0,.45);
          opacity:0; pointer-events:none; transition:opacity .25s ease;
          z-index:109;
        }
        .nbdc-overlay.show{ opacity:1; pointer-events:all; }

        .nbdc-drawer{
          position:fixed; top:0; right:0; height:100dvh;
          width:86vw; max-width:360px;
          background:#fff; color:#0b213a;
          transform:translateX(100%); transition:transform .25s ease;
          display:flex; flex-direction:column; box-shadow:-12px 0 24px rgba(0,0,0,.18);
          z-index:110;
        }
        .nbdc-drawer.open{ transform:translateX(0); }
        .nbdc-drawer-head{
          display:flex; align-items:center; justify-content:space-between;
          padding:16px 18px; border-bottom:1px solid #eef2f7;
        }
        .nbdc-close{
          background:transparent; border:none; font-size:28px; line-height:1; cursor:pointer; color:#374151;
        }
        .nbdc-drawer-links{ display:grid; gap:2px; padding:12px; }
        .nbdc-drawer-links a{
          display:block; padding:14px 12px; border-radius:10px;
          color:#0b213a; font-weight:600; text-decoration:none;
        }
        .nbdc-drawer-links a:hover{ background:#f3f6fb; }

        /* Responsive: ocultar links y mostrar burger en <900px */
        @media (max-width:900px){
          .nbdc-links{ display:none; }
          .nbdc-burger{ display:inline-flex; }
        }
        @media (min-width:901px){
          .nbdc-burger{ display:none; }
        }
      `}</style>
    </>
  );
}
