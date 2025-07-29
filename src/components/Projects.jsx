import React from 'react';

const projectsData = [
  {
    title: "Splunk",
    imgSrc: "https://via.placeholder.com/400x250/1a1a1a/0f0?text=Splunk",
    description: "Created a chess AI using the minimax algorithm with alpha-beta pruning. Designed a full-stack application to visualize game trees.",
    tags: ["Python", "React", "Splunk"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    title: "Chess AI",
    imgSrc: "https://via.placeholder.com/400x250/1a1a1a/0f0?text=Chess+AI",
    description: "Engineered a high-performance chess AI that explores thousands of moves per second to find the optimal path.",
    tags: ["C++", "Data Structures", "Algorithms"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    title: "CTF Writeups",
    imgSrc: "https://via.placeholder.com/400x250/1a1a1a/0f0?text=CTF+Writeups",
    description: "A collection of my writeups from various Capture The Flag (CTF) competitions, detailing my approach to solving cybersecurity challenges.",
    tags: ["Cybersec", "Pwntools", "Ghidra"],
    codeLink: "#",
    demoLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgSrc} alt={`${project.title} Project`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="project-links">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;