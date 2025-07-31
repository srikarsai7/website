import React from 'react';
import CipherEffect from './CipherEffect';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
    >
      <div className="hero-content">
        <div className="code-block">
          
          <div className="code-header">
            <span></span><span></span><span></span><span>terminal-bash-80x24</span>
          </div>
          <pre>
            <code>
              <div><span className="prompt-char">$</span> srikar.currentLocation</div>
              <div><CipherEffect text='"San Luis Obispo, CA"' /></div>
              
              <div className="code-line"><span className="prompt-char">$</span> srikar.contactInfo</div>
              <div><CipherEffect text='["samirnen@calpoly.edu", "linkedin.com/in/srikar-amirneni"]' /></div>

              <div className="code-line"><span className="prompt-char">$</span> srikar.interests</div>
              <div><CipherEffect text='["Full-Stack", "CyberSec", "AI"]' /></div>

              <div className="code-line"><span className="prompt-char">$</span> srikar.education</div>
              <div><CipherEffect text='"B.S Computer Science, Cal Poly SLO"' /></div>

              <div className="code-line"><span className="prompt-char">$</span> <span className="blinking-cursor">|</span></div>
            </code>
          </pre>
        </div>
        
        <div className="glitch-wrapper">
          <h1 className="glitch-text" data-text="Srikar Amirneni">
            Srikar Amirneni
          </h1>
        </div>

        <h2><CipherEffect text="Full-Stack Intern at SmallChess | Software Engineering Consultant at Harrow Services"/></h2>
        <h2><i className="fas fa-map-marker-alt"></i> San Luis Obispo, CA</h2>
        
        <div className="hero-buttons">
          <a href="mailto:samirnen@calpoly.edu" className="btn btn-primary">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://www.linkedin.com/in/srikar-amirneni/" className="btn btn-secondary">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="Srikar,Amirneni-Resume.pdf" className="btn btn-secondary">
            <i className="fas fa-file-download"></i> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;