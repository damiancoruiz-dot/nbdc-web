import React, { useEffect, useRef, useState } from "react";

const PHONE = "524428781486";
const DEFAULT_MSG = "Hola, me interesa información sobre los productos de NBDC.";

function waHref(msg = DEFAULT_MSG) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export default function WhatsAppFab({
  message = DEFAULT_MSG,
  label = "WhatsApp",
  threshold = 80, // px de scroll antes de activar mini
}) {
  const [mini, setMini] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const raf = useRef();

  useEffect(() => {
    const footer = document.querySelector("footer");

    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const goingDown = y > lastY.current;
        const beyond = y > threshold;
        setMini(goingDown && beyond);
        lastY.current = y;

        if (footer) {
          const r = footer.getBoundingClientRect();
          setHidden(r.top < window.innerHeight);
        }
        raf.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [threshold]);

  return (
    <a
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-fab ${mini ? "is-mini" : ""} ${hidden ? "is-hidden" : ""}`}
      aria-label="Contactar por WhatsApp"
    >
      <span className="wa-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" role="img">
          <path
            fill="#fff"
            d="M20.52 3.48A11.87 11.87 0 0 0 12.01 0C5.4 0 .02 5.38.02 12c0 2.1.55 4.14 1.6 5.95L0 24l6.22-1.6A11.94 11.94 0 0 0 12.01 24C18.63 24 24 18.62 24 12c0-3.18-1.24-6.17-3.48-8.52ZM12 22.06c-1.94 0-3.77-.52-5.38-1.5l-.38-.22-3.68.95.98-3.59-.25-.39A10.07 10.07 0 0 1 1.94 12C1.94 6.46 6.46 1.94 12 1.94S22.06 6.46 22.06 12 17.54 22.06 12 22.06Zm5.69-7.53c-.31-.16-1.84-.91-2.12-1.01-.29-.11-.49-.16-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.8-1.53-1.78-1.72-2.08-.18-.31-.02-.48.13-.63.13-.13.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.29-.25-.6-.5-.51-.7-.51h-.6c-.2 0-.52.08-.79.39-.27.31-1.05 1.02-1.05 2.49 0 1.47 1.08 2.89 1.23 3.09.16.2 2.12 3.23 5.14 4.52.72.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.84-.75 2.1-1.48.26-.74.26-1.37.18-1.48-.08-.1-.28-.18-.59-.34Z"
          />
        </svg>
      </span>
      <span className="wa-label">{label}</span>
    </a>
  );
}
