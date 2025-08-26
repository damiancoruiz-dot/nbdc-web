// src/pages/Productos.jsx
import { products } from "../data/products";

export default function Productos() {
  return (
    <section id="productos" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 8 }}>Productos</h2>
        <p className="lead">Portafolio disponible a través de NBDC como distribuidor.</p>

        {/* Carrusel horizontal (desktop y móvil) */}
        <div className="features hscroll">
          {products.map((p) => (
            <article key={p.id} className="card product-card">
              {/* imagen arriba */}
              {p.image && (
                <div className="prod-thumb">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                  />
                </div>
              )}

              {/* Encabezado proveedor */}
              {(p.brandLogo || p.lab) && (
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  {p.brandLogo && (
                    <img
                      src={p.brandLogo}
                      alt={`${p.lab || "Marca"} logo`}
                      style={{ height: 26, width: "auto", objectFit: "contain" }}
                    />
                  )}
                  {p.lab && <div style={{ fontSize: 13, color: "#556070" }}>{p.lab}</div>}
                </div>
              )}

              {/* Título y descripción */}
              <h3 style={{ margin: "0 0 6px", fontSize: 20, color: "#0b213a" }}>{p.name}</h3>
              {p.short && <p style={{ color: "#556070", margin: "0 0 12px" }}>{p.short}</p>}

              {/* Bullets */}
              {p.bullets?.length > 0 && (
                <ul style={{ paddingLeft: 18, margin: "0 0 12px", color: "#556070", fontSize: 14 }}>
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}

              {/* Variantes */}
              {p.variants?.length > 0 && (
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 13, color: "#0b213a", fontWeight: 600, marginBottom: 6 }}>
                    Presentaciones
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.variants.map((v) => (
                      <span
                        key={v}
                        style={{
                          border: "1px solid #e8eef6",
                          borderRadius: 999,
                          padding: "6px 10px",
                          fontSize: 12,
                          color: "#0b213a",
                          background: "#f7f9fc"
                        }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Incluye */}
              {p.includes?.length > 0 && (
                <details style={{ margin: "8px 0 12px" }}>
                  <summary style={{ cursor: "pointer", fontSize: 13, color: "#0b213a" }}>
                    ¿Qué incluye?
                  </summary>
                  <ul style={{ paddingLeft: 18, marginTop: 8, color: "#556070", fontSize: 14 }}>
                    {p.includes.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </details>
              )}

              {/* CTA */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12
              }}>
                <span style={{ fontSize: 14, color: "#556070" }}>
                  <em>{p.price ? `$${p.price.toLocaleString("es-MX")} MXN` : "Precio por confirmar"}</em>
                </span>
                <a href={p.cta.href} className="btn btn-primary">
                  {p.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Nota legal/aviso */}
        <p className="footnote">
          * Información de presentaciones basada en materiales del fabricante. Venta responsable y sujeta a validación.
          No constituye consejo médico; consultar a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}
