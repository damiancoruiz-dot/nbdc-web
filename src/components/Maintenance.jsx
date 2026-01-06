export default function Maintenance() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      textAlign: "center",
      background: "#0f172a",
      color: "#e5e7eb"
    }}>
      <div style={{ maxWidth: 560 }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Sitio en mantenimiento
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.85 }}>
          El sitio se encuentra temporalmente fuera de servicio por ajustes administrativos.
          <br />
          Por favor, intente más tarde.
        </p>

        <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", opacity: 0.6 }}>
          Para más información, contacte al administrador.
        </p>
      </div>
    </div>
  );
}
