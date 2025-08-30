// src/pages/Productos.jsx
import { useRef } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import LabInfo from "../components/LabInfo";

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
      <section id="productos" className="section">
        <div className="container">
          <h2 className="h2" style={{ marginBottom: 8 }}>Productos</h2>
          <p className="lead">Portafolio disponible a través de NBDC como distribuidor.</p>

          <div ref={railRef} className="features hscroll">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <div className="scroller-controls">
            <button className="scroller-btn" onClick={() => scrollByCards(-1)} aria-label="Anterior">‹</button>
            <button className="scroller-btn" onClick={() => scrollByCards(1)} aria-label="Siguiente">›</button>
          </div>

          <p className="footnote">
            * Información de presentaciones basada en materiales del fabricante. Venta responsable y sujeta a validación.
            No constituye consejo médico; consultar a un profesional de la salud.
          </p>
        </div>
      </section>

      {/* 👇 SOLO UNA VEZ */}
      <LabInfo />
    </>
  );
}
