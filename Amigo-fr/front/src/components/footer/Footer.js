import React, { useEffect, useState } from 'react';
import './footer.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-info">
          <p>
            Partagez le trajet et le coût avec Amigo, l’unique service de Taxi en Tunisie sous le concept de partage de course avec des services de haute qualité qui répondent à vos besoins.
          </p>
        </div>
        <div className={`footer-links ${isMobile ? 'mobile' : ''}`}>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li>Notre mission</li>
              <li>Nos normes de haute qualité</li>
              <li>Partagez, c'est mieux!</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li>
                <Link to="/">+216 95 436 978</Link>
              </li>
              <li>
                <Link to="/about">contact@getwireless.com.tn</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Amigo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
