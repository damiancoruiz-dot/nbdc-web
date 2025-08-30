// src/components/FabWhatsApp.jsx
const WA_NUMBER = "524428781486"; // sin "+" (México 52)

export default function FabWhatsApp() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, me interesa su portafolio. ¿Me apoyas con información?"
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        right: "18px",
        bottom: "18px",
        zIndex: 9998,
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 16px",
        borderRadius: "9999px",
        background: "#25D366",
        color: "#fff",
        fontWeight: 800,
        textDecoration: "none",
        boxShadow: "0 10px 24px rgba(37,211,102,.35)",
        WebkitTapHighlightColor: "transparent",
        // evitar que se “recorte” dentro de contenedores con overflow hidden
        transform: "translateZ(0)",
      }}
    >
      {/* Ícono WhatsApp en SVG (blanco) */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M27.1 4.9A13.95 13.95 0 0 0 16.01 1C8.74 1 2.78 6.96 2.78 14.22c0 2.5.68 4.84 1.99 6.9L3 31l10.1-1.74a13.1 13.1 0 0 0 2.91.33c7.26 0 13.22-5.96 13.22-13.22 0-3.53-1.38-6.85-3.94-9.47Z"
          fill="#fff"
          fillOpacity=".35"
        />
        <path
          d="M25.4 6.6A11.67 11.67 0 0 0 16 2.9c-6.45 0-11.7 5.25-11.7 11.7 0 2.18.6 4.3 1.75 6.15l-.94 5.47 5.6-1.01c1.75.94 3.72 1.44 5.73 1.44 6.45 0 11.7-5.25 11.7-11.7 0-3.12-1.21-6.07-3.35-8.25Zm-3.27 12.8c-.17.47-.98.9-1.37.96-.35.06-.79.09-1.28-.08-.3-.1-.68-.22-1.17-.43-2.06-.9-3.4-3-3.5-3.13-.1-.13-.84-1.11-.84-2.13 0-1.02.53-1.52.72-1.72.19-.2.42-.25.56-.25.14 0 .28 0 .4.01.13.01.3-.05.46.35.17.41.58 1.41.63 1.51.05.1.08.22.02.35-.06.13-.09.21-.17.32-.08.11-.17.25-.24.34-.08.11-.17.22-.07.42.1.2.45.74.96 1.2.66.59 1.22.77 1.41.86.19.1.31.08.43-.05.13-.13.5-.59.64-.8.14-.2.28-.17.46-.1.19.06 1.18.56 1.38.66.2.1.33.15.38.23.06.08.06.49-.11.96Z"
          fill="#fff"
        />
      </svg>
      <span style={{ lineHeight: 1 }}>WhatsApp</span>
    </a>
  );
}
