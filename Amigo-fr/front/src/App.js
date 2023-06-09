import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignUp1 from './components/SignUp1';
import SignUp2 from './components/SignUp2';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
       
        <switch>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignUp1" element={<SignUp1 />} />
          <Route path="/SignUp2" element={<SignUp2 />} />
        </Routes>


        </switch>
      </div>
    </Router>
  );
}

export default App;
