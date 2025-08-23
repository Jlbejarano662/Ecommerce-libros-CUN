
import "./Footer.css";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div>
            <h4>Redes Sociales</h4>
            <a href="#" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaFacebook /> Facebook</a>
            <a href="#" aria-label="YouTube" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaYoutube /> YouTube</a>
            <a href="#" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaInstagram /> Instagram</a>
          </div>
          <div>
            <h4>Tema</h4>
            <a href="#">Página</a>
            <a href="#">Página</a>
            <a href="#">Página</a>
          </div>
          <div>
            <h4>Tema</h4>
            <a href="#">Página</a>
            <a href="#">Página</a>
            <a href="#">Página</a>
          </div>
          <div>
            <h4>Tema</h4>
            <a href="#">Página</a>
            <a href="#">Página</a>
            <a href="#">Página</a>
          </div>          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
