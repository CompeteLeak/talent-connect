import React from 'react';
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import logo from './assets/LOGO.PNG'; // Import your logo
import Footer from './components/Footer'; // Import Footer component


function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Company Logo" className="logo" />
     
      <nav className="navbar">
        <ul>
          <li><NavLink exact to="/" activeClassName="active-tab">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-tab">About</NavLink></li>
          <li><NavLink to="/services" activeClassName="active-tab">Strategy Session</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active-tab">Contact</NavLink></li>
        </ul>
      </nav>
       </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;