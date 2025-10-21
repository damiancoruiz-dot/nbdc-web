// src/data/products.js
export const products = [
  // CONTROL DE PESO / METABOLISMO
  {
    id: "xentra-s3-pen",
    lab: "Xentra Pharma",
    brandLogo: "/brand/xentra-logo.png",
    name: "Xentra S3 — Pluma multidosis",
    short: "Pluma con dosificación semanal y micro-unidades.",
    bullets: ["Uso SUB-C", "Trazabilidad y guía de uso"],
    variants: ["1.5 mg", "3.5 mg", "5.5 mg", "7.5 mg", "9.5 mg"],
    image: "/images/products/xentra-s3-pen.webp",
    datasheet: "/docs/xentra-s3-pen.pdf",
    cta: { label: "Solicitar cotización", href: "https://wa.me/524428781486?text=Hola,%20me%20interesa%20Xentra%20S3%20Pluma%20multidosis" },
    category: "Control de peso / metabolismo"
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
    datasheet: "/docs/xentra-s3-vial.pdf",
    cta: { label: "Solicitar cotización", href: "https://wa.me/524428781486?text=Hola,%20me%20interesa%20Xentra%20S3%20Vial%2010mL" },
    category: "Control de peso / metabolismo"
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
    datasheet: "/docs/xentra-t3-pen.pdf",
    cta: { label: "Solicitar cotización", href: "https://wa.me/524428781486?text=Hola,%20me%20interesa%20Xentra%20T3%20Pluma%20multidosis" },
    category: "Control de peso / metabolismo"
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
    datasheet: "/docs/xentra-t3-vial.pdf",
    cta: { label: "Solicitar cotización", href: "https://wa.me/524428781486?text=Hola,%20me%20interesa%20Xentra%20T3%20Vial%2010mL" },
    category: "Control de peso / metabolismo"
  },
  {
    id: "slimyra",
    name: "Slimyra",
    short: "Promueve la pérdida de grasa estimulando la lipólisis y aumentando el metabolismo.",
    image: "/images/products/slimyra.webp",
    category: "Control de peso / metabolismo"
  },
  {
    id: "motzvida",
    name: "Motzvida",
    short: "Hormona peptídica que regula el metabolismo y mejora la sensibilidad a la insulina.",
    image: "/images/products/motzvida.webp",
    category: "Control de peso / metabolismo"
  },
  {
    id: "tesavida",
    name: "Tesavida",
    short: "Análogo de la hormona liberadora de GH para reducir grasa abdominal.",
    image: "/images/products/tesavida.webp",
    category: "Control de peso / metabolismo"
  },

  // REGENERACIÓN Y REPARACIÓN
  {
    id: "vestria",
    name: "Vestria",
    short: "Acelera la curación de tejidos, reduce la inflamación y proporciona organoprotección.",
    image: "/images/products/vestria.webp",
    category: "Regeneración y reparación"
  },
  {
    id: "vestria-defendra",
    name: "Vestria + Defendra",
    short: "Combinación sinérgica para reparación avanzada de tejidos.",
    image: "/images/products/vestria-defendra.webp",
    category: "Regeneración y reparación"
  },
  {
    id: "defendra",
    name: "Defendra",
    short: "Péptido involucrado en la reparación de tejidos y la cicatrización de heridas.",
    image: "/images/products/defendra.webp",
    category: "Regeneración y reparación"
  },
  {
    id: "hexava",
    name: "Hexava",
    short: "Aumenta fuerza, crecimiento de fibras musculares y rejuvenece articulaciones.",
    image: "/images/products/hexava.webp",
    category: "Regeneración y reparación"
  },

  // ANTIENVEJECIMIENTO / VITALIDAD CELULAR
  {
    id: "edadnad",
    name: "EdadNAD",
    short: "Apoya el envejecimiento saludable, función cognitiva y sistema inmunológico.",
    image: "/images/products/edadnad.webp",
    category: "Antienvejecimiento / Vitalidad celular"
  },
  {
    id: "cuvenix",
    name: "Cuvenix",
    short: "Mejora la salud de la piel estimulando colágeno y elastina.",
    image: "/images/products/cuvenix.webp",
    category: "Antienvejecimiento / Vitalidad celular"
  },
  {
    id: "endurorex",
    name: "Endurorex",
    short: "Secretagogo de la hormona del crecimiento (GH) para fuerza y rejuvenecimiento.",
    image: "/images/products/endurorex.webp",
    category: "Antienvejecimiento / Vitalidad celular"
  },
  {
    id: "ipavaxen",
    name: "Ipavaxen",
    short: "Secretagogo selectivo de GH para crecimiento muscular y antienvejecimiento.",
    image: "/images/products/ipavaxen.webp",
    category: "Antienvejecimiento / Vitalidad celular"
  },
  {
    id: "endurorex-ipavaxen",
    name: "Endurorex + Ipavaxen",
    short: "Combinación enfocada en crecimiento muscular y rejuvenecimiento.",
    image: "/images/products/endurorex-ipavaxen.webp",
    category: "Antienvejecimiento / Vitalidad celular"
  },
  {
    id: "sermovida",
    name: "Sermovida",
    short: "Estimula la producción natural de GH mejorando energía y vitalidad.",
    image: "/images/products/sermovida.webp",
    category: "Antienvejecimiento / Vitalidad celular"
  },

  // ENERGÍA Y BIENESTAR
  {
    id: "vidaboost",
    name: "VidaBoost",
    short: "Inyección lipotrópica con vitaminas y aminoácidos para energía y metabolismo.",
    image: "/images/products/vidaboost.webp",
    category: "Energía y bienestar general"
  },
  {
    id: "restora-x",
    name: "Restora X",
    short: "Mejora la calidad del sueño, reduce el estrés y apoya la función cognitiva.",
    image: "/images/products/restora-x.webp",
    category: "Energía y bienestar general"
  },
  {
    id: "glutiva",
    name: "Glutiva",
    short: "Antioxidante maestro que neutraliza radicales libres y ayuda a desintoxicar el cuerpo.",
    image: "/images/products/glutiva.webp",
    category: "Energía y bienestar general"
  },

  // VITALIDAD SEXUAL Y HORMONAL
  {
    id: "pigmentra",
    name: "Pigmentra",
    short: "Péptido para el bronceado y la estimulación sexual.",
    image: "/images/products/pigmentra.webp",
    category: "Vitalidad sexual y hormonal"
  },
  {
    id: "amoriva",
    name: "Amoriva",
    short: "Tratamiento del trastorno del deseo sexual hipoactivo en mujeres.",
    image: "/images/products/amoriva.webp",
    category: "Vitalidad sexual y hormonal"
  },

  // SALUD AVANZADA / INVESTIGACIÓN
  {
    id: "ivercura",
    name: "Ivercura",
    short: "Puede inhibir metástasis y provocar apoptosis de células cancerosas.",
    image: "/images/products/ivercura.webp",
    category: "Salud avanzada / investigación"
  }
];
