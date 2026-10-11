import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import LabInfo from "../components/LabInfo";

export default function Productos() {
  const [activeCat, setActiveCat] = useState("todos");
  const [fade, setFade] = useState(false);

  const categories = [
    "todos",
    "Control de peso / metabolismo",
    "Regeneración y reparación",
    "Antienvejecimiento / Vitalidad celular",
    "Energía y bienestar general",
    "Vitalidad sexual y hormonal",
    "Salud avanzada / investigación",
  ];

  const filtered =
    activeCat === "todos"
      ? products
      : products.filter((p) => p.category === activeCat);

  const handleCategory = (cat) => {
    setFade(true);
    setTimeout(() => {
      setActiveCat(cat);
      setFade(false);
    }, 250);
  };

  return (
    <>
      <section id="productos" className="section">
        <div className="container">
          <h2 className="h2" style={{ marginBottom: 8 }}>
            Encuentra el producto ideal para ti
          </h2>

          <p className="lead">
            Portafolio disponible a través de NBDC Trading Group como
            distribuidor autorizado.
          </p>

          {/* FILTROS DE CATEGORÍA */}
          <div className="pills" style={{ marginTop: 24, marginBottom: 24 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategory(cat)}
                className={`pill-btn ${activeCat === cat ? "is-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* CATÁLOGO Y COTIZACIÓN */}
          <div className="catalog-actions">
            <a
              href="/docs/NBDC_Presentaciones_y_Concentraciones.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="catalog-action catalog-action-secondary"
            >
              Catálogo de medicamentos
            </a>

            <a
              href={`https://wa.me/524428781486?text=${encodeURIComponent(
                "Hola, me gustaría solicitar una cotización de los medicamentos del catálogo de NBDC."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="catalog-action catalog-action-primary"
            >
              Solicitar cotización
            </a>
          </div>

          {/* GRID DE PRODUCTOS */}
          <div
            className={`product-grid ${fade ? "fade-out" : "fade-in"}`}
            style={{
              transition: "opacity 0.25s ease",
              opacity: fade ? 0 : 1,
            }}
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <p className="footnote">
            * Información de presentaciones basada en materiales del fabricante.
            Venta responsable y sujeta a validación. No constituye consejo
            médico; consultar a un profesional de la salud.
          </p>
        </div>
      </section>

      <LabInfo />
    </>
  );
}