
import "./Footer.css";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-redes-sociales">
            <a href="#" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center'}}><FaLinkedin/></a>
            <a href="#" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center'}}><FaFacebook /></a>
            <a href="#" aria-label="YouTube" style={{ display: 'flex', alignItems: 'center'}}><FaYoutube /></a>
            <a href="#" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center'}}><FaInstagram /></a>
          </div>
          <p>© 2025 EspectIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
