// src/components/SplashIntro.jsx
import { useEffect, useState } from "react";

export default function SplashIntro() {
  const [phase, setPhase] = useState("show"); // show -> fade -> hidden

  useEffect(() => {
    // Mantén visible un momento, luego desvanece, luego desmonta
    const t1 = setTimeout(() => setPhase("fade"), 1000);  // espera 1s y empieza fade
    const t2 = setTimeout(() => setPhase("hidden"), 1700); // a los 1.7s desmonta
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div className={`splash ${phase === "fade" ? "fade" : ""}`}>
      <div className="splash-logo-wrap">
        <img
          src="/brand/nbdc-logo-white.svg"
          alt="NBDC"
          className="splash-logo"
          width={220}
          height={80}
        />
      </div>
    </div>
  );
}
