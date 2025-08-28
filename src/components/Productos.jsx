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
    const cardWidth = card ? card.getBoundingClientRect().width : 320;
    rail.scrollBy({ left: dir * (cardWidth + 18), behavior: "smooth" });
  };

  return (
    <section id="productos" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 8 }}>Productos</h2>
        <p className="lead">Portafolio disponible a través de NBDC como distribuidor.</p>

        {/* Carrusel horizontal (desktop y móvil) */}
        <div ref={railRef} className="features hscroll">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {/* Flechas debajo del carrusel */}
        <div className="scroller-controls">
          <button
            type="button"
            className="scroller-btn"
            aria-label="Desplazar productos a la izquierda"
            onClick={() => scrollByCards(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="scroller-btn"
            aria-label="Desplazar productos a la derecha"
            onClick={() => scrollByCards(1)}
          >
            ›
          </button>
        </div>

        {/* Nota legal */}
        <p className="footnote">
          * Información de presentaciones basada en materiales del fabricante. Venta responsable y sujeta a validación.
          No constituye consejo médico; consultar a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}
