// src/pages/Productos.jsx
import { useRef } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Productos() {
  const railRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector(".card");
    const w = card ? card.getBoundingClientRect().width : 320;
    rail.scrollBy({ left: dir * (w + 18), behavior: "smooth" });
  };

  return (
    <section id="productos" className="section reveal">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 8 }}>Encuentra el producto ideal para ti</h2>
        <p className="lead">Portafolio disponible a través de NBDC como distribuidor.</p>

        {/* Carrusel de productos */}
        <div ref={railRef} className="features hscroll reveal">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {/* Flechas */}
        <div className="scroller-controls">
          <button className="scroller-btn" onClick={() => scrollByCards(-1)} aria-label="Anterior">‹</button>
          <button className="scroller-btn" onClick={() => scrollByCards(1)} aria-label="Siguiente">›</button>
        </div>

        {/* ---------- Sección Laboratorio / Marca ---------- */}
        <section className="lab-section reveal">
          <div className="lab-card">
            <div className="lab-header">
              <img className="lab-logo" src="/brand/xentra-logo.png" alt="Xentra Pharma" />
              <div>
                <h3 className="lab-title">Acerca de Xentra Pharma</h3>
                <p className="lab-lead">
                  Fabricante aliado que cumple con estándares de calidad, trazabilidad y soporte técnico.
                </p>
              </div>
            </div>

            <details className="lab-details">
              <summary className="lab-summary">Ver detalles</summary>
              <div className="lab-body">
                <h4 className="lab-h4">Cumplimiento y calidad</h4>
                <ul className="lab-list">
                  <li>Control de cadena de suministro y documentación.</li>
                  <li>Materiales e insumos verificados con trazabilidad.</li>
                </ul>

                <h4 className="lab-h4">Logística y soporte</h4>
                <ul className="lab-list">
                  <li>Entrega nacional con embalaje seguro.</li>
                  <li>Asesoría y guía de uso para profesionales de la salud.</li>
                </ul>
              </div>
            </details>
          </div>
        </section>

        {/* Nota legal */}
        <p className="footnote">
          * Información de presentaciones basada en materiales del fabricante. Venta responsable y sujeta a validación.
          No constituye consejo médico; consultar a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}
