import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Cognitive Science',
      institution: 'UC Santa Cruz',
      duration: '2019',
    },
    {
      degree: 'Software Engineering Immersive',
      institution: 'General Assembly',
      duration: '2021 - 2022',
    },
    // Add more education entries as needed
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((entry, index) => (
        <div className="education-entry" key={index}>
          <h3>{entry.degree}</h3>
          <h4>{entry.institution}</h4>
          <p className="duration">{entry.duration}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
