// src/components/Nosotros.jsx
import { useRef, useState, useEffect } from "react";
import { theme } from "../theme";

export default function Nosotros() {
  const scrollerRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("scroll", updateArrows);
    };
  }, []);

  const step = () => {
    // un paso agradable: ~una tarjeta y media
    const el = scrollerRef.current;
    return el ? Math.min(480, Math.floor(el.clientWidth * 0.6)) : 420;
  };

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
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

        {/* Carrusel horizontal tipo Apple */}
        <div
          ref={scrollerRef}
          className="features hscroll scroller scroller--peek scroller--roomy"
          aria-label="Puntos fuertes de NBDC"
        >
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

        {/* Flechas debajo, separadas del carrusel */}
        <div className="scroller-controls">
          <button
            type="button"
            className="scroller-btn"
            onClick={() => scrollBy(-1)}
            aria-label="Desplazar a la izquierda"
            disabled={!canPrev}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            type="button"
            className="scroller-btn"
            onClick={() => scrollBy(1)}
            aria-label="Desplazar a la derecha"
            disabled={!canNext}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tarjetas clásicas: Misión, Visión, Valores */}
        <div className="features" style={{ marginTop: 28 }}>
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
