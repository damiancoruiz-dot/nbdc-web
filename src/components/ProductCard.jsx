// src/components/ProductCard.jsx
import { useState } from "react";

export default function ProductCard({ p }) {
  // WhatsApp del negocio
  const waNumber = "524428781486"; // +52 442 878 1486 (sin +)

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
    <article
      className="card product-card"
      id={`prod-${p.id}`}
      data-id={p.id}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Imagen del producto (borde a borde) */}
      {p.image && (
        <div
          className="product-hero"
          style={{
            borderRadius: "16px 16px 0 0",
            overflow: "hidden",
            margin: "-16px -16px 12px -16px",  // imagen sin padding lateral/superior
          }}
        >
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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
        <h3 style={{ margin: "8px 0 6px", fontSize: 22, color: "#0b213a" }}>{p.name}</h3>
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

      {/* Presentaciones */}
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
              fontWeight: 700,
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

      {/* Acciones (apiladas) */}
      <div
        className="card-actions"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: 12,
          marginTop: "auto",    // Siempre al fondo de la tarjeta
        }}
      >
        {p.datasheet && (
          <a
            className="btn btn-secondary"
            href={p.datasheet}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center" }}
          >
            Ficha técnica (PDF)
          </a>
        )}

        <a
          className="btn btn-primary"
          href={buildWaLink()}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center" }}
        >
          Solicitar cotización
        </a>
      </div>
    </article>
  );
}
