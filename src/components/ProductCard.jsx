// src/components/ProductCard.jsx
import { useState, useMemo } from "react";

export default function ProductCard({ p }) {
  // WhatsApp sin "+"
  const waNumber = "524428781486";

  // Variante seleccionada (primera por defecto)
  const [variant, setVariant] = useState(p?.variants?.[0] ?? "");

  // Imagen actual: si existe un mapa por variante úsalo; si no, usa p.image
  const currentImage = useMemo(() => {
    if (p?.imagesByVariant && variant && p.imagesByVariant[variant]) {
      return p.imagesByVariant[variant];
    }
    return p.image;
  }, [p, variant]);

  // Link dinámico a WhatsApp con producto + variante
  const buildWaLink = () => {
    const base = `Hola, me interesa *${p.name}*`;
    const v = variant ? ` (presentación: ${variant})` : "";
    const extra =
      "\n¿Me compartes precio, disponibilidad y requisitos de compra?";
    const text = encodeURIComponent(`${base}${v}.${extra}`);
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  return (
    <article className="card product-card" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Imagen del producto */}
      {currentImage && (
        <div className="prod-thumb">
          <img
            src={currentImage}
            alt={p.name}
            loading="lazy"
            width={800}
            height={500}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
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
        <h3 style={{ margin: "0 0 6px", fontSize: 18, color: "var(--ink-900)" }}>{p.name}</h3>
        {(p.short || p.desc) && (
          <p style={{ margin: "0 0 10px", color: "var(--ink-700)" }}>
            {p.short || p.desc}
          </p>
        )}
      </div>

      {/* Bullets */}
      {p.bullets?.length ? (
        <ul style={{ margin: "0 0 6px 16px", color: "var(--ink-700)", fontSize: 14 }}>
          {p.bullets.map((b) => (
            <li key={b} style={{ marginBottom: 4 }}>{b}</li>
          ))}
        </ul>
      ) : null}

      {/* Presentaciones (variante seleccionable) */}
      {p.variants?.length ? (
        <div>
          <div style={{ fontWeight: 600, marginBottom: 6, color: "var(--ink-900)" }}>Presentaciones</div>
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
                    background: active ? "#e9f2ff" : "#f7f9fc",
                    color: active ? "#026fd0" : "var(--ink-900)",
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
        <details style={{ marginTop: 6 }}>
          <summary style={{ cursor: "pointer", fontSize: 13, color: "var(--ink-900)", fontWeight: 600 }}>
            ¿Qué incluye?
          </summary>
          <ul style={{ margin: "8px 0 0 16px", color: "var(--ink-700)", fontSize: 14 }}>
            {p.includes.map((it) => (
              <li key={it} style={{ marginBottom: 4 }}>{it}</li>
            ))}
          </ul>
        </details>
      ) : null}

      {/* Precio + CTA */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        <div style={{ fontWeight: 700, color: "var(--ink-900)" }}>
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
    </article>
  );
}
