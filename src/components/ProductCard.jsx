// src/components/ProductCard.jsx
import { useState } from "react";

export default function ProductCard({ p }) {
  // Número de WhatsApp (con país, sin +). Ej: 52XXXXXXXXXX
  const waNumber = "5299900000000";

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
    <div className="card product-card" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Imagen del producto */}
      {p.image && (
        <div className="prod-thumb">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            width={800}
            height={500}
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

      {/* Título + descripción corta */}
      <div>
        <h3 style={{ margin: "0 0 6px", fontSize: 18, color: "#0b213a" }}>{p.name}</h3>
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
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 13,
                    cursor: "pointer",
                    border: active ? "1px solid #026fd0" : "1px solid #d1d5db",
                    background: active ? "#e9f2ff" : "#f9fafb",
                    color: active ? "#026fd0" : "#0b213a",
                    transition: "all .15s ease",
                  }}
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

      {/* Precio + CTA */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        <div style={{ fontWeight: 700, color: "#0b213a" }}>
          {p.price ? `$${p.price.toLocaleString("es-MX")} MXN` : "Precio por confirmar"}
        </div>

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
    </div>
  );
}
