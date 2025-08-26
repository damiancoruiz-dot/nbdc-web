// src/components/Nosotros.jsx
import { theme } from "../theme";
import { useRef, useState, useEffect } from "react";

export default function Nosotros() {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  // Habilita/deshabilita flechas según scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      setCanLeft(el.scrollLeft > 0);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollBy = (dx) => {
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

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

        {/* Carrusel tipo Apple con aire y flechas debajo */}
        <div className="scroller scroller--peek features hscroll" ref={trackRef}>
          <article className="card roomy-card">
            <div className="eyebrow eyebrow--blue">Calidad</div>
            <h3 className="roomy-title">Cumplimiento y trazabilidad</h3>
            <p className="roomy-text">
              Procesos y registros que aseguran seguridad y confianza en cada lote.
            </p>
          </article>

          <article className="card roomy-card">
            <div className="eyebrow eyebrow--green">Logística</div>
            <h3 className="roomy-title">Envíos confiables</h3>
            <p className="roomy-text">
              Distribución eficiente y puntual a cualquier parte de México.
            </p>
          </article>

          <article className="card roomy-card">
            <div className="eyebrow eyebrow--amber">Soporte</div>
            <h3 className="roomy-title">Soporte profesional</h3>
            <p className="roomy-text">
              Acompañamiento especializado para nuestros clientes en todo momento.
            </p>
          </article>
        </div>

        {/* Flechas separadas del carrusel */}
        <div className="scroller-controls">
          <button
            className="scroller-btn"
            onClick={() => scrollBy(-420)}
            disabled={!canLeft}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            className="scroller-btn"
            onClick={() => scrollBy(420)}
            disabled={!canRight}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* Debajo permanecen tus tarjetas clásicas Misión/Visión/Valores (grid) */}
        <div className="features" style={{ marginTop: 32 }}>
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
