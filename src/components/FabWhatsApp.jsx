// src/components/FabWhatsApp.jsx
import React from "react";

const WA_NUMBER = "524428781486"; // <-- tu número, sin "+"
const DEFAULT_MSG =
  "Hola, me interesa su portafolio. ¿Me comparten información y precios?";

export default function FabWhatsApp({
  number = WA_NUMBER,
  message = DEFAULT_MSG,
}) {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      className="wa-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      {/* Ícono SVG inline para no depender de archivos externos */}
      <svg
        className="wa-fab__icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M19.11 17.72c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.47-1.82-.15-.27-.02-.41.11-.54.12-.12.27-.32.4-.49.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.69 4.02.66.26 1.17.41 1.57.52.66.17 1.27.15 1.75.09.53-.08 1.6-.65 1.83-1.27.23-.62.23-1.16.16-1.27-.07-.11-.25-.18-.52-.31zM15.06 3.2C8.94 3.2 3.99 8.15 3.99 14.27c0 2.43.79 4.68 2.14 6.5L4.14 27.7l7.12-2c1.73.95 3.72 1.49 5.8 1.49 6.11 0 11.07-4.95 11.07-11.07S21.17 3.2 15.06 3.2zm0 19.97c-1.89 0-3.65-.55-5.12-1.49l-.37-.23-4.22 1.18 1.13-4.11-.24-.38a9.04 9.04 0 0 1-1.44-4.97c0-5 4.06-9.06 9.06-9.06 5 0 9.06 4.06 9.06 9.06 0 5-4.06 9.06-9.06 9.06z"
          fill="currentColor"
        />
      </svg>
      <span className="wa-fab__label">WhatsApp</span>
    </a>
  );
}
