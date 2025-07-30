import React from 'react';
// Import new icons for the timeline
import { FaBriefcase, FaCode, FaChess, FaBrain } from 'react-icons/fa';
import { SiUnity } from 'react-icons/si';


// Experience data now includes a relevant 'icon' for each position
const experienceData = [
  {
    company: "Harrow Services",
    role: "Software Engineering Consultant", // [cite: 17]
    date: "Apr 2025 – Present", // [cite: 18, 19]
    year: "Current",
    desc: "Designed and led end-to-end development for client systems, currently managing a website and app launch for a baseball coaching company. Developed scalable infrastructure and provided technical strategy to support new revenue streams for clients.",
    tags: ["React", "Node.js", "AWS", "Security"],
    icon: <FaCode />
  },
  {
    company: "SmallChess",
    role: "Full-Stack Developer Intern", // [cite: 23]
    date: "Mar 2025 – Present", // [cite: 24]
    year: "Current",
    desc: "Modernized a legacy chess app using React Native and Expo, improving performance. Built offline-first backend APIs to support 500+ annotated games and developing a RAG system for move-by-move feedback.",
    tags: ["React Native", "Expo", "RAG", "AI/ML"],
    icon: <FaChess />
  },
  {
    company: "MindSprout",
    role: "Software Developer", // [cite: 30]
    date: "Jan 2025 – May 2025", // [cite: 31]
    year: "2025",
    desc: "Developed React-based UI components and mini-games that improved user engagement by 30% in a behavioral therapy-driven app. [cite: 33] Collaborated with psychologists to align tech features with therapeutic outcomes.",
    tags: ["JavaScript", "React", "Firebase", "UX/UI"],
    icon: <FaBrain />
  },
  {
    company: "Cal Poly Cybersecurity Institute",
    role: "Unity Developer", // [cite: 36]
    date: "Oct 2023 – May 2025", // [cite: 37]
    year: "2025",
    desc: "Built a Unity-based CTF platform for 500+ participants during a national cybersecurity event, increasing gameplay FPS by 3.5x. [cite: 38] Resolved 40+ live support requests and mentored teams during the event.",
    tags: ["Unity", "C#", "Cybersecurity", "Networking"],
    icon: <SiUnity />
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-header">
        <FaBriefcase className="section-icon" />
        <h2>Experience</h2>
      </div>
      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            {/* The icon is now a real element, not a CSS pseudo-element */}
            <div className="timeline-icon">
              {item.icon}
            </div>
            <div className="timeline-content">
              <span className="timeline-badge" style={{ background: item.year === 'Current' ? 'var(--primary-color)' : '#4a5568' }}>
                {item.year}
              </span>
              <h3>{item.company}</h3>
              <div className="role-date">
                <h4>{item.role}</h4>
                <span>{item.date}</span>
              </div>
              <p>{item.desc}</p>
              <div className="timeline-tags">
                {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;