// src/data/products.js
export const products = [
  // ────────────────────────────────────────────────────────────────────────────
  // EXISTENTES (con categoría añadida, sin cambiar nada más)
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: "xentra-s3-pen",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra S3 — Pluma multidosis",
    short: "Pluma con dosificación semanal y micro-unidades.",
    bullets: ["Uso SUB-C", "Trazabilidad y guía de uso"],
    variants: ["1.5 mg", "3.5 mg", "5.5 mg", "7.5 mg", "9.5 mg"],
    image: "/images/products/xentra-s3-pen.webp",
    variantImages: {
      "1.5 mg": "/images/products/xentra-s3-pen-1_5.webp",
      "3.5 mg": "/images/products/xentra-s3-pen-3_5.webp",
      "5.5 mg": "/images/products/xentra-s3-pen-5_5.webp",
      "7.5 mg": "/images/products/xentra-s3-pen-7_5.webp",
      "9.5 mg": "/images/products/xentra-s3-pen-9_5.webp"
    },
    includes: [
      "Pluma/jeringa multidosis",
      "Agujas desechables (x4)",
      "Torundas con alcohol",
      "Guía rápida"
    ],
    datasheet: "/docs/xentra-s3-pen.pdf",
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20S3%20Pluma%20multidosis"
    },
    category: "Control de peso"
  },
  {
    id: "xentra-s3-vial",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra S3 — Vial 10 mL",
    short: "Solución para uso subcutáneo, frasco multidosis 10 mL.",
    bullets: ["Esterilidad garantizada", "Uso SUB-C"],
    variants: ["5 mg/1 mL"],
    image: "/images/products/xentra-s3-vial.webp",
    includes: ["Frasco vial 10 mL", "Guía de uso"],
    datasheet: "/docs/xentra-s3-vial.pdf",
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20S3%20Vial%2010mL"
    },
    category: "Control de peso"
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
      "10 mg": "/images/products/xentra-t3-pen-10.webp",
      "20 mg": "/images/products/xentra-t3-pen-20.webp",
      "30 mg": "/images/products/xentra-t3-pen-30.webp",
      "40 mg": "/images/products/xentra-t3-pen-40.webp",
      "50 mg": "/images/products/xentra-t3-pen-50.webp",
      "60 mg": "/images/products/xentra-t3-pen-60.webp"
    },
    includes: ["Pluma/jeringa multidosis", "Guía rápida"],
    datasheet: "/docs/xentra-t3-pen.pdf",
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20T3%20Pluma%20multidosis"
    },
    category: "Control de peso"
  },
  {
    id: "xentra-t3-vial",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra T3 — Vial 10 mL",
    short: "Solución inyectable en frasco multidosis 10 mL.",
    bullets: ["Uso SUB-C", "Esterilidad garantizada"],
    variants: ["20 mg/1 mL"],
    image: "/images/products/xentra-t3-vial.webp",
    includes: ["Frasco vial 10 mL", "Guía de uso"],
    datasheet: "/docs/xentra-t3-vial.pdf",
    cta: {
      label: "Solicitar cotización",
      href: "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Xentra%20T3%20Vial%2010mL"
    },
    category: "Control de peso"
  },

  // ────────────────────────────────────────────────────────────────────────────
  // NUEVOS (placeholders de imágenes/datasheets; ajusta cuando tengas assets)
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: "vestria",
    lab: "—",
    brandLogo: null,
    name: "Vestria",
    short:
      "Acelera la curación de tejidos, reduce la inflamación y aporta organoprotección.",
    bullets: [
      "Soporte a reparación tisular",
      "Modulación inflamatoria",
      "Aplicaciones multidisciplinarias"
    ],
    variants: [],
    image: "/images/products/vestria.jpg",
    includes: [],
    datasheet: "/docs/vestria.pdf",
    cta: {
      label: "Solicitar cotización",
      href:
        "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Vestria"
    },
    category: "Regeneración y reparación"
  },
  {
    id: "defendra",
    lab: "—",
    brandLogo: null,
    name: "Defendra",
    short:
      "Péptido asociado con la reparación de tejidos y la cicatrización de heridas.",
    bullets: [
      "Cicatrización y reparación",
      "Potencial uso dermatológico",
      "Apoyo en protocolos regenerativos"
    ],
    variants: [],
    image: "/images/products/defendra.jpg",
    includes: [],
    datasheet: "/docs/defendra.pdf",
    cta: {
      label: "Solicitar cotización",
      href:
        "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Defendra"
    },
    category: "Regeneración y reparación"
  },
  {
    id: "edadnad",
    lab: "—",
    brandLogo: null,
    name: "EdadNAD",
    short:
      "Soporte a energía celular y reducción de estrés oxidativo vinculado al envejecimiento.",
    bullets: [
      "Cofactores celulares clave",
      "Enfoque antioxidante",
      "Bienestar y vitalidad"
    ],
    variants: [],
    image: "/images/products/edadnad.jpg",
    includes: [],
    datasheet: "/docs/edadnad.pdf",
    cta: {
      label: "Solicitar cotización",
      href:
        "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20EdadNAD"
    },
    category: "Antienvejecimiento"
  },
  {
    id: "slimyra",
    lab: "—",
    brandLogo: null,
    name: "Slimyra",
    short:
      "Apoyo al metabolismo de grasas y control del apetito dentro de planes integrales.",
    bullets: [
      "Metabolismo y saciedad",
      "Soporte a control de peso",
      "Complemento a hábitos saludables"
    ],
    variants: [],
    image: "/images/products/slimyra.jpg",
    includes: [],
    datasheet: "/docs/slimyra.pdf",
    cta: {
      label: "Solicitar cotización",
      href:
        "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20Slimyra"
    },
    category: "Control de peso"
  },
  {
    id: "vidaboost",
    lab: "—",
    brandLogo: null,
    name: "VidaBoost",
    short:
      "Complejo para energía diaria y bienestar general con micronutrientes clave.",
    bullets: [
      "Energía sostenida",
      "Micronutrición esencial",
      "Uso cotidiano"
    ],
    variants: [],
    image: "/images/products/vidaboost.jpg",
    includes: [],
    datasheet: "/docs/vidaboost.pdf",
    cta: {
      label: "Solicitar cotización",
      href:
        "https://wa.me/524428781486?text=Hola%2C%20me%20interesa%20VidaBoost"
    },
    category: "Energía y bienestar"
  }
];