// src/components/SplashIntro.jsx
import { useEffect, useState } from "react";
import nbdcLogo from "/brand/nbdc-logo.png"; // ajusta el path si tu logo se llama distinto

export default function SplashIntro() {
  const [hide, setHide] = useState(false);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    // bloquea scroll mientras se muestra la cortinilla
    document.body.classList.add("no-scroll");
    const t1 = setTimeout(() => setHide(true), 900);     // inicia desvanecido
    const t2 = setTimeout(() => {
      setUnmount(true);
      document.body.classList.remove("no-scroll");
    }, 1500);                                            // desmonta

    return () => {
      clearTimeout(t1); clearTimeout(t2);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  if (unmount) return null;

  return (
    <div className={`splash ${hide ? "splash--hide" : ""}`}>
      <img className="splash__logo" src={nbdcLogo} alt="NBDC" />
    </div>
  );
}
