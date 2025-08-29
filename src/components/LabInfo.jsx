// src/components/LabInfo.jsx
import xentraLogo from "/brand/xentra-logo.png";

export default function LabInfo() {
  return (
    <section className="lab-section">
      <div className="container">
        <div className="lab-card">
          {/* Encabezado */}
          <div className="lab-header">
            <img
              src={xentraLogo}
              alt="Xentra Pharma logo"
              className="lab-logo"
            />
            <div>
              <h3 className="lab-title">Xentra Pharma</h3>
              <p className="lab-lead">
                Laboratorio especializado en soluciones biofarmacéuticas.
              </p>
            </div>
          </div>

          {/* Detalles */}
          <div className="lab-details">
            <details>
              <summary className="lab-summary">Acerca de Xentra Pharma</summary>
              <div className="lab-body">
                <p>
                  Xentra Pharma desarrolla soluciones biofarmacéuticas con un
                  enfoque en trazabilidad, esterilidad y facilidad de uso en
                  aplicaciones subcutáneas.
                </p>

                <h4 className="lab-h4">Fortalezas clave:</h4>
                <ul className="lab-list">
                  <li>Control de calidad certificado</li>
                  <li>Protocolos de trazabilidad robustos</li>
                  <li>Presentaciones adaptadas a la dosificación moderna</li>
                  <li>Enfoque en innovación y seguridad del paciente</li>
                </ul>

                <p>
                  Gracias a su capacidad de investigación y desarrollo, Xentra
                  Pharma se posiciona como un aliado confiable para la práctica
                  médica y la distribución biofarmacéutica responsable.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
