// src/components/Productos.jsx
import ProductCard from "./ProductCard";

export default function Productos() {
  const productos = [
    {
      name: "Vacuna Xentra-V",
      desc: "Vacuna biofarmacéutica de última generación.",
      badges: ["Refrigeración", "Alta demanda"],
      variants: ["Caja 10 uds", "Caja 50 uds"],
      price: null,
    },
    {
      name: "Kit Diagnóstico",
      desc: "Pruebas rápidas para detección en laboratorio.",
      badges: ["Uso clínico"],
      variants: ["Pack 25 tests", "Pack 100 tests"],
      price: 2500,
    },
    {
      name: "Medicamento Genérico",
      desc: "Tratamiento confiable con trazabilidad.",
      badges: ["Disponible"],
      variants: ["Caja 20 tabletas", "Caja 100 tabletas"],
      price: null,
    },
  ];

  return (
    <section id="productos" style={{ padding: "48px 20px", background: "#f8fafc" }}>
      <h2 style={{ textAlign: "center", marginBottom: 12, fontSize: 28 }}>
        Productos
      </h2>
      <p style={{ textAlign: "center", color: "#556070", marginBottom: 32 }}>
        Catálogo representativo — más opciones disponibles bajo solicitud.
      </p>

      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {productos.map((p, i) => (
          <ProductCard key={i} p={p} />
        ))}
      </div>
    </section>
  );
}
