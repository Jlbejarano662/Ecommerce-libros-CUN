import express from "express";
import bodyParser from "body-parser";
import sgMail from "@sendgrid/mail";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// 👉 Coloca aquí tu API Key de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", async (req, res) => {
  const { nombre, empresa, correo, mensaje } = req.body;

  const msg = {
    to: "ab.vantwan@gmail.com", // el correo que verificaste en SendGrid
    from: "ab.vantwan@gmail.com", // debe coincidir con el remitente creado
    subject: `Nuevo mensaje de contacto de ${nombre} de la empresa ${empresa}`,
    text: `Correo: ${correo}\n\nMensaje: ${mensaje}`,
    html: `<p><strong>Correo:</strong> ${correo}</p>
           <p><strong>Mensaje:</strong></p>
           <p>${mensaje}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ success: false, message: "Error al enviar correo" });
  }
});

app.listen(5000, () => {
  console.log("Servidor backend corriendo en http://localhost:5000");
});
