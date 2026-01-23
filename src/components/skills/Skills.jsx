import React from 'react';
import skillsData from '../../data/skills.json';

const SkillPill = ({ name, type }) => {
    let style = {
        display: 'inline-block', color: 'white', padding: '6px 14px', borderRadius: '20px', 
        fontWeight: '800', margin: '4px', cursor: 'default', transition: 'transform 0.1s'
    };

    if (type === 'tech') {
        style = { ...style, background: '#4a9eff', border: '2px solid #0056b3', boxShadow: '0 3px 0 #0056b3' };
    } else if (type === 'tool') {
        style = { ...style, background: 'var(--coc-orange)', border: '2px solid #b36200', boxShadow: '0 3px 0 #b36200' };
    } else {
        style = { ...style, background: 'var(--coc-elixir)', border: '2px solid #800080', boxShadow: '0 3px 0 #800080' };
    }

    return <span style={style} className="skill-pill">{name}</span>;
};

const Skills = ({ addToRefs }) => {
  return (
    <section id="skills" className="section reveal" ref={addToRefs}>
      <div className="wood-panel">
        <div className="stone-panel-inner" style={{background: '#222', borderColor: '#000'}}>
          <h2 style={{color: '#d32ce6', textShadow: 'none'}}>Skills</h2>
          <div className="section-subtitle">The Laboratory</div>
          
          <div className="grid-3">
            <div className="skill-group">
              <h3 className="coc-font" style={{color: '#4a9eff', marginBottom: '1rem', borderBottom:'2px solid #333', paddingBottom:'5px'}}>Frontend</h3>
              <div>
                {skillsData.frontend.map(s => <SkillPill key={s} name={s} type="tech" />)}
              </div>
            </div>

            <div className="skill-group">
              <h3 className="coc-font" style={{color: '#d32ce6', marginBottom: '1rem', borderBottom:'2px solid #333', paddingBottom:'5px'}}>Backend</h3>
              <div>
                {skillsData.backend.map(s => <SkillPill key={s} name={s} type="default" />)}
              </div>
            </div>

            <div className="skill-group">
              <h3 className="coc-font" style={{color: '#ffb900', marginBottom: '1rem', borderBottom:'2px solid #333', paddingBottom:'5px'}}>Tools</h3>
              <div>
                {skillsData.tools.map(s => <SkillPill key={s} name={s} type="tool" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;