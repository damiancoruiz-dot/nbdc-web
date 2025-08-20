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
