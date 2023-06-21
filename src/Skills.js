import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Responsive Web Design',
    'Node.js',
    'MongoDB',
    'Git',
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
