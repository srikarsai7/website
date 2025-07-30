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
                I’m a Computer Science student at Cal Poly, San Luis Obispo, with a passion for building useful, engaging, and scalable tech. I’ve worked on everything from modernizing a chess app and developing AI-powered feedback systems to creating a Unity-based Capture The Flag game for a national cybersecurity event. I enjoy solving real problems—whether it’s improving load times, helping users stay engaged, or launching tools that actually make a difference. I'm always looking to learn, grow, and contribute to meaningful projects. Feel free to check out my resume to see what I’ve been up to!            </p>
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