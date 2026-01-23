import React from 'react';

const LoadingScreen = ({ loading }) => {
  return (
    <>
      <style>{`
        .loading-screen {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: #87CEEB; 
          transition: transform 1s ease-in-out, opacity 0.5s ease, visibility 0s 1s; /* Delay visibility change */
          pointer-events: none;
        }
        .loading-screen.loaded { 
            transform: scale(1.5); 
            opacity: 0; 
            visibility: hidden; /* Completely hide from clicks after animation */
        }
      `}</style>
      <div className={`loading-screen ${!loading ? 'loaded' : ''}`}>
        <h1 style={{fontSize: '3rem', color: '#fff', textShadow: '4px 4px 0 #000', marginBottom: '1rem'}}>LOADING VILLAGE...</h1>
        <div style={{width: '200px', height: '10px', background: '#333', borderRadius: '5px', overflow: 'hidden', border: '2px solid #fff'}}>
          <div style={{
            height: '100%', 
            background: 'var(--coc-elixir)', 
            width: loading ? '10%' : '100%',
            transition: 'width 2s ease-in-out'
          }}></div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;