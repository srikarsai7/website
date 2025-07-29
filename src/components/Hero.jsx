import React from 'react';

const Hero = () => {
  const codeString = `> srikanth.currentLocation
<span class="string">"San Luis Obispo, CA"</span>

> srikanth.contactInfo
<span class="string">["srikanth.amirneni@gmail.com", "LinkedIn", "GitHub"]</span>

> srikanth.interests
<span class="string">["Full-Stack", "CyberSec", "AI", "Sponsorship"]</span>

> srikanth.resume
<span class="string">"srikanth-amirneni.pdf"</span>

> srikanth.education
<span class="string">"B.S Computer Engineering, Cal Poly SLO"</span>
|`;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="code-block">
          <div className="code-header">
            <span></span><span></span><span></span>
          </div>
          <pre>
            <code dangerouslySetInnerHTML={{ __html: codeString }} />
          </pre>
        </div>
        <h1>Srikar Amirneni</h1>
        <h2>Full-Stack Developer + Cybersecurity Enthusiast | Chess AI Engineer</h2>
        <div className="hero-buttons">
          <a href="#" className="btn btn-primary"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="#" className="btn btn-secondary"><i className="fas fa-file-download"></i> Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;