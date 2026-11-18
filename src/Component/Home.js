import React, { useState, useEffect } from 'react';
import './Home.css';
import About from './About';       // ✅ Check: About.js export default hona chahiye
import Services from './Services'; // ✅ Check: Services.js export default hona chahiye

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
    title: 'Welcome to Ans technology',
    subtitle: 'Innovative Digital Solutions & Web Development Services'
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    title: 'Empowering Your Business',
    subtitle: 'We craft high-performing web apps and custom software solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    title: 'Digital Marketing & Growth',
    subtitle: 'Scale your brand presence with modern technologies'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* 1. Carousel Section */}
      <div className="carousel" id="home">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-overlay">
              <div className="carousel-content">
                <span className="badge">Ans technology</span>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <a href="#contact" className="cta-btn">Get Started</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. About Section */}
      <div id="about">
        <About />
      </div>

      {/* 3. Services Section */}
      <div id="services">
        <Services />
      </div>

      {/* 4. Contact Section */}
      <section id="contact" className="section light-bg">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Ready to transform your business? Get in touch with our team today at Ans technology.</p>
          <div className="contact-box">
            <p>Email: support@anstechnology.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;