import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Libros CUN</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contactenos">Contactenos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;