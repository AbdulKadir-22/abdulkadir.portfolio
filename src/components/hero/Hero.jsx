import React from 'react';
import profileData from '../../data/profile.json';
import { scrollToSection } from '../../utils/scrollToSection';

const Hero = ({ showToast }) => {
  return (
    <>
      <style>{`
        .hero {
          text-align: center; padding-top: 10rem; min-height: 90vh;
          display: flex; flex-direction: column; align-items: center;
        }
        .avatar-container { position: relative; transition: transform 0.3s; }
        .avatar-container:hover { transform: scale(1.05); }
        .avatar-frame {
          width: 200px; height: 200px; background: #333;
          border: 8px solid var(--coc-wood-mid); border-radius: 20px;
          overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
        }
        .avatar-lvl {
          position: absolute; top: -15px; left: -15px;
          background: linear-gradient(135deg, #4a9eff, #0056b3);
          width: 50px; height: 50px;
          display: flex; align-items: center; justify-content: center;
          color: white; font-family: 'Luckiest Guy'; font-size: 1.2rem;
          border: 3px solid #fff; border-radius: 50%;
          z-index: 10; box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        .hero-title { font-size: 4rem; margin: 1rem 0 0.5rem; }
        .hero-subtitle { font-size: 1.8rem; color: var(--coc-yellow); margin-bottom: 2rem; }
        
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1rem;
          }

          .hero-title {
            font-size: clamp(1.8rem, 6vw, 2.4rem);
          }
        }

      `}</style>
      <section id="home" className="hero">
        <div className="avatar-container">
          <div className="avatar-lvl">{profileData.level}</div>
          <div className="avatar-frame">
            <span style={{ fontSize: '4rem', color: '#fff', fontFamily: 'Luckiest Guy' }}>{profileData.initials}</span>
          </div>
        </div>

        <h1 className="hero-title">{profileData.name}</h1>
        <h2 className="hero-subtitle">{profileData.role}</h2>

        <button
          onClick={() => {
            scrollToSection('projects');
            showToast("Troops Deployed!");
          }}
          className="btn-green"
        >
          <div className="btn-green-inner">
            <span>VIEW WORK</span>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>(Attack!)</span>
          </div>
        </button>
      </section>
    </>
  );
};

export default Hero;