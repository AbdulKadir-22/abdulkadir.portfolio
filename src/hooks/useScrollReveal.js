import { useRef, useEffect } from 'react';

export const useScrollReveal = () => {
  const revealRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      revealRefs.current.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on init

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { addToRefs };
};