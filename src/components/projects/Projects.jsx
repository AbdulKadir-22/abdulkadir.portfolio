import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json';

const Projects = ({ addToRefs }) => {
  return (
    <section id="projects" className="section reveal" ref={addToRefs}>
      <h2 style={{textShadow: '3px 3px 0 #3d2208', marginBottom: '0.5rem'}}>Projects</h2>
      <div className="section-subtitle">Army Camps</div>
      <div className="grid-2">
        {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;