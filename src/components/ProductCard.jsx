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
      {currentImage && (
        <div className="product-hero">
          <img src={currentImage} alt={p.name} loading="lazy" />
        </div>
      )}

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
              {p.variants?.map((variant) => (
              <button
                key={variant}
                onClick={() => setActiveVar(variant)}
                className={`px-3 py-1 text-sm rounded-full border transition-all ${
                  activeVar === variant
                    ? "bg-blue-50 border-blue-500 text-blue-600"
                    : "bg-gray-50 border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {variant}
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
