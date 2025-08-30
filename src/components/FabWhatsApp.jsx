// src/components/FabWhatsApp.jsx
import { FaWhatsapp } from "react-icons/fa";

export default function FabWhatsApp() {
  return (
    <a
      href="https://wa.me/5219991234567" // <-- pon aquí el número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fab-whatsapp"
      aria-label="Abrir chat en WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
