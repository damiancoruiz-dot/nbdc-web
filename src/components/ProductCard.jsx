// src/components/ProductCard.jsx
import React, { useState, useMemo } from "react";

const WA_NUMBER = "524428781486";
const FALLBACK_IMG = "/images/products/placeholder.webp"; // cambia si ya tienes uno

function buildWaLink(p, variantLabel) {
  const base = `Hola, me interesa *${p.name}*${variantLabel ? ` (${variantLabel})` : ""}. ¿Me compartes precio, disponibilidad y requisitos de compra?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(base)}`;
}

export default function ProductCard({ p }) {
  const hasVariants = Array.isArray(p?.variants) && p.variants.length > 0;
  const [activeVar, setActiveVar] = useState(hasVariants ? p.variants[0] : null);

  // Estado de imagen
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgErrored, setImgErrored] = useState(false);

  const requestedSrc = useMemo(() => {
    if (activeVar && p.variantImages?.[activeVar]) return p.variantImages[activeVar];
    return p.image;
  }, [activeVar, p]);

  // Fuente final: si falla requestedSrc → fallback
  const finalSrc = imgErrored || !requestedSrc ? FALLBACK_IMG : requestedSrc;

  const categoryLabel = p?.category ? `Categoría: ${p.category}` : null;

  return (
    <article
      id={`prod-${p.id}`}
      data-id={p.id}
      className="card product-card"
      aria-labelledby={`title-${p.id}`}
      aria-describedby={`desc-${p.id}`}
    >
      {/* Badge de categoría */}
      {p.category && (
        <div className="category-pill" title={categoryLabel} aria-label={categoryLabel}>
          {p.category}
        </div>
      )}

      {/* Imagen con Skeleton */}
      <div className="product-hero">
        {!imgLoaded && (
          <div className="skeleton skeleton-hero" aria-hidden="true" />
        )}
        <img
          src={finalSrc}
          alt={p.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          onError={() => {
            // si ya es el fallback, evita bucle infinito
            if (finalSrc !== FALLBACK_IMG) setImgErrored(true);
            // mostrar skeleton solo si también falla el fallback
            if (finalSrc === FALLBACK_IMG) setImgLoaded(true);
          }}
          style={{
            width: "100%",
            height: "auto",
            display: imgLoaded ? "block" : "none"
          }}
        />
      </div>

      <div className="product-body">
        {(p.brandLogo || p.lab) && (
          <div className="brand-row">
            {p.brandLogo && (
              <img
                className="brand-logo"
                src={p.brandLogo}
                alt={`${p.lab || "Marca"} logo`}
                loading="lazy"
                decoding="async"
              />
            )}
            {p.lab && <span className="brand-lab">{p.lab}</span>}
          </div>
        )}

        <h3 id={`title-${p.id}`} className="product-title">
          {p.name}
        </h3>
        {p.short && (
          <p id={`desc-${p.id}`} className="product-short">
            {p.short}
          </p>
        )}

        {Array.isArray(p.bullets) && p.bullets.length > 0 && (
          <ul className="product-bullets">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}

        {hasVariants && (
          <div className="product-variants">
            <div className="variants-label">Presentaciones</div>
            <div className="pills" role="tablist" aria-label={`Presentaciones de ${p.name}`}>
              {p.variants.map((v) => {
                const selected = activeVar === v;
                return (
                  <button
                    key={v}
                    type="button"
                    className={`pill-btn ${selected ? "is-active" : ""}`}
                    onClick={() => {
                      setImgLoaded(false); // fuerza skeleton mientras cambia imagen
                      setImgErrored(false);
                      setActiveVar(v);
                    }}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`img-${p.id}`}
                  >
                    {v}
                  </button>
                );
              })}
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
              aria-label={`Abrir ficha técnica de ${p.name} en PDF`}
            >
              Ficha técnica (PDF)
            </a>
          )}
          <a
            href={buildWaLink(p, activeVar)}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Solicitar cotización de ${p.name}${activeVar ? `, presentación ${activeVar}` : ""} por WhatsApp`}
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </article>
  );
}