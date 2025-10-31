// /api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, company, message } = req.body;

  // --- Transportador SMTP (HostGator) ---
  const transporter = nodemailer.createTransport({
    host: "mail.nbdctradinggroup.com", // Servidor SMTP del dominio
    port: 465, // SSL (si da error, probar 587 con secure:false)
    secure: true, // true = SSL / false = STARTTLS
    auth: {
      user: process.env.SMTP_USER, // latam@nbdctradinggroup.com
      pass: process.env.SMTP_PASS, // contraseña del correo
    },
  });

  try {
    // --- Correo saliente ---
    await transporter.sendMail({
      from: `"Xentra Pharma LATAM" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO, // latam@nbdctradinggroup.com
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Correo:</b> ${email}</p>
        ${phone ? `<p><b>Teléfono:</b> ${phone}</p>` : ""}
        ${company ? `<p><b>Empresa:</b> ${company}</p>` : ""}
        <p><b>Mensaje:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("❌ Error al enviar correo:", error);
    res.status(500).json({
      ok: false,
      error:
        "No se pudo enviar el mensaje. Intenta más tarde o contacta vía WhatsApp.",
    });
  }
}
