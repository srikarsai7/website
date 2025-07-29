import React from 'react';

const certifications = [
  "Google Cybersecurity Essentials",
  "IBM Cloud Foundations",
  "Splunk Core",
  "Darktrace Certified (SME)",
  "Augmented Reality & Cyber Foundations"
];

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <h3>Hello, I'm Srikar</h3>
          <p>I'm a third-year Computer Engineering student at Cal Poly, San Luis Obispo with a fervent interest in full-stack development and exploring the intersectionality of cybersecurity.</p>
          <p>Through projects ranging from developing robust web applications to delving into the intricacies of chess AI, I've cultivated a diverse skill set. I'm always eager to learn and grow as a developer, find my resume below to see my work.</p>
          <p>Fun Fact: I've memorized the first 1000 digits of Pi.</p>
        </div>
        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>
                <img src="https://d35aaqx5ub95lt.cloudfront.net/images/path/google-certified-professional-cloud-architect.svg" alt="Cert Logo" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;