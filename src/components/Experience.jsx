import React from 'react';

const experienceData = [
  {
    company: "Darktrace",
    role: "Cyber Security Intern",
    desc: "Developed and deployed new platform-wide features using Python, React, and various cyber security tools.",
    date: "JUNE 2023 - SEP 2023"
  },
  {
    company: "TeachCS",
    role: "Software Engineer Intern",
    desc: "Designed and developed RESTful APIs for student and teacher clients on the platform. Collaborated with UI/UX designers.",
    date: "JAN 2023 - MAY 2023"
  },
   {
    company: "TeachCS",
    role: "Lead Curriculum Developer",
    desc: "Developed interactive lessons and applications for our Data Structures and Algorithms curriculum.",
    date: "SEP 2022 - JAN 2023"
  },
  {
    company: "Cal Poly Cybersecurity",
    role: "Offensive Security Researcher",
    desc: "Reverse-engineered malware and performed penetration testing on various systems.",
    date: "SEP 2022 - PRESENT"
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{item.company}</h3>
              <p className="timeline-sub">{item.role}</p>
              <p>{item.desc}</p>
              <span className="timeline-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;