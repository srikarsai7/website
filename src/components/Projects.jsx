import React from 'react';
import { FaFolderOpen, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "Obscure or Not",
    imgSrc: "images/obscureornot.png",
    description:
      "A 'Higher or Lower' style game where players guess which topic is searched more on Google Trends. Built with Next.js, it fetches data from the Unsplash and Google Trends APIs.",
    tags: ["Next.js", "React", "Google Trends API", "Unsplash API"],
    codeLink: "https://github.com/srikarsai7/obscureornot",
    demoLink: "https://obscureornot.vercel.app/"
  },
  {
    title: "Escape from the Labyrinth",
    imgSrc: "images/escape.png",
    description:
      "A 2D maze game where the player must find the exit before being caught by a Minotaur. Features a pathfinding AI for the enemy, dynamic maze generation, and audio cues.",
    tags: ["React", "Next.js", "Canvas", "TypeScript", "Game Dev"],
    codeLink: "https://github.com/srikarsai7/maze-game-2",
    demoLink: "https://maze-game-xi.vercel.app/"
  },
  {
    title: "SpreadIt",
    imgSrc: "images/SpreadIt.png",
    description:
      "Led a team of four in building a gamified social platform for sandwich ratings using React and PostgreSQL. Reduced page load time by 20% and ensured the backend handled over 1,000 daily interactions with role-based access control.",
    tags: ["Agile", "React", "PostgreSQL"],
    codeLink: "#",
    demoLink: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header">
        <FaFolderOpen className="section-icon" />
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-image">
              <img src={project.imgSrc} alt={`${project.title} screenshot`} />
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-footer">
              {project.codeLink !== "#" && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Code
                </a>)}
              {project.demoLink !== "#" && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;