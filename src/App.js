import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer'; 
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    
    // Scroll to sections on click
    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (page === 'services') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else if (page === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar onNavigate={navigateTo} />
      
      {/* Home component jisme Carousel, About, Services sab hai */}
      <Home />
      
      {/* Footer sabse niche */}
      <Footer />
    </div>
  );
}

export default App; // ✅ Error fixed