import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Ans technology<span>.</span></h2>
            <p>Empowering your business with innovative digital solutions, high-performing websites, and result-driven marketing strategies.</p>
          </div>

          <div className="footer-newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <p>Get the latest updates, tips, and offers directly in your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="footer-links">
          <div className="link-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">App Development</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📍 123 Tech Street, Digital City</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@anstechnology.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ans technology. All rights reserved.</p>
          
          <div className="social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LN</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer; // ✅ Confirm export