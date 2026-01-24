import React from 'react';

const LoadingScreen = ({ loading }) => {
  return (
    <>
      <style>{`
        .loading-screen {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: #87CEEB; 
          transition: transform 1s ease-in-out, opacity 0.5s ease, visibility 0s 1s;
          pointer-events: none; /* Ensures clicks pass through if opacity is 0 */
          padding: 1rem; /* Prevents text from touching edges on very small screens */
        }
        
        .loading-title {
          font-size: 3rem;
          color: #fff;
          text-shadow: 4px 4px 0 #000;
          margin-bottom: 1rem;
          text-align: center;
          font-family: 'Luckiest Guy', cursive; /* Assuming you use this font elsewhere */
          line-height: 1.2;
        }

        .loading-bar-container {
           width: 250px;
           max-width: 80%; /* Ensures it never overflows screen width */
           height: 12px;
           background: #333;
           border-radius: 6px;
           overflow: hidden;
           border: 2px solid #fff;
           box-shadow: 0 4px 0 rgba(0,0,0,0.2);
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
           .loading-title {
              font-size: 1.8rem; /* Much smaller for mobile to prevent overflow */
              text-shadow: 2px 2px 0 #000; /* Scaled down shadow */
              margin-bottom: 1.5rem;
           }
        }

        /* Animation State */
        .loading-screen.loaded { 
           transform: scale(1.5); 
           opacity: 0; 
           visibility: hidden; 
        }
      `}</style>
      
      <div className={`loading-screen ${!loading ? 'loaded' : ''}`}>
        <h1 className="loading-title">LOADING VILLAGE...</h1>
        
        <div className="loading-bar-container">
          <div style={{
            height: '100%', 
            background: 'var(--coc-elixir, #ff00ff)', /* Fallback color added */
            width: loading ? '15%' : '100%',
            transition: 'width 2s ease-in-out'
          }}></div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;