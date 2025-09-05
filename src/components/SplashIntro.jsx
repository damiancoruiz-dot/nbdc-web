// src/components/SplashIntro.jsx
import { useEffect, useState } from "react";

export default function SplashIntro() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.add("no-scroll");

    // ⏱ Mantiene visible antes del fade-out
    const t1 = setTimeout(() => setHide(true), 1100);

    // ⏱ Tiempo suficiente para completar fade + zoom antes de desmontar
    const t2 = setTimeout(() => {
      body.classList.remove("no-scroll");
      setGone(true);
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      body.classList.remove("no-scroll");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        minHeight: "100svh",
        // Fondo azul con alpha para que el blur sea visible
        background: "rgba(10, 102, 194, 0.85)",
        display: "grid",
        placeItems: "center",
        zIndex: 9999,

        // Estado/animación
        opacity: hide ? 0 : 1,
        transform: hide ? "scale(1.06)" : "scale(1)",

        // 💫 Blur del contenido subyacente (Safari + otros)
        backdropFilter: "blur(6px) saturate(120%)",
        WebkitBackdropFilter: "blur(6px) saturate(120%)",

        // Transición más cinematográfica
        transition: "opacity .7s ease, transform .7s ease, backdrop-filter .7s ease",
        paddingBottom: "env(safe-area-inset-bottom)",
        pointerEvents: hide ? "none" : "auto",
      }}
      aria-hidden={hide}
    >
      <img
        src="/brand/nbdc-logo.png"
        alt="NBDC"
        style={{
          width: "min(46vw, 220px)",
          height: "auto",
          filter: "drop-shadow(0 6px 26px rgba(0,0,0,.25))",
          // Zoom-out sutil del logo
          transition: "transform .7s ease",
          transform: hide ? "scale(1.1)" : "scale(1)",
        }}
      />
    </div>
  );
}
