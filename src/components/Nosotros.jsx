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

        {/* 🔹 Primera fila: tarjetas con imágenes */}
        <div className="features hscroll scroller">
          <div className="card roomy-card">
            <div className="card-img">
              <img src="/images/nosotros/calidad.jpg" alt="Calidad" />
            </div>
            <h3 className="tile-title">Cumplimiento y trazabilidad</h3>
            <p className="tile-body">
              Procesos y registros que aseguran seguridad y confianza en cada lote.
            </p>
          </div>

          <div className="card roomy-card">
            <div className="card-img">
              <img src="/images/nosotros/logistica.jpg" alt="Logística" />
            </div>
            <h3 className="tile-title">Envíos confiables</h3>
            <p className="tile-body">
              Distribución eficiente y puntual a cualquier parte de México.
            </p>
          </div>

          <div className="card roomy-card">
            <div className="card-img">
              <img src="/images/nosotros/soporte.jpg" alt="Soporte" />
            </div>
            <h3 className="tile-title">Soporte profesional</h3>
            <p className="tile-body">
              Acompañamiento especializado para nuestros clientes en todo momento.
            </p>
          </div>
        </div>

        {/* 🔹 Segunda fila: Misión, Visión y Valores */}
        <div className="features hscroll compact">
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
