// src/pages/Productos.jsx
import { useRef } from "react";
import { products } from "../data/products";

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
            <article key={p.id} className="card product-card">
              {/* Imagen del producto */}
              {p.image && (
                <div className="product-hero">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
              )}

              {/* Contenido */}
              <div className="product-body">
                {(p.brandLogo || p.lab) && (
                  <div className="brand-row">
                    {p.brandLogo && (
                      <img
                        className="brand-logo"
                        src={p.brandLogo}
                        alt={`${p.lab || "Marca"} logo`}
                      />
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
                      {p.variants.map((v) => (
                        <span key={v} className="pill">{v}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "auto"
                }}>
                  <span style={{ fontSize: 14, color: "var(--ink-500)" }}>
                    <em>{p.price ? `$${p.price.toLocaleString("es-MX")} MXN` : "Precio por confirmar"}</em>
                  </span>
                  <a href={p.cta.href} className="btn btn-primary">
                    {p.cta.label}
                  </a>
                </div>
              </div>
            </article>
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
