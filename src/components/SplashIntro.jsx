// src/components/SplashIntro.jsx
import { useEffect, useState } from "react";

export default function SplashIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // da tiempo a que el logo cargue y luego desvanece
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden={!show}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0c7fbf", // azul marca
        display: "grid",
        placeItems: "center",
        zIndex: 9999,
        transition: "opacity .5s ease, visibility .5s ease",
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
      }}
    >
      {/* Asegúrate que exista /brand/nbdc-logo.svg (o cambia la ruta a tu archivo real) */}
      <img
        src="/brand/nbdc-logo.svg"
        alt="NBDC"
        style={{
          width: 160,
          height: "auto",
          objectFit: "contain",
          filter: "drop-shadow(0 6px 16px rgba(0,0,0,.22))",
        }}
        onError={(e) => {
          // fallback si el SVG no existe
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
