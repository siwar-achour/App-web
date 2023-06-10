import React from 'react';
//<link rel='stylesheet' href='SignUp.css'/>
import img from './signup.jpg';
import img1 from './playstore.jpg';
import img2 from './AppStore.jpg';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import './signup.css';
const SignUp = () => {
  return (
    <div>
   
    <div style={{ height: '1000px', backgroundImage: `url(${img})`, backgroundSize: "cover"}}>
    <Navbar/>
    <div className='left_right' >
      <form  className='left'style={{ marginRight: '100px' }}>
        <h1 className='titresign'>Gagnez plus avec AMIGO</h1>
        <p className='paragraphsign' style={{ textAlign: 'left' }}>Augmentez votre chiffre d’affaires et gagnez davantage de<br/>
         clients grâce à Amigo !<br/>
Essayez dès à présent le premier service de taxi sous <br/> le concept de partage de course en Tunisie ! Lancez-vous pour <br/>une nouvelle aventure 100% gagnante.</p>
<h2 className='telechargersign'>Téléchargez Amigo Driver sur</h2>
<div className='logo'>
<a href="https://play.google.com/store/apps/details?id=com.amigo.user" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' , marginRight:'25px' }}>
          <img style={{ width: '250px', height: '100px' }} src={img1} alt="logo" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.amigo.user" target="_blank" rel="noopener noreferrer" style={{ marginTop: '35px' , marginRight:'25px' }}>
          <img style={{ width: '220px', height: '50px' }} src={img2} alt="logo" />
        </a>
        </div>
      </form>
      <form className='right' style={{ marginLeft: '100px' }}>
      <h1 className='devenez'>Devenez chauffeur Amigo</h1>
    
      <  div  className='formulaire'>
        <div className='num'style={{ marginTop: '0px' }} >
        <input className='nume11' type="text" id="1"  placeholder='1' style={{marginRight:'5px' }}/>
        <input className='liaison' type="text" id=""  placeholder='' style={{marginRight:'5px' }}/>
        <input className='nume' type="text" id="2"  placeholder='2' style={{marginRight:'5px' }}/>
        <input className='liaison' type="text" id="2"  placeholder=''style={{marginRight:'5px' }}/>
        <input className='nume' type="text" id="3"  placeholder='3' />
        </div>
    <div className='name'>
    <input className='inputsign' type="text" id="name" name="name" placeholder='Nom' style={{ marginTop: '50px' , marginRight:'5px' }} />
      <input  className='inputsign' type="text" id="prenom" name="prenom" placeholder='Prenom' style={{ marginTop: '50px' }} />
      
    </div>
     
      <input  className='inputsign'  type="email" id="email" name="email" placeholder='Email' style={{ marginTop: '30px', marginBottom: '10px'}} />

   
      <input  className='inputsign' d="phone" name="phone" placeholder='Numéro de Téléphone'  style={{ marginTop: '30px', marginBottom: '10px'}}></input>
<Link to="/SignUp1">
      <button  className='buttonsign'  type="submit"  style={{ marginTop: '35px', marginBottom: '10px' , marginLeft:'0px' }}>Suivant</button>
      </Link>
      </div>
      </form>
      
      </div>
      {/* <form className='footabout' style={{ backgroundColor: 'transparent' }}>
        {<Footer /> }
      </form> */}
  { <Footer  />  }
    </div>
   
  
    </div>
  );
};
export default SignUp;
