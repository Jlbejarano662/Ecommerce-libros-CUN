import "./Tarjeta.css";
import PropTypes from "prop-types";

const Tarjeta = ({ nombre, descripcion, items, imagen }) => {
  return (
    <div className="tarjeta">
      <h2 className="tarjeta-titulo">{nombre}</h2>
      <div className="tarjeta-cuerpo">
        <div className="tarjeta-contenido">
          <p className="tarjeta-descripcion">{descripcion}</p>
          <h3 className="tarjeta-subtitulo">Nuestros servicios se basan en:</h3>
          <ul className="tarjeta-items">
            {items.map((item, index) => (
              <li key={index} className="tarjeta-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="tarjeta-imagen-container">
          <img src={imagen} alt={nombre} className="tarjeta-img" />
        </div>
      </div>
    </div>
  );
};

Tarjeta.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagen: PropTypes.string.isRequired,
};

export default Tarjeta;
