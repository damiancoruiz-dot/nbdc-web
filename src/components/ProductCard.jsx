// src/components/ProductCard.jsx
import { useState, useMemo } from "react";

const WA_NUMBER = "524428781486"; // +52 442 878 1486 (sin +)

export default function ProductCard({ p }) {
  const [variant, setVariant] = useState(p?.variants?.[0] ?? "");

  // Imagen que se muestra: variante (si hay) o imagen general
  const heroImage = useMemo(() => {
    if (variant && p.variantImages?.[variant]) return p.variantImages[variant];
    return p.image;
  }, [p.image, p.variantImages, variant]);

  const buildWaLink = () => {
    const base = `Hola, me interesa *${p.name}*${variant ? ` (presentación: ${variant})` : ""}. ¿Me compartes precio, disponibilidad y requisitos de compra?`;
    const text = encodeURIComponent(base);
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  };

  return (
    <article id={`prod-${p.id}`} data-id={p.id} className="card product-card">
      {/* Imagen */}
      {heroImage && (
        <div className="product-hero">
          <img src={heroImage} alt={p.name} loading="lazy" />
        </div>
      )}

      {/* Contenido */}
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
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}

        {p.variants?.length > 0 && (
          <div className="product-variants">
            <div className="variants-label">Presentaciones</div>
            <div className="pills">
              {p.variants.map((v) => {
                const active = variant === v;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`pill-btn${active ? " is-active" : ""}`}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Acciones */}
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
            className="btn btn-primary"
            href={buildWaLink()}
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
