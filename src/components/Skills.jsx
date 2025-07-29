import React from 'react';

const skillsData = {
  Languages: ["Python", "Java", "C/C++", "SQL", "Dart"],
  Frameworks: ["React", "Node.js", "Django", "Flutter", "Next.js"],
  "DevOps/Etc": ["Docker", "Kubernetes", "Google Cloud", "Security & IAM", "Terraform"],
  Libraries: ["TensorFlow", "Pandas", "Scikit-Learn", "Matplotlib"],
  Other: ["Git/VCS", "Verilog", "Assembly", "Figma"]
};

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skill-category" key={category}>
            <h4>{category}</h4>
            <ul>
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="skills-footer">... always learning and expanding my tool-stack.</p>
    </section>
  );
};

export default Skills;