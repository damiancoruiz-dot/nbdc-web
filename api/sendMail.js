import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, company, message } = Object.fromEntries(
    await req.formData()
  );

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.nbdctradinggroup.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Web NBDC" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
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

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("❌ Error al enviar correo:", error.message || error);
    return res.status(500).json({
      ok: false,
      error: error.message || "Error interno al enviar correo.",
    });
  }
}
