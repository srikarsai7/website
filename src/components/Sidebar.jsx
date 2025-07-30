import React from 'react';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <a href="#home" className="nav-link"><i className="fas fa-home"></i><span>Home</span></a>
        <a href="#about" className="nav-link"><i className="fas fa-user"></i><span>About Me</span></a>
        <a href="#skills" className="nav-link"><i className="fas fa-cogs"></i><span>Skills</span></a>
        <a href="#experience" className="nav-link"><i className="fas fa-briefcase"></i><span>Experience</span></a>
        <a href="#projects" className="nav-link"><i className="fas fa-project-diagram"></i><span>Projects</span></a>
        <a href="#resume" className="nav-link"><i className="fas fa-file-alt"></i><span>Resume</span></a>
      </div>
      <div className="sidebar-bottom">
        <a href="https://github.com/srikarsai7" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/srikar-amirneni/" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:samirnen@calpoly.edu" className="nav-link"><i className="fas fa-envelope"></i></a>
      </div>
    </nav>
  );
};

export default Sidebar;