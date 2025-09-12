
import { useState } from "react";
import Tarjeta from "../components/Tarjeta";
import "./Servicios.css";

const Servicios = () => {
  // Datos de servicios (pueden venir de una API o base de datos)
  const servicios = [
    {
      id: 1,
      nombre: "Protección de datos personales",
      descripcion: "Protegemos los datos personales de tu organización cumpliendo con normativas nacionales e internacionales como el GDPR. Implementamos políticas, capacitaciones y auditorías para asegurar la privacidad y el correcto manejo de la información.",
      items: ["Evaluar la exposición sobre el mal uso de la información confidencial y privada.","Implementar políticas y procedimientos para la protección de datos personales.","Capacitar al personal en el manejo adecuado de datos personales.","Realizar auditorías periódicas para asegurar el cumplimiento de las normativas.","Asesorar en la gestión de incidentes relacionados con la protección de datos."],
      imagen: "/images/proteccion_datos.webp",
    },
    {
      id: 2,
      nombre: "Garantía y Certificación",
      descripcion: "Ofrecemos servicios de garantía y certificación para asegurar que tus productos y servicios cumplen con los estándares de calidad y normativas aplicables. Utilizamos herramientas tradicionales y análisis inteligentes para certificar la conformidad y fiabilidad de tus ofertas.",
      items: ["Realizar auditorías de calidad y cumplimiento.","Proporcionar certificaciones reconocidas en la industria.","Asesorar en la mejora continua de procesos y productos.","Implementar sistemas de gestión de calidad.","Capacitar al personal en estándares y normativas relevantes."],
      imagen: "/images/garantia_certificacion.webp",
    },
    {
      id: 3,
      nombre: "Seguridad Informática",
      descripcion: "Brindamos servicios de seguridad informática potenciados por inteligencia artificial para proteger sistemas y datos contra amenazas cibernéticas. La IA permite detectar vulnerabilidades y fortalecer la infraestructura tecnológica de manera proactiva.",
      items: ["Realizar auditorías de seguridad informática con IA.","Implementar firewalls y sistemas inteligentes de detección de intrusos.","Capacitar al personal en ciberseguridad.","Desarrollar planes de respuesta a incidentes.","Monitorear y analizar actividades sospechosas con sistemas automatizados."],
      imagen: "/images/ciberseguridad.webp",
    },
    {
      id: 4,
      nombre: "Respuesta a Incidentes",
      descripcion: "Ofrecemos servicios de respuesta a incidentes para ayudar a las organizaciones a manejar y mitigar los efectos de los incidentes de seguridad. Nuestro equipo está preparado para actuar rápidamente y minimizar el impacto en tu negocio, apoyándose en herramientas digitales y automatizadas.",
      items: ["Establecer un plan de respuesta a incidentes.","Realizar simulacros de respuesta a incidentes.","Proporcionar soporte durante un incidente.","Evaluar y mejorar el plan de respuesta.","Capacitar al personal en la gestión de incidentes y uso de herramientas digitales."],
      imagen: "/images/respuesta_incidentes.webp",
    },
    {
      id: 5,
      nombre: "Auditoría de TI",
      descripcion: "Realizamos auditorías de TI utilizando inteligencia artificial para evaluar la infraestructura tecnológica y garantizar el cumplimiento de mejores prácticas y normativas. La IA permite identificar vulnerabilidades y generar recomendaciones precisas.",
      items: ["Evaluar la infraestructura tecnológica existente.","Identificar vulnerabilidades y áreas de mejora mediante análisis inteligentes.","Proporcionar recomendaciones para optimizar sistemas usando IA.","Realizar pruebas de seguridad y cumplimiento automatizadas.","Capacitar al personal en mejores prácticas de TI."],
      imagen: "/images/auditoria.webp",
    },
  ];

  // Estado para el servicio seleccionado
  const [servicioActivo, setServicioActivo] = useState(servicios[0].id);

  const servicioSeleccionado = servicios.find((serv) => serv.id === servicioActivo);

  return (
    <div className="servicios">
      <div className="container">
        <h1 className="title">Servicios</h1>

        {/* Filtros */}
        <div className="servicios-filtros">
          {servicios.map((serv) => (
            <button
              key={serv.id}
              className={serv.id === servicioActivo ? "active" : ""}
              onClick={() => setServicioActivo(serv.id)}
            >
              {serv.nombre}
            </button>
          ))}
        </div>

        {/* Mostrar solo el servicio seleccionado */}
 
          <Tarjeta
            key={servicioSeleccionado.id}
            nombre={servicioSeleccionado.nombre}
            descripcion={servicioSeleccionado.descripcion}
            items={servicioSeleccionado.items}
            imagen={servicioSeleccionado.imagen}
          />

      </div>
    </div>
  );
};

export default Servicios;
