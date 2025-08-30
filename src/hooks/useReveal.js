// src/hooks/useReveal.js
import { useEffect } from "react";

/**
 * Observa elementos con la clase .reveal y les añade .visible
 * cuando entran al viewport, disparando la animación CSS.
 *
 * @param {string} selector - Qué observar (default: ".reveal")
 * @param {IntersectionObserverInit} opts - opciones del IO
 */
export default function useReveal(
  selector = ".reveal",
  opts = { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    // Ya visibles si están en escena al cargar (evita parpadeo)
    const prime = () => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < vh * 0.9) el.classList.add("visible");
      });
    };
    requestAnimationFrame(prime);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, opts);

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [selector, opts]);
}
