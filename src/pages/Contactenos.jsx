import React from "react";
import "./Contactenos.css";
import FormularioContacto from "../components/FormularioContacto"

const Acerca = () => {
  return (
    <div className="acerca-container">
      {/* Sección Acerca de nosotros */}
      <section className="acerca-nosotros">
        <div className="acerca-texto">
          <h1>Acerca de nosotros</h1>
          <p>
            En EspectIA nos especializamos en ofrecer servicios de calidad de
            software y auditoría impulsados por inteligencia artificial. Nuestro
            enfoque combina experiencia técnica con tecnologías avanzadas de
            análisis, lo que nos permite identificar riesgos, optimizar procesos
            y garantizar soluciones confiables y eficientes. Creemos en la
            innovación como motor de mejora continua, brindando a nuestros
            clientes la seguridad y confianza necesarias para alcanzar sus
            objetivos digitales.
          </p>
        </div>
        <div className="acerca-imagen">
          <img
            src="/images/contactenos.png"
            alt="Equipo de trabajo"
          />
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="contacto">
        <h2>Contactarme</h2>
        <FormularioContacto />
      </section>
    </div>
  );
};

export default Acerca;