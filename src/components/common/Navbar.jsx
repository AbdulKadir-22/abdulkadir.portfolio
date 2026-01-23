import React, { useState, useEffect } from 'react';
import {
  User, Hammer, MapPin, Zap, Mail, Book,
  Menu, X, Volume2, VolumeX, Clock
} from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';
import { useUpgradeTimer } from '../../hooks/useUpgradeTimer';

const Navbar = ({ activeTab, setActiveTab, showToast }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const daysToUpgrade = useUpgradeTimer();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => scrollToSection(id, setActiveTab, setMenuOpen)}
      className={`nav-btn ${activeTab === id ? 'active' : ''}`}
    >
      <div className="nav-btn-inner">
        {Icon && <Icon size={18} className="nav-icon" />}
        <span>{label}</span>
      </div>
    </button>
  );

  return (
    <>
      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 0.5rem 1rem; transition: all 0.3s ease;
          display: flex; justify-content: space-between; align-items: center;
          height: auto;
          min-height: 64px;
        }
        .navbar.scrolled {
          background: rgba(40, 40, 40, 0.95); backdrop-filter: blur(5px);
          border-bottom: 4px solid var(--coc-wood-dark);
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }
        .brand {
          font-size: 1.8rem; color: var(--coc-yellow);
          transform: rotate(-2deg); text-shadow: 2px 2px 0 #000;
        }
        .resources {
            display: flex; gap: 15px; margin-right: 1rem;
            background: rgba(0,0,0,0.4); padding: 6px 15px;
            border-radius: 30px; border: 2px solid #555; align-items: center;
        }
        .resource-pill { display: flex; align-items: center; gap: 8px; color: white; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 0.9rem; text-shadow: 1px 1px 0 #000; }
        .builder-timer { display: flex; flex-direction: column; width: 120px; }
        .timer-bar { width: 100%; height: 8px; background: #333; border-radius: 4px; border: 1px solid #fff; overflow: hidden; margin-top: 2px; }
        .timer-fill { height: 100%; background: linear-gradient(90deg, #99e63d, #6db822); width: 100%; animation: pulse 2s infinite; }
        .nav-links { display: flex; gap: 0.8rem; }
        .mobile-menu-btn { display: none; background: none; border: none; color: white; cursor: pointer; }

        @media (max-width: 768px) {
            .navbar {
              padding: 0.5rem 0.75rem;
            }
            .brand {
              font-size: 1.4rem;
            }
              
            .nav-links {
                position: fixed; top: 80px; left: 0; right: 0;
                background: rgba(0,0,0,0.95); flex-direction: column; padding: 2rem;
                clip-path: circle(0% at 100% 0); transition: clip-path 0.4s ease-in-out;
                border-bottom: 4px solid var(--coc-wood-dark);
            }
            .nav-links.open { clip-path: circle(150% at 100% 0); }
            .mobile-menu-btn { display: block; }
            .resources { display: none; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="brand coc-font">ABDULKADIR</div>
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              showToast(soundEnabled ? "Audio Muted" : "Audio Enabled");
            }}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>

        <div className="resources">
          <div className="resource-pill" style={{ marginLeft: '10px', flexDirection: 'column', gap: '2px', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '0.6rem', color: '#ccc', textTransform: 'uppercase', letterSpacing: '1px' }}>Next Upgrade</div>
            <div className="builder-timer">
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.7rem', fontWeight: 'bold' }}>
                <span>{daysToUpgrade} Days</span>
                <Clock size={10} color="#fff" />
              </div>
              <div className="timer-bar">
                <div className="timer-fill"></div>
              </div>
            </div>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavButton id="home" label="Base" icon={MapPin} />
          <NavButton id="about" label="About" icon={User} />
          <NavButton id="projects" label="Work" icon={Hammer} />
          <NavButton id="blogs" label="Blogs" icon={Book} />
          <NavButton id="skills" label="Tech" icon={Zap} />
          <NavButton id="contact" label="Contact" icon={Mail} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;