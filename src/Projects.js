import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'project1.jpg',
      demoUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'project2.jpg',
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-links">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
