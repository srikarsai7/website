import React from 'react';
import { FaFilePdf, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

// Data structured from your resume PDF
const resumeData = {
  name: "Srikar Amirneni",
  title: "Full-Stack Developer • Cybersecurity Enthusiast • AI Engineer",
  contact: {
  email: "samirnen@calpoly.edu",
  location: "San Luis Obispo, CA",
  github: "github.com/srikar-amirneni",
  linkedin: "linkedin.com/in/srikar-amirneni"
  },
  education: {
  university: "California Polytechnic State University, San Luis Obispo",
  degree: "Bachelor of Science in Computer Science",
  dates: "Expected Jun. 2026",
  },
  experience: [
    {
      company: "Harrow Services",
      role: "Software Engineering Consultant",
      dates: "Apr. 2025 - Present",
      description: [
        "Designed and led end-to-end development for client systems, currently managing website and app launch for a baseball coaching company to increase SEO performance by 40% and enable real-time player tracking.",
        "Developed scalable infrastructure and provided technical strategy to support new revenue streams for clients."
      ]
    },
    {
      company: "SmallChess",
      role: "Full-Stack Developer Intern",
      dates: "Mar. 2025 - Present",
      description: [
        "Modernized a legacy chess app using React Native with Expo, improving performance and achieving 20% faster load times.",
        "Built offline-first backend APIs to support 500+ annotated games, improving data access and reducing fetch latency by 35%.",
        "Developing a RAG (Retrieval-Augmented Generation) system to deliver move-by-move feedback in a \"guess-the-move\" format, enhancing player training and engagement."
      ]
    },
    {
        company: "MindSprout",
        role: "Software Developer",
        dates: "Jan. 2025 - May 2025",
        description: [
            "Developed React-based UI components and mini-games that improved user engagement by 30% in a behavioral therapy-driven app.",
            "Collaborated with psychologists to align tech features with therapeutic outcomes, contributing to measurable relapse reduction."
        ]
    },
    {
        company: "Cal Poly Cybersecurity Institute",
        role: "Unity Developer",
        dates: "Oct. 2023 - May 2025",
        description: [
            "Built Unity-based CTF platform for 500+ participants during national cybersecurity event; increased gameplay FPS by 3.5x.",
            "Resolved 40+ live support requests and mentored teams during event execution."
        ]
    }
  ],
  certifications: [
    "Google Cybersecurity Certificate",
    "AWS Cloud Practitioner Essentials",
    "Harvard CS50 and CS50 AI",
    "Jira Fundamentals Badge",
    "PentesterLab Recon Badge",
    "Cyber Awareness Training - Digital Literacy and Cyber Basics"
  ]
};

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-header">
        <FaFilePdf className="section-icon" />
        <h2>Resume</h2>
      </div>

      <div className="resume-actions">
        <a href="/se (1).pdf" className="btn" download>
          Download Resume (PDF)
        </a>
      </div>

      <div className="resume-preview">
        {/* --- Header --- */}
        <header className="resume-header">
          <h1>{resumeData.name}</h1>
          <p className="resume-title">{resumeData.title}</p>
          <div className="resume-contact-info">
            <a href={`mailto:${resumeData.contact.email}`}><FaEnvelope /> {resumeData.contact.email}</a>
            <span><FaMapMarkerAlt /> {resumeData.contact.location}</span>
            <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer"><FaGithub /> {resumeData.contact.github}</a>
            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer"><FaLinkedin /> {resumeData.contact.linkedin}</a>
          </div>
        </header>

        {/* --- Education --- */}
        <div className="resume-section">
          <h3 className="resume-section-title"><FaGraduationCap /> Education</h3>
          <div className="resume-item">
            <div className="resume-item-header">
              <h4>{resumeData.education.university}</h4>
              <span>{resumeData.education.dates}</span>
            </div>
            <p>{resumeData.education.degree}</p>
          </div>
        </div>

        {/* --- Experience --- */}
        <div className="resume-section">
          <h3 className="resume-section-title"><FaBriefcase /> Experience</h3>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="resume-item">
              <div className="resume-item-header">
                <h4>{job.company} - <em>{job.role}</em></h4>
                <span>{job.dates}</span>
              </div>
              <ul>
                {job.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Certifications --- */}
        <div className="resume-section">
          <h3 className="resume-section-title"><FaAward /> Certifications</h3>
          <ul>
            {resumeData.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;