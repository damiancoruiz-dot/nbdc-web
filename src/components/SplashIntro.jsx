// src/components/SplashIntro.jsx
import { useEffect, useState } from "react";

export default function SplashIntro() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    // Evitar mostrar en visitas repetidas dentro de la misma sesión
    const seen = sessionStorage.getItem("splash_seen");
    if (seen === "1") return;

    setHide(false);
    const onReady = () => {
      // pequeño delay para que se note la animación
      setTimeout(() => {
        setHide(true);
        sessionStorage.setItem("splash_seen", "1");
      }, 1200);
    };
    if (document.readyState === "complete") onReady();
    else window.addEventListener("load", onReady);
    return () => window.removeEventListener("load", onReady);
  }, []);

  // Si ya está oculto desde el inicio, no renders
  if (hide) return null;

  return (
    <div className={`splash ${hide ? "hide" : ""}`} aria-hidden="true">
      <img className="splash-logo" src="/brand/nbdc-logo.svg" alt="NBDC" />
    </div>
  );
}
