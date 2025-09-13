import React, { useState } from "react";
import axios from "axios";

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /*await axios.post("http://localhost:5000/send-email", formData);*/
      await axios.post("https://ecommerce-cun-backend-qi71fouv1-jlbejarano662s-projects.vercel.app/send-email", formData);
      alert("✅ Mensaje enviado correctamente");
      setFormData({ nombre: "", empresa: "", correo: "", mensaje: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("❌ Hubo un error al enviar el mensaje");
    }
  };

  return (
    <form className="form-contacto" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
        />
      </div>
      <input
        type="email"
        placeholder="Correo electrónico"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
      />
      <textarea
        placeholder="Escribe tu pregunta o mensaje"
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;
