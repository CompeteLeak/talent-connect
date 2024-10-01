import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/LOGO.PNG'; // Import your logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src={logo} alt="Company Logo" className="footer-logo" />
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/TheTalentConnect/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="icon" />
        </a>
        <a href="https://x.com/TheTalentConn" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.instagram.com/thetalentconnect/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCEiFh7JZOWjStnyDlsuITSA" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
      </div>
      <div className="footer-text-container">
        <p className="footer-text">© 2024, The Talent Connect. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
