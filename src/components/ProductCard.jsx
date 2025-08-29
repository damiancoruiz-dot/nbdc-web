// src/components/ProductCard.jsx
import { useState } from "react";

const WA_NUMBER = "524428781486"; // +52 442 878 1486 (sin +)

export default function ProductCard({ p, dataId }) {
  const [variant, setVariant] = useState(p?.variants?.[0] ?? "");
  const [openIncludes, setOpenIncludes] = useState(false);

  const buildWaLink = () => {
    const base = `Hola, me interesa *${p.name}*`;
    const v = variant ? ` (presentación: ${variant})` : "";
    const extra = "\n¿Me compartes precio, disponibilidad y requisitos de compra?";
    const text = encodeURIComponent(`${base}${v}.${extra}`);
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  };

  // Si se decide usar imágenes por variante en el futuro:
  const imgSrc = variant && p.variantImages?.[variant] ? p.variantImages[variant] : p.image;

  return (
    <article
      className="card product-card"
      // 👉 estos dos atributos permiten que el Hero localice y destaque la tarjeta
      data-id={dataId}
      id={dataId ? `prod-${dataId}` : undefined}
      style={{ display: "flex", flexDirection: "column", padding: 16, gap: 12 }}
    >
      {/* Imagen */}
      {imgSrc && (
        <div className="product-hero">
          <img src={imgSrc} alt={p.name} loading="lazy" />
        </div>
      )}

      {/* Encabezado pequeño con logo + laboratorio */}
      {(p.brandLogo || p.lab || p.brandName) && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6b7785", fontSize: 13 }}>
          {p.brandLogo ? (
            <img
              src={p.brandLogo}
              alt={p.lab || p.brandName || "Marca"}
              style={{ height: 18, width: "auto", objectFit: "contain" }}
            />
          ) : null}
          <span>{p.lab || p.brandName}</span>
        </div>
      )}

      {/* Título + descripción */}
      <div>
        <h3 style={{ margin: "0 0 6px", fontSize: 20, color: "#0b213a" }}>{p.name}</h3>
        {(p.short || p.desc) && (
          <p style={{ margin: "0 0 10px", color: "#556070" }}>
            {p.short || p.desc}
          </p>
        )}
      </div>

      {/* Bullets */}
      {p.bullets?.length ? (
        <ul style={{ margin: "0 0 6px 16px", color: "#556070", fontSize: 14 }}>
          {p.bullets.map((b) => (
            <li key={b} style={{ marginBottom: 4 }}>{b}</li>
          ))}
        </ul>
      ) : null}

      {/* Variantes */}
      {p.variants?.length ? (
        <div>
          <div style={{ fontWeight: 600, marginBottom: 6, color: "#0b213a" }}>Presentaciones</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
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
      ) : null}

      {/* Acordeón: ¿Qué incluye? */}
      {p.includes?.length ? (
        <div style={{ marginTop: 6 }}>
          <button
            type="button"
            onClick={() => setOpenIncludes((s) => !s)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              border: "none",
              color: "#0b213a",
              cursor: "pointer",
              padding: 0,
              fontWeight: 600,
            }}
          >
            <span style={{ transform: openIncludes ? "rotate(90deg)" : "none", transition: "transform .15s" }}>
              ▶
            </span>
            ¿Qué incluye?
          </button>
          <div
            style={{
              maxHeight: openIncludes ? 200 : 0,
              overflow: "hidden",
              transition: "max-height .25s ease",
            }}
          >
            <ul style={{ margin: "8px 0 0 16px", color: "#556070", fontSize: 14 }}>
              {p.includes.map((it) => (
                <li key={it} style={{ marginBottom: 4 }}>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {/* Acciones (alineadas abajo con marginTop:auto) */}
      <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        {/* Botón de PDF si existe */}
        {p.datasheet ? (
          <a
            className="btn btn-secondary"
            href={p.datasheet}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ficha técnica (PDF)
          </a>
        ) : <span />}

        <a
          className="btn btn-primary"
          href={buildWaLink()}
          target="_blank"
          rel="noopener noreferrer"
          style={{ whiteSpace: "nowrap" }}
        >
          Solicitar cotización
        </a>
      </div>
    </article>
  );
}
