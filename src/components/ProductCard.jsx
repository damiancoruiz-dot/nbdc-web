// src/components/ProductCard.jsx
import { useState } from "react";

export default function ProductCard({ p }) {
  const waNumber = "524428781486"; // +52 442 878 1486 sin '+'
  const [variant, setVariant] = useState(p?.variants?.[0] ?? "");
  const [openIncludes, setOpenIncludes] = useState(false);

  const buildWaLink = () => {
    const base = `Hola, me interesa *${p.name}*`;
    const v = variant ? ` (presentación: ${variant})` : "";
    const extra = "\n¿Me compartes precio, disponibilidad y requisitos de compra?";
    const text = encodeURIComponent(`${base}${v}.${extra}`);
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  return (
    <article className="card product-card reveal" data-id={p.id}>
      {/* Imagen del producto full-bleed con máscara redondeada */}
      {p.image && (
        <div className="product-hero">
          <img src={p.image} alt={p.name} loading="lazy" />
        </div>
      )}

      {/* Encabezado pequeño con logo + laboratorio */}
      {(p.brandLogo || p.lab || p.brandName) && (
        <div className="brand-row">
          {p.brandLogo ? (
            <img className="brand-logo" src={p.brandLogo} alt={p.lab || p.brandName || "Marca"} />
          ) : null}
          <span className="brand-lab">{p.lab || p.brandName}</span>
        </div>
      )}

      {/* Título + descripción */}
      <h3 className="product-title">{p.name}</h3>
      {(p.short || p.desc) && <p className="product-short">{p.short || p.desc}</p>}

      {/* Bullets */}
      {p.bullets?.length ? (
        <ul className="product-bullets">
          {p.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      ) : null}

      {/* Presentaciones */}
      {p.variants?.length ? (
        <div className="product-variants">
          <div className="variants-label">Presentaciones</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {p.variants.map((v) => {
              const active = variant === v;
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`pill-btn ${active ? "is-active" : ""}`}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Acordeón: ¿Qué incluye? */}
      {p.includes?.length ? (
        <div style={{ marginTop: 6 }}>
          <details>
            <summary style={{ cursor: "pointer", fontSize: 16, color: "var(--ink-900)", fontWeight: 700 }}>
              ¿Qué incluye?
            </summary>
            <ul style={{ margin: "8px 0 0 16px", color: "#556070", fontSize: 14 }}>
              {p.includes.map((it) => <li key={it} style={{ marginBottom: 4 }}>{it}</li>)}
            </ul>
          </details>
        </div>
      ) : null}

      {/* Acciones apiladas y pegadas al fondo */}
      <div className="card-actions">
        {p.datasheet && (
          <a className="btn btn-secondary" href={p.datasheet} target="_blank" rel="noopener noreferrer">
            Ficha técnica (PDF)
          </a>
        )}
        <a className="btn btn-primary" href={buildWaLink()} target="_blank" rel="noopener noreferrer">
          Solicitar cotización
        </a>
      </div>
    </article>
  );
}
