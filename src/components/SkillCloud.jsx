import React from 'react';
import { TagSphere } from 'react-tag-sphere';

const PALETTE = ['#84cc16', '#38bdf8', '#c084fc', '#facc15', '#c9d1d9'];

const SkillCloud = ({ skills }) => {
  const coloredTags = skills.map((name, i) => (
    <span
      key={name}
      style={{
        color: PALETTE[i % PALETTE.length],
        fontWeight: 600,
        fontFamily: 'var(--font-secondary)',
      }}
    >
      {name}
    </span>
  ));

  return (
    <div className="skill-cloud-container">
      <TagSphere
        tags={coloredTags}
        radius={250}
        fullWidth
        fullHeight
        grayscale={false}
        blur={false}
      />
    </div>
  );
};

export default SkillCloud;
