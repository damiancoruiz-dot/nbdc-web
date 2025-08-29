// src/components/Hero.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { theme } from "../theme";

export default function Hero() {
  // Scroll suave a la sección y centrado de la tarjeta en el carrusel horizontal
  // 👉 helper: scroll suave a la tarjeta e iluminación breve + scroll horizontal del carrusel
const gotoProduct = (id) => (e) => {
  e.preventDefault();

  // 1) Baja a la sección de productos suavemente
  const section = document.querySelector('#productos');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.hash = '#productos';
  }

  // 2) Cuando ya está visible, centra la tarjeta dentro del carrusel horizontal
  setTimeout(() => {
    const rail = document.querySelector('#productos .features.hscroll');
    const card = document.querySelector(`#productos [data-id="${id}"]`);
    if (!rail || !card) return;

    const railRect = rail.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset =
      (cardRect.left - railRect.left) -
      (rail.clientWidth - cardRect.width) / 2;

    rail.scrollBy({ left: offset, behavior: 'smooth' });

    // 3) Resalta la tarjeta brevemente
    card.classList.add('pulse');
    setTimeout(() => card.classList.remove('pulse'), 1200);
  }, 350); // pequeño delay para que termine el scroll vertical
};

  return (
    <section
      id="inicio"
      className="section hero"
      style={{
        background: `linear-gradient(180deg, ${theme.colors.light}, #ffffff)`,
        borderBottom: "1px solid #e8eef6",
        paddingTop: 0,
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="hero-swiper"
      >
        {/* 1) Slide general */}
        <SwiperSlide>
          <div className="hero-slide">
            <img
              className="hero-img"
              src="/images/hero-lab.webp"
              alt="Laboratorio biofarmacéutico"
              loading="eager"
            />
            <div className="hero-overlay" />
            <div className="hero-content container">
              <h1 className="h2" style={{ color: "#fff", fontWeight: 800 }}>
                Distribución biofarmacéutica confiable
              </h1>

              <div className="hero-actions">
                <a href="#productos" className="btn btn-primary">Ver productos</a>
                <a href="#contacto" className="btn btn-outline">Contactar ventas</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 2) Xentra S3 — Pluma multidosis */}
        <SwiperSlide>
          <div className="hero-slide">
            <img className="hero-img" src="/images/hero-xentra-s3.webp" alt="Xentra S3" />
            <div className="hero-overlay" />
            <div className="hero-content container">
              <h1 className="h2" style={{ color: "#fff", fontWeight: 800 }}>
                Xentra S3 — Pluma multidosis
              </h1>
              <p className="lead" style={{ color: "#e7eef6" }}>
                Uso SUB-C • Trazabilidad y guía de uso
              </p>
              <div className="hero-actions">
                <a
                  href="#productos"
                  onClick={gotoProduct("xentra-s3-pen")}
                  className="btn btn-primary"
                >
                  Ver producto
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 3) Xentra S3 — Vial 10 mL */}
        <SwiperSlide>
          <div className="hero-slide">
            <img
              className="hero-img"
              src="/images/hero-xentra-s3-vial.webp"
              alt="Xentra S3 — Vial 10 mL"
            />
            <div className="hero-overlay" />
            <div className="hero-content container">
              <h1 className="h2" style={{ color: "#fff", fontWeight: 800 }}>
                Xentra S3 — Vial 10 mL
              </h1>
              <p className="lead" style={{ color: "#e7eef6" }}>
                Solución para uso subcutáneo, frasco multidosis 10 mL
              </p>
              <div className="hero-actions">
                <a
                  href="#productos"
                  onClick={gotoProduct("xentra-s3-vial")}
                  className="btn btn-primary"
                >
                  Ver producto
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 4) Xentra T3 — Pluma multidosis */}
        <SwiperSlide>
          <div className="hero-slide">
            <img className="hero-img" src="/images/hero-xentra-t3.webp" alt="Xentra T3" />
            <div className="hero-overlay" />
            <div className="hero-content container">
              <h1 className="h2" style={{ color: "#fff", fontWeight: 800 }}>
                Xentra T3 — Pluma multidosis
              </h1>
              <p className="lead" style={{ color: "#e7eef6" }}>
                Presentaciones escalables para dosificación semanal
              </p>
              <div className="hero-actions">
                <a
                  href="#productos"
                  onClick={gotoProduct("xentra-t3-pen")}
                  className="btn btn-primary"
                >
                  Ver producto
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 5) Xentra T3 — Vial */}
        <SwiperSlide>
          <div className="hero-slide">
            <img
              className="hero-img"
              src="/images/hero-xentra-t3-vial.webp"
              alt="Xentra T3 — Vial"
            />
            <div className="hero-overlay" />
            <div className="hero-content container">
              <h1 className="h2" style={{ color: "#fff", fontWeight: 800 }}>
                Xentra T3 — Vial
              </h1>
              <p className="lead" style={{ color: "#e7eef6" }}>
                Solución para uso subcutáneo
              </p>
              <div className="hero-actions">
                <a
                  href="#productos"
                  onClick={gotoProduct("xentra-t3-vial")}
                  className="btn btn-primary"
                >
                  Ver producto
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
