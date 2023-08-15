import { Resend } from 'resend';
const RESEND_API_KEY = 're_SQFocMJw_2wBJ5v3JbASmhMnHCiw7Z1AQ'; 

const resend = new Resend(RESEND_API_KEY)

export const createEmail= async (req, res) => {
    try {

        const formData = req.body.formData; // Supongo que en tu solicitud AJAX envías el formData completo
        const htmlContent = `
        <h2>Detalles del formulario:</h2>
        <p><strong>Nombre:</strong> ${formData.nombre}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Número Telefónico:</strong> ${formData.telefono}</p>
        <p><strong>Comentarios:</strong> ${formData.comentarios}</p>
        `;
       
        const data = await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: ['titolospina@gmail.com'/* req.body.correo*/],
          subject: "Contactenos, MultiHogar-MH",
          html: htmlContent,
        });
        res.status(200).json({ data });
      } catch (error) {
        console.log(error)
        res.status(500).json({ error });
        
      }
  };