// src/components/Tiles.jsx
import useReveal from "../hooks/useReveal";

/**
 * Tiles: grilla/rail de tarjetas informativas.
 * - Aplica animación de entrada al hacer scroll usando useReveal().
 * - Mantiene tu API actual: items, className.
 */
export default function Tiles({ items = [], className = "" }) {
  // Activa la animación para todas las tarjetas dentro del contenedor .tiles
  // El hook añade la clase .visible cuando cada .reveal entra al viewport.
  useReveal(".tiles .reveal");

  // Fallback de seguridad
  if (!Array.isArray(items)) items = [];

  return (
    <div className={`tiles hscroll ${className}`} role="list">
      {items.map((t, idx) => (
        <article
          role="listitem"
          key={t.id || t.title || idx}
          className="tile reveal"
          style={{
            backgroundImage: t.image ? `url(${t.image})` : undefined,
          }}
        >
          <div className="tile-inner">
            {t.kicker ? <div className="tile-kicker">{t.kicker}</div> : null}

            {t.title ? <h3 className="tile-title">{t.title}</h3> : null}

            {t.body ? <p className="tile-body">{t.body}</p> : null}

            {t.cta ? (
              <a className="tile-cta" href={t.cta.href}>
                {t.cta.label} →
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
