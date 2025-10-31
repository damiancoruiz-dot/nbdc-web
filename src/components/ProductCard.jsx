// src/components/ProductCard.jsx
import React, { useState } from "react";

const WA_NUMBER = "524428781486";

function buildWaLink(p, variantLabel) {
  const base = `Hola, me interesa *${p.name}*${variantLabel ? ` (${variantLabel})` : ""}. ¿Me compartes precio, disponibilidad y requisitos de compra?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(base)}`;
}

export default function ProductCard({ p }) {
  const [activeVar, setActiveVar] = useState(p?.variants?.[0] || null);

  const currentImage =
    (activeVar && p.imageVariants?.[activeVar]) || p.image;

  return (
    <article id={`prod-${p.id}`} data-id={p.id} className="product-card">
  {/* IMAGEN IZQUIERDA */}
  {currentImage && (
    <div className="product-hero">
      <img src={currentImage} alt={p.name} loading="lazy" />
    </div>
  )}

  {/* CONTENIDO DERECHA */}
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

  );
}
