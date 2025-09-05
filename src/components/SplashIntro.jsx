// src/components/SplashIntro.jsx
import { useEffect, useMemo, useState } from "react";

export default function SplashIntro() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  // Detecta soporte de backdrop-filter (y su prefijo webkit)
  const supportsBackdrop = useMemo(() => {
    if (typeof CSS === "undefined" || typeof CSS.supports !== "function") return false;
    return CSS.supports("backdrop-filter: blur(6px)") || CSS.supports("-webkit-backdrop-filter: blur(6px)");
  }, []);

  // Respeta usuarios con “reducir movimiento”
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const body = document.body;
    body.classList.add("no-scroll");

    // Tiempos más elegantes
    const visibleDelay = prefersReduced ? 400 : 1100; // menos espera si reduce movimiento
    const destroyDelay = prefersReduced ? 800 : 1900;

    const t1 = setTimeout(() => setHide(true), visibleDelay);
    const t2 = setTimeout(() => {
      body.classList.remove("no-scroll");
      setGone(true);
    }, destroyDelay);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      body.classList.remove("no-scroll");
    };
  }, [prefersReduced]);

  if (gone) return null;

  // Estilos base
  const baseStyle = {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100dvh",
    minHeight: "100svh",
    display: "grid",
    placeItems: "center",
    zIndex: 9999,
    opacity: hide ? 0 : 1,
    transform: hide ? (prefersReduced ? "none" : "scale(1.06)") : "scale(1)",
    transition: prefersReduced
      ? "opacity .4s ease"
      : "opacity .7s ease, transform .7s ease, backdrop-filter .7s ease",
    paddingBottom: "env(safe-area-inset-bottom)",
    pointerEvents: hide ? "none" : "auto",
  };

  // Fondo azul + blur si hay soporte; si no, sólido como fallback
  const overlayStyle = supportsBackdrop
    ? {
        ...baseStyle,
        background: "rgba(10, 102, 194, 0.85)", // azul con alpha para ver el blur
        backdropFilter: "blur(6px) saturate(120%)",
        WebkitBackdropFilter: "blur(6px) saturate(120%)",
      }
    : {
        ...baseStyle,
        // Fallback sólido (sin transparencia para que no se vea “lavado”)
        background: "#0a66c2",
      };

  // Logo con zoom-out suave (o sin zoom si reduce movimiento)
  const logoStyle = {
    width: "min(46vw, 220px)",
    height: "auto",
    filter: "drop-shadow(0 6px 26px rgba(0,0,0,.25))",
    transition: prefersReduced ? "opacity .4s ease" : "transform .7s ease, opacity .7s ease",
    transform: hide && !prefersReduced ? "scale(1.1)" : "scale(1)",
    opacity: hide ? 0 : 1,
  };

  return (
    <div style={overlayStyle} aria-hidden={hide}>
      <img src="/brand/nbdc-logo.png" alt="NBDC" style={logoStyle} />
    </div>
  );
}
