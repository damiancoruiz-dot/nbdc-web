// src/main.jsx
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/** Bootstrap helpers (reveal + smooth anchors) */
function Boot() {
  useEffect(() => {
    // ---- Reveal on scroll (añade .is-in a .reveal) ----
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 }
    );

    // Observa solo elementos que tengan .reveal
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // ---- Smooth-scroll para anchors internos ----
    const onClick = (ev) => {
      const a = ev.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      // Ignora el caso href="#" vacío
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      ev.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      io.disconnect();
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Boot />
  </StrictMode>
);
