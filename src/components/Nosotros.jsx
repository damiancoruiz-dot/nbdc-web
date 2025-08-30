// src/components/Nosotros.jsx
export default function Nosotros() {
  return (
    <section id="nosotros" className="section section-alt">
      <div className="container">
        <h2 className="h2">Sobre nosotros</h2>
        <p className="lead">
          En <strong>NBDC</strong> trabajamos con compromiso y excelencia para
          garantizar la distribución biofarmacéutica más confiable en México.
          Nuestra alianza con fabricantes y profesionales de la salud asegura
          productos de alta calidad, cumplimiento regulatorio y trazabilidad.
        </p>

        {/* === TILES con FOTO: Trazabilidad / Envío / Soporte === */}
        <div className="features hscroll reveal" style={{ marginTop: 24 }}>
          {/* Trazabilidad */}
          <article
            className="card image-card"
            style={{ backgroundImage: "url(/images/nosotros/calidad.jpg)" }}
          >
            <div className="card-overlay">
              <h3>Trazabilidad y cumplimiento</h3>
              <p>Registros y procesos auditables en cada lote.</p>
            </div>
          </article>

          {/* Envío */}
          <article
            className="card image-card"
            style={{ backgroundImage: "url(/images/nosotros/logistica.jpg)" }}
          >
            <div className="card-overlay">
              <h3>Envíos confiables</h3>
              <p>Distribución eficiente y puntual a todo México.</p>
            </div>
          </article>

          {/* Soporte */}
          <article
            className="card image-card"
            style={{ backgroundImage: "url(/images/nosotros/soporte.jpg)" }}
          >
            <div className="card-overlay">
              <h3>Soporte profesional</h3>
              <p>Acompañamiento especializado en todo momento.</p>
            </div>
          </article>
        </div>

        {/* === Misión / Visión / Valores === */}
        <div className="features hscroll compact reveal" style={{ marginTop: 24 }}>
          <div className="card">
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--brand-600)" }}>
              {/* ícono azul simple */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Misión
            </h3>
            <p>
              Conectar a laboratorios, distribuidores y profesionales de la salud
              con soluciones biofarmacéuticas seguras, eficientes y accesibles.
            </p>
          </div>

          <div className="card">
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--brand-600)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l6 2v5a8 8 0 0 1-6 8 8 8 0 0 1-6-8V5l6-2Z" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Visión
            </h3>
            <p>
              Ser el centro de distribución biofarmacéutica de referencia en México,
              reconocido por la calidad, la innovación y el servicio.
            </p>
          </div>

          <div className="card">
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--brand-600)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 12l2.2 2.2L16.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Valores
            </h3>
            <p>
              Ética, transparencia, compromiso con la salud y orientación al cliente
              en cada etapa de nuestro servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
