// src/components/Nosotros.jsx
import { theme } from "../theme";

export default function Nosotros() {
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

        {/* Fila 1: Tarjetas grandes estilo Apple (scroll horizontal en todas las pantallas) */}
        <div className="features hscroll" style={{ marginTop: 28 }}>
          <article className="card" aria-label="Calidad">
            <div style={{ color: "#3b82f6", fontWeight: 700, marginBottom: 10 }}>
              Calidad
            </div>
            <h3 style={{ fontSize: 28, lineHeight: 1.2, margin: "0 0 10px" }}>
              Cumplimiento y
              <br /> trazabilidad
            </h3>
            <p style={{ color: "#556070", margin: 0 }}>
              Procesos y registros que aseguran seguridad y confianza en cada lote.
            </p>
          </article>

          <article className="card" aria-label="Logística">
            <div style={{ color: "#14b8a6", fontWeight: 700, marginBottom: 10 }}>
              Logística
            </div>
            <h3 style={{ fontSize: 28, lineHeight: 1.2, margin: "0 0 10px" }}>
              Envíos confiables
            </h3>
            <p style={{ color: "#556070", margin: 0 }}>
              Distribución eficiente y puntual a cualquier parte de México.
            </p>
          </article>

          <article className="card" aria-label="Soporte">
            <div style={{ color: "#f59e0b", fontWeight: 700, marginBottom: 10 }}>
              Soporte
            </div>
            <h3 style={{ fontSize: 28, lineHeight: 1.2, margin: "0 0 10px" }}>
              Soporte profesional
            </h3>
            <p style={{ color: "#556070", margin: 0 }}>
              Acompañamiento especializado para nuestros clientes en todo momento.
            </p>
          </article>
        </div>

        {/* Fila 2: Misión / Visión / Valores, compactas con ícono */}
        <div className="features hscroll compact" style={{ marginTop: 24 }}>
          {/* Misión */}
          <article className="card mini-card">
            <span className="mini-icon" aria-hidden="true">
              {/* shield-check */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l6 2v5a8 8 0 0 1-6 7.75A8 8 0 0 1 6 10V5l6-2Z"
                  stroke="currentColor" strokeWidth="1.8" />
                <path d="M8.5 10.5l2.2 2.2 4.3-4.3"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h3 className="mini-label">Misión</h3>
            <p style={{ color: "#556070", margin: 0 }}>
              Conectar a laboratorios, distribuidores y profesionales de la salud con
              soluciones biofarmacéuticas seguras, eficientes y accesibles.
            </p>
          </article>

          {/* Visión */}
          <article className="card mini-card">
            <span className="mini-icon" aria-hidden="true">
              {/* target / bullseye */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
              </svg>
            </span>
            <h3 className="mini-label">Visión</h3>
            <p style={{ color: "#556070", margin: 0 }}>
              Ser el centro de distribución biofarmacéutica de referencia en México,
              reconocido por la calidad, la innovación y el servicio.
            </p>
          </article>

          {/* Valores */}
          <article className="card mini-card">
            <span className="mini-icon" aria-hidden="true">
              {/* heart-handshake */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M8 12l2.2 2.2a2.8 2.8 0 004 0L16 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M7 5a5 5 0 00-5 5c0 5 6.5 8 10 10 3.5-2 10-5 10-10a5 5 0 00-9-3" stroke="currentColor" strokeWidth="1.6" fill="none"/>
              </svg>
            </span>
            <h3 className="mini-label">Valores</h3>
            <p style={{ color: "#556070", margin: 0 }}>
              Ética, transparencia, compromiso con la salud y orientación al cliente.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
