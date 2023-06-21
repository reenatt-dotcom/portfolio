import React from 'react';

const Experience = () => {
  const experiences = [
    
    {
      company: 'Vtiger Software',
      position: 'Web Developer Intern',
      duration: 'May 2018 - August 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam dolor eu metus luctus fringilla.',
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div className="experience-item" key={index}>
          <h3>{experience.position}</h3>
          <h4>{experience.company}</h4>
          <p className="duration">{experience.duration}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
