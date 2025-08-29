// src/pages/Productos.jsx
import { useRef } from "react";
import { products } from "../data/products";

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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

        <div ref={railRef} className="features hscroll">
          {products.map((p) => {
            const pid = `prod-${(p.slug || slugify(p.name))}`;
            return (
              <article key={p.id} id={pid} className="card product-card">
                {/* Imagen */}
                {p.image && (
                  <div className="product-hero">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                )}

                <div className="product-body">
                  {(p.brandLogo || p.lab) && (
                    <div className="brand-row">
                      {p.brandLogo && (
                        <img className="brand-logo" src={p.brandLogo} alt={`${p.lab || "Marca"} logo`} />
                      )}
                      {p.lab && <span className="brand-lab">{p.lab}</span>}
                    </div>
                  )}

                  <h3 className="product-title">{p.name}</h3>
                  {p.short && <p className="product-short">{p.short}</p>}

                  {p.bullets?.length > 0 && (
                    <ul className="product-bullets">
                      {p.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}

                  {p.variants?.length > 0 && (
                    <div className="product-variants">
                      <div className="variants-label">Presentaciones</div>
                      <div className="pills">
                        {p.variants.map((v) => <span key={v} className="pill">{v}</span>)}
                      </div>
                    </div>
                  )}

                  {/* Pie: SOLO CTA, sin precio */}
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                    <a href={p.cta.href} className="btn btn-primary">
                      {p.cta.label || "Solicitar cotización"}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Flechas debajo */}
        <div className="scroller-controls">
          <button type="button" className="scroller-btn" aria-label="Desplazar productos a la izquierda" onClick={() => scrollByCards(-1)}>‹</button>
          <button type="button" className="scroller-btn" aria-label="Desplazar productos a la derecha" onClick={() => scrollByCards(1)}>›</button>
        </div>

        <p className="footnote">
          * Información de presentaciones basada en materiales del fabricante. Venta responsable y sujeta a validación.
          No constituye consejo médico; consultar a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}
