// src/pages/Productos.jsx
import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Productos() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ["todos", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (selectedCategory === "todos") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="productos" className="section">
      <div className="container">
        <h2 className="h2" style={{ marginBottom: 8 }}>
          Encuentra el producto ideal para ti
        </h2>
        <p className="lead" style={{ maxWidth: 700 }}>
          Portafolio disponible a través de NBDC Trading Group como distribuidor autorizado.
        </p>

        {/* Filtro de categorías */}
        <div className="toolbar" style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          margin: "16px 0 24px"
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`chip ${cat === selectedCategory ? "active" : ""}`}
              style={{
                padding: "8px 14px",
                borderRadius: 999,
                border: "1px solid var(--border, #ccc)",
                background: cat === selectedCategory ? "var(--accent, #007bff)" : "transparent",
                color: cat === selectedCategory ? "white" : "inherit",
                fontSize: 14,
                cursor: "pointer",
                transition: "all .2s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        <p className="footnote" style={{ marginTop: 16 }}>
          * Información basada en materiales del fabricante. Venta responsable y sujeta a validación.  
          No constituye consejo médico; consultar a un profesional de la salud.
        </p>
      </div>
    </section>
  );
}
