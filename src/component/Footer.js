import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css'; // On va créer ce fichier juste après


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="footer-title">ParaPharmacie</h2>
          <div>
  <img src="/assets/transparent.png" alt="Logo"  width="165" height="auto"/>  
</div>
          <p>Contact: support@mywebsite.com</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Mazine</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>  Follow Us</h3>
          <a 
            href="https://www.instagram.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <BsInstagram size={32} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
