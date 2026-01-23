import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import profileData from '../../data/profile.json';

const Contact = ({ addToRefs, showToast }) => {
  return (
    <>
      <style>{`
        .form-input {
          width: 100%; padding: 1rem;
          border: 3px solid var(--coc-stone); border-radius: 8px;
          font-family: 'Nunito', sans-serif; font-weight: 700;
          margin-bottom: 1rem; transition: all 0.2s;
        }
        .form-input:focus {
          outline: none; border-color: var(--coc-orange);
          background: #fffbf0; transform: scale(1.01);
        }
      `}</style>
      <section id="contact" className="section reveal" ref={addToRefs}>
        <div className="wood-panel">
          <div className="stone-panel-inner">
            <div className="grid-2">
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2 style={{textAlign:'left'}}>Contact Me</h2>
                <div className="section-subtitle" style={{left: 0, transform: 'none', display: 'inline-block'}}>Builder's Hut</div>
                <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
                  Interested in collaborating on a project or discussing my startup ideas? Send a message via carrier dragon (or email).
                </p>
                
                <div style={{background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '2px dashed #ccc', marginBottom: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', cursor: 'pointer'}} 
                        onClick={() => showToast("Email Copied!")}>
                    <div className="res-icon" style={{width: '40px', height: '40px', background: '#333', display:'flex', alignItems:'center', justifyContent:'center', borderRadius: '50%', color:'white'}}><Mail size={20}/></div>
                    <div style={{fontWeight: 'bold'}}>{profileData.email}</div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer'}}
                        onClick={() => showToast("Opening LinkedIn...")}>
                    <div className="res-icon" style={{width: '40px', height: '40px', background: '#0077b5', display:'flex', alignItems:'center', justifyContent:'center', borderRadius: '50%', color:'white'}}><Linkedin size={20}/></div>
                    <div style={{fontWeight: 'bold'}}>{profileData.linkedin}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); showToast("Message Sent to Chief!"); }} 
                    style={{background: '#fff', padding: '2rem', borderRadius: '16px', border: '3px solid #ccc', boxShadow: '0 8px 0 rgba(0,0,0,0.1)'}}>
                <label className="coc-font card-heading" style={{display: 'block', marginBottom: '0.5rem'}}>Name</label>
                <input type="text" className="form-input" placeholder="Enter your name" required />
                
                <label className="coc-font card-heading" style={{display: 'block', marginBottom: '0.5rem'}}>Email</label>
                <input type="email" className="form-input" placeholder="Enter your email" required />
                
                <label className="coc-font card-heading" style={{display: 'block', marginBottom: '0.5rem'}}>Message</label>
                <textarea className="form-input" rows="4" placeholder="Your message here..." required></textarea>
                
                <button type="submit" className="btn-green" style={{width: '100%', padding:'0 0 6px 0'}}>
                   <div className="btn-green-inner" style={{padding: '0.8rem', justifyContent: 'center', fontSize: '1.2rem'}}>
                     <Send size={24} /> Send Mail
                   </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;