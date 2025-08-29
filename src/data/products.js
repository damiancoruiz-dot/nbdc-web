// src/data/products.js
export const products = [
  {
    id: "xentra-s3-pen",
    name: "Xentra S3 — Pluma multidosis",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.svg",
    image: "/images/products/xentra-s3-pen.webp",
    short: "Pluma con dosificación semanal y micro-unidades (SUB-C).",
    bullets: ["Uso SUB-C", "Trazabilidad y guía de uso"],
    variants: ["1.5 mg", "3.5 mg", "5.5 mg", "7.5 mg", "9.5 mg"],
    includes: ["Pluma multidosis", "Insertos y guía de uso"],
    datasheetUrl: "/docs/xentra-s3-pen.pdf",
    cta: { label: "Solicitar cotización", href: "#productos" }
  },
  {
    id: "xentra-s3-vial",
    name: "Xentra S3 — Vial 10 mL",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.svg",
    image: "/images/products/xentra-s3-vial.webp",
    short: "Solución para uso subcutáneo, frasco multidosis 10 mL.",
    bullets: ["Esterilidad garantizada", "Uso SUB-C"],
    variants: ["5 mg/mL", "20 mg/mL"],
    includes: ["Vial multidosis", "Insertos"],
    datasheetUrl: "/docs/xentra-s3-vial.pdf",
    cta: { label: "Solicitar cotización", href: "#productos" }
  },
  {
    id: "xentra-t3-pen",
    name: "Xentra T3 — Pluma multidosis",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.svg",
    image: "/images/products/xentra-t3-pen.webp",
    short: "Dosificación semanal; presentaciones escalables.",
    bullets: ["Uso SUB-C", "Presentaciones escalables"],
    variants: ["10 mg", "20 mg", "30 mg", "40 mg", "50 mg", "60 mg"],
    includes: ["Pluma multidosis", "Insertos y guía de uso"],
    datasheetUrl: "/docs/xentra-t3-pen.pdf",
    cta: { label: "Solicitar cotización", href: "#productos" }
  },
  {
    id: "xentra-t3-vial",
    name: "Xentra T3 — Vial 10 mL",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.svg",
    image: "/images/products/xentra-t3-vial.webp",
    short: "Solución inyectable para uso subcutáneo.",
    bullets: ["Uso SUB-C", "Frasco multidosis 10 mL"],
    variants: ["10 mg/mL", "20 mg/mL"],
    includes: ["Vial multidosis", "Insertos"],
    datasheetUrl: "/docs/xentra-t3-inyeccion.pdf", // el PDF de inyección que me mostraste
    cta: { label: "Solicitar cotización", href: "#productos" }
  }
];
