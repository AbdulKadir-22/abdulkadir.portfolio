import React from 'react';
import { Smartphone, Book, Layout, ExternalLink, Github } from 'lucide-react';

const IconMap = {
  Smartphone,
  Book,
  Layout
};

const ProjectCard = ({ project }) => {
  const Icon = IconMap[project.iconKey] || Layout;

  return (
    <div className="wood-panel" style={{padding: '0.5rem', background: '#333', border: '4px solid #000'}}>
       <div style={{background: '#fff', borderRadius: '14px', overflow: 'hidden', height: '100%'}}>
          <div style={{height: '180px', background: project.iconBgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
            <Icon size={64} color={project.iconColor} />
            <div style={{position: 'absolute', top: 10, right: 10, background: '#000', color: '#ffd700', padding: '2px 8px', borderRadius: '4px', fontFamily: 'Luckiest Guy', border: '1px solid #ffd700'}}>
                {project.category}
            </div>
          </div>
          <div style={{padding: '1.5rem'}}>
            <h3 className="coc-font card-heading" style={{fontSize: '1.8rem'}}>{project.title}</h3>
            <div style={{color: '#888', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem'}}>{project.subtitle}</div>
            <p style={{marginBottom: '1.5rem', color: '#555'}}>{project.description}</p>
            <div style={{marginBottom: '1.5rem'}}>
              {project.tags.map(t => (
                <span key={t} className="skill-pill tech" style={{
                    display: 'inline-block', background: '#4a9eff', color: 'white', padding: '6px 14px', borderRadius: '20px', 
                    fontWeight: '800', margin: '4px', border: '2px solid #0056b3', boxShadow: '0 3px 0 #0056b3', cursor: 'default'
                }}>
                    {t}
                </span>
              ))}
            </div>
            
            <div style={{display: 'flex', gap: '0.5rem'}}>
              <button className="btn-green" style={{flex: 1, padding: '0 0 4px 0'}}>
                 <div className="btn-green-inner" style={{padding: '0.5rem', fontSize:'1rem', justifyContent: 'center'}}><ExternalLink size={18} /> Visit</div>
              </button>
              <button className="nav-btn" style={{flex: 1}}>
                <div className="nav-btn-inner" style={{justifyContent: 'center'}}><Github size={18} /> Code</div>
              </button>
            </div>
          </div>
       </div>
    </div>
  );
};

export default ProjectCard;