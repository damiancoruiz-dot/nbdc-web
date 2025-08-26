// src/components/Nosotros.jsx
import { Shield, Target, Heart } from "lucide-react";

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

        {/* Carrusel horizontal con imágenes */}
        <div className="features hscroll">
          {/* Calidad */}
          <div
            className="card image-card"
            style={{ backgroundImage: "url(/images/nosotros/calidad.jpg)" }}
          >
            <div className="card-overlay">
              <h3>Cumplimiento y trazabilidad</h3>
              <p>
                Procesos y registros que aseguran seguridad y confianza en cada
                lote.
              </p>
            </div>
          </div>

          {/* Logística */}
          <div
            className="card image-card"
            style={{ backgroundImage: "url(/images/nosotros/logistica.jpg)" }}
          >
            <div className="card-overlay">
              <h3>Envíos confiables</h3>
              <p>
                Distribución eficiente y puntual a cualquier parte de México.
              </p>
            </div>
          </div>

          {/* Soporte */}
          <div
            className="card image-card"
            style={{ backgroundImage: "url(/images/nosotros/soporte.jpg)" }}
          >
            <div className="card-overlay">
              <h3>Soporte profesional</h3>
              <p>
                Acompañamiento especializado para nuestros clientes en todo
                momento.
              </p>
            </div>
          </div>
        </div>

        {/* Misión, Visión, Valores (con íconos planos en azul) */}
        <div className="features hscroll compact">
          <div className="card text-card">
            <Shield size={28} strokeWidth={2} style={{ marginBottom: "8px", color: "var(--brand-600)" }} />
            <h3>Misión</h3>
            <p>
              Conectar a laboratorios, distribuidores y profesionales de la
              salud con soluciones biofarmacéuticas seguras, eficientes y
              accesibles.
            </p>
          </div>

          <div className="card text-card">
            <Target size={28} strokeWidth={2} style={{ marginBottom: "8px", color: "var(--brand-600)" }} />
            <h3>Visión</h3>
            <p>
              Ser el centro de distribución biofarmacéutica de referencia en
              México, reconocido por la calidad, la innovación y el servicio.
            </p>
          </div>

          <div className="card text-card">
            <Heart size={28} strokeWidth={2} style={{ marginBottom: "8px", color: "var(--brand-600)" }} />
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
