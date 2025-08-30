// src/components/SplashIntro.jsx
import { useEffect, useState } from "react";

export default function SplashIntro() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.add("no-scroll");
    const t1 = setTimeout(() => setHide(true), 900);  // tiempo visible
    const t2 = setTimeout(() => body.classList.remove("no-scroll"), 1400); // liberar scroll
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div
      className={`splash ${hide ? "splash--hide" : ""}`}
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
        opacity: 1,
        transition: "opacity .45s ease, transform .45s ease",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <img
        src="/brand/nbdc-logo.png"
        alt="NBDC"
        className="splash__logo"
        style={{
          width: "min(46vw, 220px)",
          height: "auto",
          filter: "drop-shadow(0 6px 26px rgba(0,0,0,.25))",
        }}
      />
    </div>
  );
}
