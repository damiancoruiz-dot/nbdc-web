import { useState, useEffect } from "react";

export default function Contacto() {
  const wa = "5299900000000"; // <-- cámbialo al número real
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hola, me interesa el catálogo de Xentra."
  )}`;

  const [status, setStatus] = useState({
    ok: false,
    error: "",
    sending: false,
  });
  const [fade, setFade] = useState(false);

  const [iframeHeight, setIframeHeight] = useState(450);

  // Ajusta altura del iframe según ancho de pantalla
  useEffect(() => {
    function updateHeight() {
      if (window.innerWidth <= 600) {
        setIframeHeight(300);
      } else if (window.innerWidth <= 1024) {
        setIframeHeight(350);
      } else {
        setIframeHeight(450);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ ok: false, error: "", sending: true });
    setFade(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      const json = await res.json();

      if (res.ok) {
        setStatus({ ok: true, error: "", sending: false });
        form.reset();
        setTimeout(() => setFade(true), 3000);
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, ok: false }));
          setFade(false);
        }, 5000);
      } else {
        const msg =
          json?.errors?.[0]?.message || "No se pudo enviar. Intenta de nuevo.";
        setStatus({ ok: false, error: msg, sending: false });
      }
    } catch (err) {
      setStatus({
        ok: false,
        error: "Error de red. Revisa tu conexión.",
        sending: false,
      });
    }
  }

  return (
    <section
      id="contacto"
      style={{ padding: "48px 20px", background: "#f9fbfc" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 12, fontSize: 28 }}>
        Contacto
      </h2>
      <p style={{ textAlign: "center", color: "#556070" }}>
        Escríbenos para cotización y tiempos de envío.
      </p>

      <div style={{ maxWidth: 600, margin: "32px auto" }}>
        <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
          <label>
            Nombre *
            <input type="text" name="name" required style={inputStyle} />
          </label>
          <label>
            Correo electrónico *
            <input type="email" name="email" required style={inputStyle} />
          </label>
          <label>
            Teléfono (opcional)
            <input type="tel" name="phone" style={inputStyle} />
          </label>
          <label>
            Empresa (opcional)
            <input type="text" name="company" style={inputStyle} />
          </label>
          <label>
            Mensaje *
            <textarea
              name="message"
              rows={5}
              required
              style={inputStyle}
              placeholder="¿Qué producto(s) te interesan?"
            />
          </label>

          {status.ok && (
            <div
              style={{
                ...alertOk,
                opacity: fade ? 0 : 1,
                transition: "opacity 1s ease",
              }}
            >
              ¡Gracias! Tu mensaje fue enviado.
            </div>
          )}
          {status.error && <div style={alertError}>{status.error}</div>}

          <button type="submit" disabled={status.sending} style={btnPrimary}>
            {status.sending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>

      {/* --- Mapa de Google Maps responsive dinámico --- */}
      <div
        style={{
          maxWidth: 800,
          margin: "48px auto 0 auto",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1757876570883!6m8!1m7!1syWDSHXROGUdli7XC-E3Tjw!2m2!1d20.58163908974502!2d-100.3788123817937!3f289.32!4f-9.430000000000007!5f0.4000000000000002"
          width="100%"
          height={iframeHeight}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div style={{ textAlign: "center", padding: 12, background: "#f9fbfc" }}>
          <a
            href="https://maps.google.com/?q=20.5816391,-100.3788124"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#0b6aa1",
              fontWeight: "bold",
            }}
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

// --- estilos inline ---
const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #ccd6e0",
  borderRadius: 8,
  fontSize: 14,
  marginTop: 4,
};
const btnPrimary = {
  background: "#0b6aa1",
  color: "#fff",
  padding: "12px 16px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
};
const btnWhatsApp = {
  background: "#25D366",
  color: "#fff",
  padding: "12px 16px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 600,
};
const alertOk = {
  background: "#ecfdf3",
  border: "1px solid #ABEFC6",
  color: "#067647",
  padding: "8px 12px",
  borderRadius: 6,
  fontSize: 14,
};
const alertError = {
  background: "#fef3f2",
  border: "1px solid #fecdca",
  color: "#b42318",
  padding: "8px 12px",
  borderRadius: 6,
  fontSize: 14,
};
