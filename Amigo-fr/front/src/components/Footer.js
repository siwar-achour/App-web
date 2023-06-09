import React from 'react';
import './footer.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)'}} >
      <from style={{backgroundColor:'none'}} >
      <div className="photo" style={{ backgroundColor: 'transparent',  }}>
        <img src={logo} alt="logo" style={{ backgroundColor: 'transparent',width:'250px', paddingLeft:'0px' }}/>
      </div>
      <div className='back' >
        <p1>Partagez le trajet et le coût avec Amigo, l’unique service de Taxi en Tunisie sous le concept de partage de course avec des services de haute qualité qui répondent à vos besoins.</p1>
        <div>
        <h1>About</h1>
        <p1 >Notre mission
          Nos normes de haute qualité
          Partagez, c'est mieux!
        </p1>
        </div>
        <div>
        <h1>Contact</h1>
        <ul className="contact-list">
          <li>
            <Link to="/">+216 95 436 978</Link>
          </li>
          <li>
            <Link to="/about">contact@getwireless.com.tn</Link>
          </li>
        </ul>
        </div>
        <p>&copy; 2023 Amigo. All rights reserved.</p>
      </div>
      </from>
    </div>
  );
};

export default Footer;
