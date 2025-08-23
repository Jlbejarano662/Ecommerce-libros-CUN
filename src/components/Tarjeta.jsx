import "./Tarjeta.css";
import PropTypes from "prop-types";

const Tarjeta = ({ titulo, autor, precio, imagen }) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-img" />
      <h3 className="tarjeta-titulo">{titulo}</h3>
      <p className="tarjeta-autor">por {autor}</p>
      <p className="tarjeta-precio">${precio}</p>
    </div>
  );
};

Tarjeta.propTypes = {
  titulo: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imagen: PropTypes.string.isRequired,
};

export default Tarjeta;
