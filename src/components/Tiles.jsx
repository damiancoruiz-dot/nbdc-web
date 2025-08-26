// src/components/Tiles.jsx
export default function Tiles({ items = [], className = "" }) {
  return (
    <div className={`tiles hscroll ${className}`}>
      {items.map((t) => (
        <article
          key={t.id || t.title}
          className="tile"
          style={{
            backgroundImage: t.image ? `url(${t.image})` : undefined,
          }}
        >
          <div className="tile-inner">
            {t.kicker ? <div className="tile-kicker">{t.kicker}</div> : null}
            <h3 className="tile-title">{t.title}</h3>
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
