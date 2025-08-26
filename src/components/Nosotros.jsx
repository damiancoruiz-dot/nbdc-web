// src/components/Nosotros.jsx
import { theme } from "../theme";

const highlightTiles = [
  {
    id: "trace",
    kicker: "Calidad",
    title: "Cumplimiento y trazabilidad",
    body: "Procesos y registros que aseguran seguridad y confianza en cada lote.",
  },
  {
    id: "shipping",
    kicker: "Logística",
    title: "Envíos confiables",
    body: "Distribución eficiente y puntual a cualquier parte de México.",
  },
  {
    id: "support",
    kicker: "Soporte",
    title: "Soporte profesional",
    body: "Acompañamiento especializado para nuestros clientes en todo momento.",
  },
];

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

        {/* Tarjetotas estilo Apple (sin imágenes) */}
        <div className="features">
          {highlightTiles.map((tile) => (
            <article key={tile.id} className="card big-tile">
              <div className="tile-content">
                <h4 className="tile-kicker">{tile.kicker}</h4>
                <h3 className="tile-title">{tile.title}</h3>
                <p className="tile-body">{tile.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
