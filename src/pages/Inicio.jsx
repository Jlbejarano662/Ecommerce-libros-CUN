import React from "react";
import "./Inicio.css"
const Inicio = () => {
  return (
    <div style={{ minHeight: '100vh' }}>{/* TODO: Solo para efectos del cascaron, quitar este estilo cuando se maquete la pagina */}
      {/* <h1 className="title">INSPECTIA</h1> */}
      <section className="hero">
        <div className="hero-text">
          <h1>Somos una empresa especializada en inspección</h1>
          <p>
            Evaluamos y acompañamos en procesos de certificación bajo normas ISO, garantizando resultados confiables y profesionalismo.
          </p>
          <a href="/Contactenos" className="btn-contacto">CONTÁCTANOS</a>
        </div>
      </section>
      <hr className="separador"/>
      <section className="section">
        <h2>¿Qué es un Organismo de Inspección?</h2>
        <div className="section-content">
          <img src={"/images/inspeccio.jpg"} alt="Inspección" />
          <p>
            Cuando hablamos de organismos de inspección, nos referimos a las organizaciones que realizan inspecciones. Tanto aquellas que se dedican a la ejecución de estas actividades, como aquellas que hacen parte de otras donde se requiera de este tipo de servicios. Esto incluye:
            El examen de materiales, productos, procesos, instalaciones, plantas, procedimientos de trabajo o servicios;
            La determinación de su conformidad con los requisitos;
            La emisión del informe de los resultados de estas actividades; y
            Su comunicación a los clientes y autoridades.          </p>
        </div>
      </section>
      <section className="section alt">
        <h2>Gestión del riesgo según ISO 17020</h2>
        <div className="section-content">
          <img src={"/images/tablacheck.png"} alt="Riesgo ISO 17020" />
          <p>
            En el caso de los organismos de inspección, la identificación incluye determinar qué actividades, que relaciones, o que condiciones del personal pueden generar situaciones, condiciones o acciones susceptibles de producir de los eventos que pueden afectar su imparcialidad.
            Por otra parte, incluye determinar cómo la propiedad, la gobernabilidad, la dirección, los recursos compartidos, las finanzas, los contratos, el marketing, el pago de una comisión por ventas u otros incentivos pueden generar sesgos o conflictos de interés.
            No obstante lo anterior, la norma no especifica cómo hacerlo. Por esta razón, para entender qué son los riesgos y cómo se gestionan a nivel general, puedes ver el siguiente vídeo donde lo explicamos con mayor detalle.
          </p>
        </div>
      </section>

      <section className="normatividad">
        <h3>INSPECCIONES BASADAS EN NORMATIVIDAD</h3>
        <div className="iconos">
          <img src="/images/icono1.jpg" alt="ISO" />
          <img src="/images/icono2.png" alt="Auditoría" />
          <img src="/images/icono3.png" alt="Evaluación" />
          <img src="/images/icono4.png" alt="Seguridad" />
        </div>
      </section>

    </div>
  );
};

export default Inicio;
