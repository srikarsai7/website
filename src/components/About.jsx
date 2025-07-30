import React from 'react';

const certifications = [
  {
    name: "Google Cybersecurity Certificate",
    date: "June 2025",
    img: "/certs/google.jpg"
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    date: "Completed 2023",
    img: "/certs/aws.jpg"
  },
  {
    name: "Harvard CS50 & CS50 AI",
    date: "June 2021 and April 2024",
    img: "/certs/harvard.png"
  },
  {
    name: "Jira Fundamentals Badge",
    date: "May 2024",
    img: "/certs/Jira.png"
  }
];

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-flex">
        <div className="about-main">
          <div className="about-header">
            <i className="fas fa-user profile-icon"></i>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-card">
            <p className="about-greeting">
              Hello, I'm Srikar
            </p>
            <p className="about-description">
              I'm currently a Computer Science student at Cal Poly, San Luis Obispo with a passion for full-stack development, cybersecurity and game development. My experience spans from building scalable web applications and APIs to developing a Unity-based Capture The Flag platform. I'm always eager to learn and grow as a developer. Check out my resume below to see the projects and positions I've held.
            </p>
          </div>
        </div>
        <div className="about-certifications">
          <h3 className="cert-title">Certifications</h3>
          <ul className="cert-list">
            {certifications.map(cert => (
              <li className="cert-card" key={cert.name}>
                <img className="cert-img" src={cert.img} alt={cert.name} />
                <div className="cert-info">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;