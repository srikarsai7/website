import React from 'react';

const Hero = () => {
  const codeString = `> srikar.currentLocation
<span class="string">"San Luis Obispo, CA"</span>

> srikar.contactInfo
<span class="string">["samirnen@calpoly.edu", "https://www.linkedin.com/in/srikar-amirnen/"]</span>

> srikar.interests
<span class="string">["Full-Stack", "CyberSec", "AI"]</span>

> srikar.education
<span class="string">"B.S Computer Engineering, Cal Poly SLO"</span>

> <span class="blinking-cursor">|</span>`;

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
            <code dangerouslySetInnerHTML={{ __html: codeString }} />
          </pre>
        </div>
        <h1>Srikar Amirneni</h1>
        <h2>Full-Stack Intern at SmallChess | Software Engineering Consultant at Harrow Services</h2>
        <h2><i className="fas fa-map-marker-alt"></i> San Luis Obispo, CA</h2>
        <div className="hero-buttons">
          <a href="mailto:samirnen@calpoly.edu" className="btn btn-primary">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://www.linkedin.com/in/srikar-amirneni/" className="btn btn-secondary">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="Srikar,Amirneni-Resume.pdf" download="Srikar_Amirneni_Resume.pdf" className="btn btn-secondary">
            <i className="fas fa-file-download"></i> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;