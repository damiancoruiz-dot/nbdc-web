// src/pages/Productos.jsx
import { useMemo, useRef, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Productos() {
  const railRef = useRef(null);
  const [layout, setLayout] = useState("carousel"); // "carousel" | "grid"
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ["todos", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (selectedCategory === "todos") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const scrollByCards = (dir = 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector(".card");
    const cardWidth = card ? card.getBoundingClientRect().width : 320;
    rail.scrollBy({ left: dir * (cardWidth + 18), behavior: "smooth" });
  };

  return (
    <section id="productos" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 8 }}>
          Encuentra el producto ideal para ti
        </h2>
        <p className="lead">
          Portafolio disponible a través de NBDC como distribuidor.
        </p>

        {/* Controles: Categorías + Switch de layout */}
        <div
          className="toolbar"
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
            margin: "16px 0 8px"
          }}
        >
          {/* Filtro por categoría */}
          <div className="category-filter" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`chip ${cat === selectedCategory ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 999,
                  border: "1px solid var(--border, #ddd)",
                  background: cat === selectedCategory ? "var(--accent, #0ea5e9)" : "transparent",
                  color: cat === selectedCategory ? "white" : "inherit",
                  cursor: "pointer",
                  fontSize: 14
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Separador flexible */}
          <div style={{ flex: 1 }} />

          {/* Switch de layout */}
          <div
            className="layout-switch"
            style={{ display: "flex", gap: 8, alignItems: "center" }}
          >
            <span style={{ fontSize: 14, opacity: 0.8 }}>Vista:</span>
            <button
              type="button"
              onClick={() => setLayout("carousel")}
              aria-pressed={layout === "carousel"}
              style={{
                padding: "6px 10px",
                borderRadius: 8,
                border: "1px solid var(--border,#ddd)",
                background: layout === "carousel" ? "var(--accent, #0ea5e9)" : "transparent",
                color: layout === "carousel" ? "white" : "inherit",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Carrusel
            </button>
            <button
              type="button"
              onClick={() => setLayout("grid")}
              aria-pressed={layout === "grid"}
              style={{
                padding: "6px 10px",
                borderRadius: 8,
                border: "1px solid var(--border,#ddd)",
                background: layout === "grid" ? "var(--accent, #0ea5e9)" : "transparent",
                color: layout === "grid" ? "white" : "inherit",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Render según layout */}
        {layout === "carousel" ? (
          <>
            {/* Carrusel horizontal */}
            <div ref={railRef} className="features hscroll">
              {filtered.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>

            {/* Flechas debajo del carrusel */}
            <div className="scroller-controls">
              <button
                type="button"
                className="scroller-btn"
                aria-label="Desplazar productos a la izquierda"
                onClick={() => scrollByCards(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="scroller-btn"
                aria-label="Desplazar productos a la derecha"
                onClick={() => scrollByCards(1)}
              >
                ›
              </button>
            </div>
          </>
        ) : (
          // Grid (catálogo)
          <div
            className="product-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 18
            }}
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}

        {/* Nota legal */}
        <p className="footnote" style={{ marginTop: 16 }}>
          * Información de presentaciones basada en materiales del fabricante.
          Venta responsable y sujeta a validación. No constituye consejo médico; consultar a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}