// src/hooks/useReveal.js
import { useEffect } from "react";

export default function useReveal(selector = ".reveal", rootMargin = "0px 0px -10% 0px") {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(selector));
    if (!nodes.length) return;

    // Pequeño "stagger" para que entren escalonadas
    nodes.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 60}ms`;
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            // Una vez visible, ya no la observamos (mejor perf)
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin, threshold: 0.08 }
    );

    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector, rootMargin]);
}
