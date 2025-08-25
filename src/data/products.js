// src/data/products.js
export const products = [
  {
    id: "xentra-s3-pen",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra S3 — Pluma multidosis",
    short: "Pluma con dosificación semanal y micro-unidades.",
    bullets: ["Uso SUB-C", "Trazabilidad y guía de uso"],
    variants: ["1.5 mg", "3.5 mg", "5.5 mg", "7.5 mg", "9.5 mg"],
    includes: [
      "Pluma/jeringa multidosis",
      "Agujas desechables (x4)",
      "Torundas con alcohol",
      "Guía rápida"
    ],
    price: null,
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/5219981234567?text=Hola,%20me%20interesa%20Xentra%20S3%20Pluma%20multidosis"
    },
    image: "/images/products/xentra-s3-pen.webp",   // 👈 Nuevo campo
  },
  {
    id: "xentra-s3-vial",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra S3 — Vial 10 mL",
    short: "Solución para uso subcutáneo, frasco multidosis 10 mL.",
    bullets: ["Esterilidad garantizada", "Uso SUB-C"],
    variants: ["5 mg/mL", "20 mg/mL"],
    includes: ["Frasco vial 10 mL", "Guía de uso"],
    price: null,
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/5219981234567?text=Hola,%20me%20interesa%20Xentra%20S3%20Vial%2010mL"
    },
    image: "/images/products/xentra-s3-vial.webp",  // 👈 Nuevo campo
  },
  {
    id: "xentra-t3",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra T3 — Pluma multidosis",
    short: "Presentaciones escalables para dosificación semanal.",
    bullets: ["Uso SUB-C", "Guía de dosificación"],
    variants: ["10 mg", "20 mg", "30 mg", "40 mg", "50 mg", "60 mg"],
    includes: ["Pluma/jeringa multidosis", "Guía rápida"],
    price: null,
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/5219981234567?text=Hola,%20me%20interesa%20Xentra%20T3%20Pluma%20multidosis"
    },
    image: "/images/products/xentra-t3-pen.webp",   // 👈 Nuevo campo
  }
];
