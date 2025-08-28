// src/data/products.js

export const products = [
  // =========================
  // Xentra S3 — Pluma multidosis
  // =========================
  {
    id: "xentra-s3-pen",
    name: "Xentra S3 — Pluma multidosis",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    image: "/images/products/xentra-s3-pen.webp",
    short:
      "Pluma con dosificación semanal y micro-unidades. Uso SUB-C con trazabilidad y guía de uso.",
    bullets: [
      "Uso SUB-C",
      "Trazabilidad y guía de uso",
    ],
    variants: ["1.5 mg", "3.5 mg", "5.5 mg", "7.5 mg", "9.5 mg"],
    includes: [
      "Manual/guía de uso",
      "Empaque con sellos de seguridad",
    ],
    // El botón en Productos.jsx puede sobreescribir este href con WhatsApp dinámico
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20S3%20%E2%80%94%20Pluma%20multidosis",
    },
  },

  // =========================
  // Xentra S3 — Vial 10 mL
  // =========================
  {
    id: "xentra-s3-vial",
    name: "Xentra S3 — Vial 10 mL",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    image: "/images/products/xentra-s3-vial.webp",
    short:
      "Solución para uso subcutáneo, frasco multidosis 10 mL.",
    bullets: ["Esterilidad garantizada", "Uso SUB-C"],
    variants: ["5 mg/mL", "20 mg/mL"],
    includes: ["Folleto de información", "Sellos de seguridad"],
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20S3%20%E2%80%94%20Vial%2010%20mL",
    },
  },

  // =========================
  // Xentra T3 — Pluma
  // =========================
  {
    id: "xentra-t3-pen",
    name: "Xentra T3 — Pluma",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    image: "/images/products/xentra-t3-pen.webp",
    short:
      "Pluma de administración subcutánea con dosificación semanal.",
    bullets: ["Uso SUB-C", "Preparación estandarizada"],
    variants: ["10 mg", "20 mg", "30 mg", "40 mg", "50 mg", "60 mg"],
    includes: ["Guía rápida de uso", "Empaque con sellos"],
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20T3%20%E2%80%94%20Pluma",
    },
  },

  // =========================
  // Xentra T3 — Inyección (Vial)
  // =========================
  {
    id: "xentra-t3-vial",
    name: "Xentra T3 — Inyección (Vial)",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    image: "/images/products/xentra-t3-vial.webp",
    short:
      "Solución inyectable para uso subcutáneo en frasco (vial).",
    bullets: ["Uso SUB-C", "Control de calidad y pureza"],
    variants: ["10 mg", "20 mg", "30 mg", "40 mg", "50 mg", "60 mg"],
    includes: ["Prospecto/insert", "Sellos de seguridad"],
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20T3%20%E2%80%94%20Inyecci%C3%B3n%20(Vial)",
    },
  },
];
