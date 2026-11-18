import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      icon: '💻',
      title: 'Web Development',
      desc: 'Custom, responsive, and high-speed websites built using React, Node.js, and modern frameworks to elevate your brand.',
      features: ['E-Commerce Stores', 'Custom Web Apps', 'API Integration']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      desc: 'Clean, light-themed, and user-centric interfaces crafted for seamless experiences that keep your customers engaged.',
      features: ['Wireframing', 'Prototyping', 'Mobile-First Design']
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      desc: 'Strategies designed to enhance your online footprint, drive targeted traffic, and boost your sales rapidly.',
      features: ['SEO Optimization', 'Social Media Ads', 'Content Strategy']
    },
    {
      icon: '📱',
      title: 'App Development',
      desc: 'High-performing mobile applications for both iOS and Android platforms using React Native and Flutter.',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      desc: 'Secure and scalable cloud infrastructure setup to ensure your business runs smoothly without any downtime.',
      features: ['AWS & Azure', 'Data Backup', 'Server Management']
    },
    {
      icon: '🛡️',
      title: 'Cyber Security',
      desc: 'Protect your digital assets with our advanced security protocols, regular audits, and threat monitoring.',
      features: ['Vulnerability Testing', 'Firewall Setup', 'Security Audits']
    }
  ];

  return (
    <div className="services-page">
      {/* Background Shapes */}
      <div className="bg-shape shape-s1"></div>
      <div className="bg-shape shape-s2"></div>

      <div className="services-content">
        {/* Header Section */}
        <div className="services-header">
          <h1>Our <span>Services</span></h1>
          <p>We provide end-to-end digital solutions to help your business grow faster and smarter.</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid-container">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}><span>✓</span> {feature}</li>
                ))}
              </ul>
              
              <button className="service-btn">Learn More →</button>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <h2>Ready to start your next project?</h2>
          <p>Let's build something amazing together. Get in touch with our team today.</p>
          <button className="cta-button">Contact Us Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;