import React, { useState } from "react";

const WA_NUMBER = "524428781486";

function buildWaLink(p, variantLabel) {
  const base = `Hola, me interesa *${p.name}*${variantLabel ? ` (${variantLabel})` : ""}. ¿Me compartes precio, disponibilidad y requisitos de compra?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(base)}`;
}

export default function ProductCard({ p }) {
  const [activeVar, setActiveVar] = useState(p?.variants?.[0] || null);
  const [showModal, setShowModal] = useState(false);

  const currentImage =
    (activeVar && p.imageVariants?.[activeVar]) || p.image;

  return (
    <>
      <article id={`prod-${p.id}`} data-id={p.id} className="product-card">
        {/* Imagen principal */}
        {currentImage && (
          <div className="product-hero" onClick={() => setShowModal(true)}>
            <img src={currentImage} alt={p.name} loading="lazy" />
          </div>
        )}

        {/* Cuerpo de la tarjeta */}
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

          {Array.isArray(p.bullets) && p.bullets.length > 0 && (
            <ul className="product-bullets">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}

          {Array.isArray(p.variants) && p.variants.length > 0 && (
            <div className="product-variants">
              <div className="variants-label">Presentaciones</div>
              <div className="pills">
                {p.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={`pill-btn ${activeVar === v ? "is-active" : ""}`}
                    onClick={() => setActiveVar(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="card-actions">
            {p.datasheet && (
              <a
                className="btn btn-secondary"
                href={p.datasheet}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ficha técnica (PDF)
              </a>
            )}
            <a
              href={buildWaLink(p, activeVar)}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </article>

      {/* ========= MODAL IMAGEN CON NAVEGACIÓN ========= */}
      {showModal && (
        <div className="image-modal" onClick={() => setShowModal(false)}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={currentImage} alt={p.name} />

            {/* Botones de navegación solo si hay variantes */}
            {Array.isArray(p.variants) && p.variants.length > 1 && (
              <>
                <button
                  className="image-nav-btn prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    const index = p.variants.indexOf(activeVar);
                    const newIndex =
                      index <= 0 ? p.variants.length - 1 : index - 1;
                    setActiveVar(p.variants[newIndex]);
                  }}
                >
                  ‹
                </button>

                <button
                  className="image-nav-btn next"
                  onClick={(e) => {
                    e.stopPropagation();
                    const index = p.variants.indexOf(activeVar);
                    const newIndex =
                      index >= p.variants.length - 1 ? 0 : index + 1;
                    setActiveVar(p.variants[newIndex]);
                  }}
                >
                  ›
                </button>
              </>
            )}

            <button
              className="image-modal-close"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            {activeVar && (
              <div className="image-variant-label">
                {p.name} — {activeVar}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
