import React from 'react';
// Import necessary icons
import {
  SiPython, SiCplusplus, SiJavascript, SiHtml5, SiLua, SiLinux, SiGit, 
  SiReact, SiNextdotjs, SiNodedotjs, SiJupyter, SiUnity, SiPandas, SiNumpy, SiLangchain
} from 'react-icons/si';
import { 
  FaDatabase, FaShieldAlt, FaNetworkWired, FaSearch, FaBook, 
  FaGamepad, FaLock, FaKey, FaLeaf , FaJava
} from 'react-icons/fa';
import { VscCode } from "react-icons/vsc";

// Your original skills data, now mapped to the new structure with icons
const skillsData = {
  Languages: [
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "C/C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "SQL", icon: <FaDatabase color="#4479A1" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "HTML/CSS", icon: <SiHtml5 color="#E34F26" /> },
    { name: "Lua", icon: <SiLua color="#2C2D72" /> },
  ],
  Security: [
    { name: "Information Security", icon: <FaShieldAlt color="#E6292D" /> },
    { name: "Network Security", icon: <FaNetworkWired color="#5DADE2" /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "SIEM Tools", icon: <FaSearch color="#00A4EF" /> },
    { name: "Intrusion Detection", icon: <FaShieldAlt color="#F39C12" /> },
    { name: "NIST Framework", icon: <FaBook color="#D2B48C" /> },
  ],
  Frameworks: [
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
    { name: "Unity", icon: <SiUnity /> },
    { name: "Love2D", icon: <FaGamepad color="#E8ADAA" /> },
  ],
  Libraries: [
    { name: "pandas", icon: <SiPandas color="#150458" /> },
    { name: "NumPy", icon: <SiNumpy color="#013243" /> },
    { name: "PyCryptodome", icon: <FaLock color="#C3C3C3" /> },
    { name: "AES", icon: <FaKey color="#F1C40F" /> },
    { name: "LangChain", icon: <SiLangchain color="#F7DF1E" /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-header">
        <VscCode className="skills-title-icon" />
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="learning-note-container">
        <div className="learning-note">
          <FaLeaf />
          <span>… always learning and expanding my tool-stack.</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;