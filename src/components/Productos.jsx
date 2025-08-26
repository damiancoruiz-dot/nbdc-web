// src/pages/Productos.jsx
import { useRef } from "react";
import { products } from "../data/products";

export default function Productos() {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: dir * width * 0.8, behavior: "smooth" });
    }
  };

  return (
    <section id="productos" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 8 }}>Productos</h2>
        <p className="lead">Portafolio disponible a través de NBDC como distribuidor.</p>

        {/* Carrusel horizontal */}
        <div ref={scrollRef} className="features hscroll products scroller--peek">
          {products.map((p) => (
            <article key={p.id} className="card product-card">
              {p.image && (
                <div className="product-hero">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
              )}

              <div className="product-body">
                {(p.brandLogo || p.lab) && (
                  <div className="brand-row">
                    {p.brandLogo && (
                      <img
                        src={p.brandLogo}
                        alt={`${p.lab || "Marca"} logo`}
                        className="brand-logo"
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

                {p.includes?.length > 0 && (
                  <details className="product-details">
                    <summary>¿Qué incluye?</summary>
                    <ul>
                      {p.includes.map((i) => <li key={i}>{i}</li>)}
                    </ul>
                  </details>
                )}

                <div className="product-cta">
                  <span className="product-price">
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

        {/* Flechas debajo */}
        <div className="scroller-controls">
          <button className="scroller-btn" onClick={() => scrollBy(-1)}>‹</button>
          <button className="scroller-btn" onClick={() => scrollBy(1)}>›</button>
        </div>

        <p className="footnote">
          * Información de presentaciones basada en materiales del fabricante. Venta responsable y sujeta a validación.
          No constituye consejo médico; consultar a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}
