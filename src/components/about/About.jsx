import React from 'react';
import { Trophy, Star, Book, Database } from 'lucide-react';
import profileData from '../../data/profile.json';

const About = ({ addToRefs }) => {
  return (
    <>
      <style>{`
        h2 {
            font-size: 3rem; margin-bottom: 0.5rem; text-align: center;
            color: var(--coc-yellow); filter: drop-shadow(0px 5px 0px rgba(0,0,0,0.5));
            transform: rotate(-1deg);
        }
        .info-card {
            background: #fff; border: 2px solid #ccc; border-radius: 12px;
            padding: 1.5rem; transition: transform 0.2s; box-shadow: 0 6px 0 #ccc;
        }
        .info-card:hover { transform: translateY(-5px); }
        .res-icon {
            width: 20px; height: 20px; border-radius: 50%; border: 1px solid #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .gold-icon { background: linear-gradient(135deg, #ffd700, #b8860b); }
        .elixir-icon { background: linear-gradient(135deg, #d32ce6, #800080); }
      `}</style>
      <section id="about" className="section reveal" ref={addToRefs}>
        <div className="wood-panel">
          <div className="stone-panel-inner">
            <div className="grid-2">
              <div>
                <h2>Profile</h2>
                <div className="section-subtitle">Chief's Stats</div>
                <p style={{fontSize: '1.2rem', color: '#555', marginBottom: '2rem', lineHeight: '1.8'}}>
                  {profileData.bio}
                </p>

                <div className="info-card" style={{background: '#fffbf0', borderColor: '#d3b56a'}}>
                  <div style={{borderBottom: '2px dashed #d3b56a', paddingBottom: '0.5rem', marginBottom: '1rem'}}>
                    <h3 className="coc-font card-heading" style={{fontSize: '1.4rem'}}>Current Status</h3>
                  </div>
                  <div className="grid-2" style={{gap: '1rem'}}>
                    <div>
                      <div style={{fontSize: '0.8rem', color: '#888', fontWeight: 'bold'}}>ROLE</div>
                      <div style={{color: '#333', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <Trophy size={16} color="#d38b08"/> Founder
                      </div>
                    </div>
                    <div>
                      <div style={{fontSize: '0.8rem', color: '#888', fontWeight: 'bold'}}>FOCUS</div>
                      <div style={{color: '#333', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <Star size={16} color="#d38b08"/> Flutter
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div className="info-card">
                   <div style={{display:'flex', justifyContent:'space-between', marginBottom: '1rem'}}>
                      <div className="res-icon gold-icon" style={{width:'40px', height:'40px', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center'}}><Book size={20} color="#fff"/></div>
                      <div style={{textAlign: 'right'}}>
                        <div className="coc-font card-heading">{profileData.townHallTitle} {profileData.townHallLevel}</div>
                        <div style={{fontSize: '0.8rem', color: '#666'}}>Education</div>
                      </div>
                   </div>
                   <h4 style={{fontWeight: '800', color: '#333'}}>{profileData.townHallSubtitle}</h4>
                   <div style={{color: '#666', fontSize: '0.9rem'}}>{profileData.townHallDesc}</div>
                </div>

                <div className="info-card">
                   <div style={{display:'flex', justifyContent:'space-between', marginBottom: '1rem'}}>
                      <div className="res-icon elixir-icon" style={{width:'40px', height:'40px', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center'}}><Database size={20} color="#fff"/></div>
                      <div style={{textAlign: 'right'}}>
                        <div className="coc-font card-heading">{profileData.experienceLevelTitle}</div>
                        <div style={{fontSize: '0.8rem', color: '#666'}}>{profileData.experienceLevelSubtitle}</div>
                      </div>
                   </div>
                   <h4 style={{fontWeight: '800', color: '#333'}}>{profileData.experienceLevelRole}</h4>
                   <div style={{color: '#666', fontSize: '0.9rem'}}>{profileData.experienceLevelDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;