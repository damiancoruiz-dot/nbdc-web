// src/components/ProductCard.jsx
import { useState } from "react";

const WA_NUMBER = "524428781486"; // +52 442 878 1486 (sin +)

export default function ProductCard({ p }) {
  // Variante por defecto (primera si existe)
  const [variant, setVariant] = useState(p?.variants?.[0] ?? "");

  // Imagen activa: si hay imagen por variante úsala; si no, la general
  const activeImg =
    (p.variantImages && variant && p.variantImages[variant]) || p.image;

  const buildWaLink = () => {
    const base = `Hola, me interesa *${p.name}*`;
    const v = variant ? ` (presentación: ${variant})` : "";
    const extra = ". ¿Me compartes disponibilidad y requisitos de compra?";
    const text = encodeURIComponent(base + v + extra);
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  };

  return (
    <article className="card product-card">
      {/* Imagen */}
      {activeImg && (
        <div className="product-hero">
          <img src={activeImg} alt={p.name} loading="lazy" />
        </div>
      )}

      {/* Cuerpo */}
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

        {/* Bullets */}
        {p.bullets?.length > 0 && (
          <ul className="product-bullets">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}

        {/* Presentaciones (cambia variante + imagen) */}
        {p.variants?.length > 0 && (
          <div className="product-variants">
            <div className="variants-label">Presentaciones</div>
            <div className="pills">
              {p.variants.map((v) => {
                const active = v === variant;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`pill-btn ${active ? "is-active" : ""}`}
                    aria-pressed={active}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Acciones */}
        <div className="card-actions" style={{ marginTop: "auto" }}>
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
            href={buildWaLink()}
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
