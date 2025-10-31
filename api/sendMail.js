// /pages/api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.nbdctradinggroup.com", // servidor SMTP de HostGator
    port: 465, // o usa 587 si tu cPanel indica STARTTLS
    secure: true, // true = SSL (465)
    auth: {
      user: process.env.SMTP_USER, // ejemplo: web@nbdctradinggroup.com
      pass: process.env.SMTP_PASS, // contraseña del correo
    },
  });

  try {
    await transporter.sendMail({
      from: `"Sitio Web NBDC Trading Group" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || "latam@nbdctradinggroup.com", // destinatario principal
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
      error: "No se pudo enviar el mensaje. Intenta más tarde.",
    });
  }
}
