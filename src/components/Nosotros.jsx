// src/components/Nosotros.jsx
import { theme } from "../theme";

export default function Nosotros() {
  return (
    <section id="nosotros" className="section section-alt">
      <div className="container">
        <h2 className="h2" style={{ color: theme.colors.dark }}>
          Sobre nosotros
        </h2>

        {/* Texto que ya tenías */}
        <p className="lead">
          En <strong>NBDC</strong> trabajamos con compromiso y excelencia para 
          garantizar la distribución biofarmacéutica más confiable en México.  
          Nuestra alianza con fabricantes y profesionales de la salud asegura 
          productos de alta calidad, cumplimiento regulatorio y trazabilidad.
        </p>

        <div className="nosotros-highlights">
  <div className="highlight">
    {/* Cumplimiento (shield-check) */}
    <span className="icon" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l6 2v5a8 8 0 0 1-6 7.75A8 8 0 0 1 6 10V5l6-2Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.5 10.5l2.2 2.2 4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    <p>Cumplimiento y trazabilidad</p>
  </div>

  <div className="highlight">
    {/* Envíos (truck) */}
    <span className="icon" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M3 7h11v8H3V7Z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 10h4l3 3v2h-7v-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="7" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        <circle cx="17" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      </svg>
    </span>
    <p>Envíos confiables</p>
  </div>

  <div className="highlight">
    {/* Soporte (headset) */}
    <span className="icon" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M4 12v5a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="6" y="11" width="3" height="5" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="15" y="11" width="3" height="5" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11.5 19.5c.6.3 1.4.5 2.5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    </span>
    <p>Soporte profesional</p>
  </div>
</div>


        <div className="features">
          <div className="card">
            <h3>Misión</h3>
            <p>
              Conectar a laboratorios, distribuidores y profesionales de la salud
              con soluciones biofarmacéuticas seguras, eficientes y accesibles.
            </p>
          </div>
          <div className="card">
            <h3>Visión</h3>
            <p>
              Ser el centro de distribución biofarmacéutica de referencia en México,
              reconocido por la calidad, la innovación y el servicio.
            </p>
          </div>
          <div className="card">
            <h3>Valores</h3>
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
