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
    // Imagen general
    image: "/images/products/xentra-s3-pen.webp",
    // (Opcional) imagen por variante — puedes agregar cuando las tengas
    variantImages: {
      // "1.5 mg": "/images/products/xentra-s3-pen-1_5.webp",
      // "3.5 mg": "/images/products/xentra-s3-pen-3_5.webp",
    },
    includes: [
      "Pluma/jeringa multidosis",
      "Agujas desechables (x4)",
      "Torundas con alcohol",
      "Guía rápida"
    ],
    datasheet: null, // o "/pdfs/xentra-s3-pen.pdf"
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20S3%20Pluma%20multidosis"
    }
  },
  {
    id: "xentra-s3-vial",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra S3 — Vial 10 mL",
    short: "Solución para uso subcutáneo, frasco multidosis 10 mL.",
    bullets: ["Esterilidad garantizada", "Uso SUB-C"],
    variants: ["5 mg/mL", "20 mg/mL"],
    image: "/images/products/xentra-s3-vial.webp",
    variantImages: {
      // "5 mg/mL": "/images/products/xentra-s3-vial-5.webp",
      // "20 mg/mL": "/images/products/xentra-s3-vial-20.webp",
    },
    includes: ["Frasco vial 10 mL", "Guía de uso"],
    datasheet: null,
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20S3%20Vial%2010mL"
    }
  },
  {
    id: "xentra-t3-pen",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra T3 — Pluma multidosis",
    short: "Presentaciones escalables para dosificación semanal.",
    bullets: ["Uso SUB-C", "Guía de dosificación"],
    variants: ["10 mg", "20 mg", "30 mg", "40 mg", "50 mg", "60 mg"],
    image: "/images/products/xentra-t3-pen.webp",
    variantImages: {
      // "10 mg": "/images/products/xentra-t3-pen-10.webp",
      // "20 mg": "/images/products/xentra-t3-pen-20.webp",
    },
    includes: ["Pluma/jeringa multidosis", "Guía rápida"],
    datasheet: null,
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20T3%20Pluma%20multidosis"
    }
  },
  {
    id: "xentra-t3-vial", // 👈 4º producto (T3 en vial)
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra T3 — Vial 10 mL",
    short: "Solución inyectable en frasco multidosis 10 mL.",
    bullets: ["Uso SUB-C", "Esterilidad garantizada"],
    variants: ["10 mg/mL", "20 mg/mL"],
    image: "/images/products/xentra-t3-vial.webp",
    variantImages: {
      // "10 mg/mL": "/images/products/xentra-t3-vial-10.webp",
      // "20 mg/mL": "/images/products/xentra-t3-vial-20.webp",
    },
    includes: ["Frasco vial 10 mL", "Guía de uso"],
    datasheet: null,
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20T3%20Vial%2010mL"
    }
  }
];
