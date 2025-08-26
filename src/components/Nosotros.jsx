// src/components/Nosotros.jsx
import { useRef } from "react";
import { theme } from "../theme";

export default function Nosotros() {
  const stripRef = useRef(null);
  const scroll = (px) =>
    stripRef.current?.scrollBy({ left: px, behavior: "smooth" });

  return (
    <section id="nosotros" className="section section-alt">
      <div className="container">
        <h2 className="h2" style={{ color: theme.colors.dark }}>
          Sobre nosotros
        </h2>

        <p className="lead">
          En <strong>NBDC</strong> trabajamos con compromiso y excelencia para
          garantizar la distribución biofarmacéutica más confiable en México.
          Nuestra alianza con fabricantes y profesionales de la salud asegura
          productos de alta calidad, cumplimiento regulatorio y trazabilidad.
        </p>

        {/* === Carrusel tipo Apple: tarjetas verticales === */}
        <div className="hscroll-nav" style={{ position: "relative" }}>
          <button
            className="hscroll-btn left"
            onClick={() => scroll(-380)}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div ref={stripRef} className="features hscroll">
            <article className="card">
              <div
                style={{
                  color: "#3b82f6",
                  fontWeight: 800,
                  letterSpacing: ".2px",
                  marginBottom: 8,
                }}
              >
                Calidad
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "clamp(22px,2.6vw,28px)",
                  color: "#0b213a",
                }}
              >
                Cumplimiento y trazabilidad
              </h3>
              <p style={{ color: "#556070", fontSize: 16, lineHeight: 1.6 }}>
                Procesos y registros que aseguran seguridad y confianza en cada
                lote.
              </p>
            </article>

            <article className="card">
              <div
                style={{
                  color: "#10b981",
                  fontWeight: 800,
                  letterSpacing: ".2px",
                  marginBottom: 8,
                }}
              >
                Logística
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "clamp(22px,2.6vw,28px)",
                  color: "#0b213a",
                }}
              >
                Envíos confiables
              </h3>
              <p style={{ color: "#556070", fontSize: 16, lineHeight: 1.6 }}>
                Distribución eficiente y puntual a cualquier parte de México.
              </p>
            </article>

            <article className="card">
              <div
                style={{
                  color: "#f59e0b",
                  fontWeight: 800,
                  letterSpacing: ".2px",
                  marginBottom: 8,
                }}
              >
                Soporte
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "clamp(22px,2.6vw,28px)",
                  color: "#0b213a",
                }}
              >
                Soporte profesional
              </h3>
              <p style={{ color: "#556070", fontSize: 16, lineHeight: 1.6 }}>
                Acompañamiento especializado para nuestros clientes en todo
                momento.
              </p>
            </article>
          </div>

          <button
            className="hscroll-btn right"
            onClick={() => scroll(380)}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* === Tarjetas clásicas: Misión / Visión / Valores === */}
        <div className="features" style={{ marginTop: 28 }}>
          <div className="card">
            <h3>Misión</h3>
            <p>
              Conectar a laboratorios, distribuidores y profesionales de la
              salud con soluciones biofarmacéuticas seguras, eficientes y
              accesibles.
            </p>
          </div>
          <div className="card">
            <h3>Visión</h3>
            <p>
              Ser el centro de distribución biofarmacéutica de referencia en
              México, reconocido por la calidad, la innovación y el servicio.
            </p>
          </div>
          <div className="card">
            <h3>Valores</h3>
            <p>
              Ética, transparencia, compromiso con la salud y orientación al
              cliente en cada etapa de nuestro servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
