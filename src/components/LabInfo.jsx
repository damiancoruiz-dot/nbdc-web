// src/components/LabInfo.jsx
export default function LabInfo() {
  const LAB = {
    name: "Xentra Pharma",
    logo: "/brand/xentra-logo.png", // <- coincide con tu carpeta public/brand/
  };

  return (
    <section className="lab-section">
      <div className="container">
        <div className="lab-card">
          <div className="lab-header">
            <img className="lab-logo" src={LAB.logo} alt={`${LAB.name} logo`} />
            <div>
              <h3 className="lab-title">Acerca de {LAB.name}</h3>
              <p className="lab-lead">
                {LAB.name} suministra agonistas GLP-1 y péptidos de primera calidad
                para aplicaciones comerciales y de investigación (RUO), con red de
                distribución global y altos estándares de pureza y cumplimiento.
              </p>
            </div>
          </div>

          <details className="lab-details">
            <summary className="lab-summary">Ver más sobre {LAB.name}</summary>

            <div className="lab-body">
              <h4 className="lab-h4">
                {LAB.name.toUpperCase()}: LÍDERES EN LA DISTRIBUCIÓN DE AGONISTAS GLP-1 Y PÉPTIDOS
              </h4>
              <p>
                En {LAB.name}, proporcionamos agonistas GLP-1 y péptidos de primera calidad a
                compañías farmacéuticas internacionales, instituciones de investigación e innovadores del
                sector salud. Ya sea que necesite agonistas GLP-1 de grado comercial o preparados sólo para
                uso en investigación (RUO), nuestra red de distribución garantiza acceso fluido a
                compuestos de la más alta calidad.
              </p>

              <h4 className="lab-h4">SOLUCIONES PERSONALIZADAS PARA CLIENTES GLOBALES</h4>
              <p>
                Con enfoque en precisión, pureza y confiabilidad, suministramos compuestos que satisfacen
                necesidades específicas tanto comerciales como de investigación.
              </p>

              <h4 className="lab-h4">¿POR QUÉ ELEGIR {LAB.name.toUpperCase()}?</h4>
              <ul className="lab-list">
                <li><strong>Disponibilidad completa</strong> — estándar o RUO.</li>
                <li><strong>Red internacional</strong> — envíos confiables y eficientes.</li>
                <li><strong>Máxima pureza y cumplimiento</strong> — resultados óptimos.</li>
                <li><strong>Soporte profesional</strong> — asesoramiento experto.</li>
              </ul>

              <h4 className="lab-h4">IMPULSANDO LA CIENCIA</h4>
              <p>
                Al asociarse con {LAB.name}, accedes a péptidos y terapias GLP-1 de vanguardia que
                potencian la innovación y aceleran el progreso en la ciencia médica.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
