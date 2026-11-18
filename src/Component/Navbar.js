import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png'; // ✅ Fixed Path: Logo is inside Component folder

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div 
          className="navbar-logo" 
          onClick={() => handleNavClick('home')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          {/* ✅ Yahan src={logo} use karein */}
          <img 
            src={logo} 
            alt="Ans technology Logo" 
            className="logo-img" 
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a1a' }}>
            Ans technology
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button 
            className="nav-link" 
            onClick={() => handleNavClick('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', color: '#333' }}
          >
            Home
          </button>
          
          <button 
            className="nav-link" 
            onClick={() => handleNavClick('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', color: '#333' }}
          >
            About
          </button>
          
          <button 
            className="nav-link" 
            onClick={() => handleNavClick('services')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', color: '#333' }}
          >
            Services
          </button>
          
          <button 
            className="nav-link" 
            onClick={() => handleNavClick('contact')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', color: '#333' }}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;