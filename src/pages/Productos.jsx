// src/pages/Productos.jsx
import { useRef } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import LabInfo from "../components/LabInfo"; // 👈 vuelve a estar presente

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
    <>
      {/* Fondo suave + sin sombras (lo haremos en CSS) */}
      <section id="productos" className="section section-products">
        <div className="container">
          <h2 className="h2" style={{ marginBottom: 8 }}>
            Encuentra el producto ideal para ti
          </h2>
          <p className="lead">Portafolio disponible a través de NBDC como distribuidor.</p>

          {/* Carrusel horizontal */}
          <div ref={railRef} className="features hscroll reveal">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          {/* Flechas debajo */}
          <div className="scroller-controls">
            <button
              className="scroller-btn"
              onClick={() => scrollByCards(-1)}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className="scroller-btn"
              onClick={() => scrollByCards(1)}
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>

          <p className="footnote">
            * Información de presentaciones basada en materiales del fabricante. Venta responsable y sujeta a validación. No constituye consejo médico.
          </p>
        </div>
      </section>

      {/* 👇 Sección de laboratorio (Xentra Pharma) vuelve a aparecer aquí */}
      <LabInfo />
    </>
  );
}
