import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" class="navbar-logo">
        <img src="images/iconLogo.png" alt="Logo de la empresa"></img>
      </a>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contactenos">Contactenos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;