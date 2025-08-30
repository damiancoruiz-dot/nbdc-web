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

        {/* 👇 REVEAL solo en el riel, no en cada card */}
        <div ref={railRef} className="features hscroll reveal">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        <div className="scroller-controls">
          <button className="scroller-btn" onClick={() => scrollByCards(-1)} aria-label="Anterior">‹</button>
          <button className="scroller-btn" onClick={() => scrollByCards(1)} aria-label="Siguiente">›</button>
        </div>

        <p className="footnote">
          * Información de presentaciones basada en materiales del fabricante. Venta responsable y sujeta a validación. No constituye consejo médico; consultar a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}
