import { Resend } from "resend";
import Agente from "../models/agente.js";

const RESEND_API_KEY = "re_SQFocMJw_2wBJ5v3JbASmhMnHCiw7Z1AQ";

const resend = new Resend(RESEND_API_KEY);

export const createEmail = async (req, res) => {
  try {
    const formData = req.body;

    const htmlContent = `
              <h2>Detalles del formulario:</h2>
              <p><strong>Nombre:</strong> ${formData.nombre}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Número Telefónico:</strong> ${formData.telefono}</p>
              <p><strong>Comentarios:</strong> ${formData.comentarios}</p>
            `;

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [formData.correo], // Usamos el correo del agente obtenido del modelo
      subject: "Contactenos, MultiHogar-MH",
      html: htmlContent,
    });

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
