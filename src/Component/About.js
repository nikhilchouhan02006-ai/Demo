import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Background Floating Shapes for Attractive Look */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="about-content-wrapper">
        <div className="about-header">
          <h1>About Ans technology</h1>
          <p>Building Digital Experiences That Drive Growth</p>
        </div>

        <div className="about-container">
          <div className="about-intro">
            <div className="intro-text">
              <h2>Who We Are</h2>
              <p>
                At <strong>Ans technology</strong>, we are a team of passionate developers, designers, and digital marketers. 
                Our mission is simple: to help your business grow by building professional, high-performing websites and 
                creating powerful digital marketing strategies.
              </p>
              <p>
                Whether you are a startup looking to make your mark or an established brand wanting to scale, we craft 
                custom solutions tailored exactly to your needs. We don't just build websites; we build digital assets 
                that work for you 24/7.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Ans technology Team" 
              />
            </div>
          </div>

          <div className="what-we-do">
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-box">💻</div>
                <h3>Professional Websites</h3>
                <p>We build fast, responsive, and stunning websites that leave a lasting impression on your customers.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-box">📈</div>
                <h3>Digital Marketing</h3>
                <p>From SEO to social media, we create data-driven marketing strategies to bring traffic and sales.</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">🚀</div>
                <h3>Business Growth</h3>
                <p>Our digital solutions are designed with a single goal in mind: helping your business scale faster.</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">🎨</div>
                <h3>UI/UX Design</h3>
                <p>We craft intuitive and user-friendly interfaces that keep your audience engaged and coming back.</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-box">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div className="stat-box">
              <h3>3+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;