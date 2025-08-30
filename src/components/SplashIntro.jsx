// src/components/SplashIntro.jsx
import { useEffect, useState } from "react";

export default function SplashIntro() {
  // hide => empieza el fade-out
  // gone => se desmonta por completo (no se renderiza)
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.add("no-scroll");

    // Tiempo visible antes de desaparecer
    const t1 = setTimeout(() => setHide(true), 900);

    // Quita el bloqueo de scroll y desmonta el overlay
    const t2 = setTimeout(() => {
      body.classList.remove("no-scroll");
      setGone(true);
    }, 1400); // un poco después del inicio del fade

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      body.classList.remove("no-scroll");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      // todo inline para no depender del CSS externo
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        minHeight: "100svh",
        background: "#0a66c2",
        display: "grid",
        placeItems: "center",
        zIndex: 9999,
        // transición y estados
        opacity: hide ? 0 : 1,
        transform: hide ? "scale(.98)" : "none",
        transition: "opacity .45s ease, transform .45s ease",
        paddingBottom: "env(safe-area-inset-bottom)",
        // importante: mientras se desvanece, que no bloquee clics
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
        }}
      />
    </div>
  );
}
