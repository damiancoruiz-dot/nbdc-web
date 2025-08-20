// src/components/Hero.jsx
import { theme } from "../theme";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="section"
      style={{
        background: `linear-gradient(180deg, ${theme.colors.light}, #ffffff)`,
        borderBottom: "1px solid #e8eef6",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h1
          className="h2"
          style={{ color: "#0b213a", fontWeight: 800 }}
        >
          Distribución biofarmacéutica confiable
        </h1>

        <p className="lead" style={{ maxWidth: 780, margin: "14px auto 0" }}>
          Conectamos a laboratorios y profesionales de la salud con productos
          de alta calidad, trazabilidad y soporte. Alianza con fabricantes
          seleccionados.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 22,
            flexWrap: "wrap",
          }}
        >
          <a href="#productos" className="btn btn-primary">
            Ver productos
          </a>

          <a href="#contacto" className="btn btn-outline">
            Contactar ventas
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            justifyContent: "center",
            marginTop: 16,
            color: theme.colors.gray,
            fontSize: 14,
            flexWrap: "wrap",
          }}
        >
          <span>• Cumplimiento y trazabilidad</span>
          <span>• Envíos confiables</span>
          <span>• Soporte profesional</span>
        </div>
      </div>
    </section>
  );
}
