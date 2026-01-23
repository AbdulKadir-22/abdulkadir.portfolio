import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import profileData from '../../data/profile.json';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #222; padding: 3rem; text-align: center;
          color: #888; border-top: 8px solid var(--coc-wood-dark);
        }
      `}</style>
      <footer className="footer">
        <div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem'}}>
          <a href={profileData.githubUrl} className="nav-btn"><div className="nav-btn-inner"><Github size={24} /></div></a>
          <a href={profileData.linkedinUrl} className="nav-btn"><div className="nav-btn-inner"><Linkedin size={24} /></div></a>
        </div>
        <p className="coc-font" style={{color: '#555', fontSize: '1.2rem'}}>
          &copy; {new Date().getFullYear()} {profileData.name}. Built with Dark Elixir.
        </p>
      </footer>
    </>
  );
};

export default Footer;