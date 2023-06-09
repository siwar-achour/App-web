import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './about.css';
import img from './taxi.jpg';

const About = () => {
  return (
    <div>
     <div className='about' style={{ height: '1000px', backgroundImage: `url(${img})`, backgroundSize: "cover"}}>
     <div className='overlay'></div>
  
     <Navbar />
      <div className='content'>
 
      <div >
 
        <h1 className='titre' style={{ margin: '0' }}>Soyez Amigo, partagez le taxi !</h1>
         <h2 style={{ color: '#ff6900'}}>Notre Mission</h2>
          <p className='space' style={{ margin: '0' }}>Amigo, une application 100% Tunisienne basée sur le concept « gagnant-gagnant » entre le chauffeur Amigo et le passager,<br />
            a été créée dans l’objectif de satisfaire les besoins des deux parties en leur permettant de :<br />
            Générer plus de revenus pour les taxis individuels ;<br />
            Faciliter la vie des utilisateurs de taxis en Tunisie.
          </p>
         
      
        

        <h1 className='titre' style={{ margin: '0' }}>Notre charte Qualité</h1>
        <div className='space' style={{ marginTop: '0' }}>
          <p style={{ margin: '0' }}>
            <h4 style={{ color: '#ff6900', fontSize: '25px', margin: '0' }}>On vous offre les meilleurs services pour vous satisfaire :</h4>
            <li style={{ margin: '0' }}>Economie : Minimiser vos tarifs de transport</li>
            <li style={{ margin: '0' }}>Rapidité : Le taxi le plus proche sera à votre disposition en un seul clic</li>
            <li style={{ margin: '0' }}>Sécurité : Toutes les courses sont suivies en temps réel</li>
          </p>
        </div>

        <h1 className='titre' style={{ margin: '0' }}>Partagez... C'est mieux !</h1>
        <div className='space'>
          <p>Amigo est l’application taxi pionnière sur le marché qui a lancé<br />
            le premier service des courses partagés en Tunisie visant les objectifs suivants :<br />
            Economiser les coûts du transport ;<br />
            Passer un moment de convivialité durant le trajet.
          </p>
        </div>
      </div>
      
      </div>
    
    </div>
    <form className='footabout' style={{ backgroundColor: 'transparent' }}>
        <Footer />
      </form>
     </div>

  );
};

export default About;
