import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LoadingScreen from './components/common/LoadingScreen';
import Toast from './components/common/Toast';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Blogs from './components/blogs/Blogs';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useToast } from './hooks/useToast';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(true);
  const { addToRefs } = useScrollReveal();
  const { toast, showToast } = useToast();

  useEffect(() => {
    // Simulate "Loading Village"
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="coc-container">
      <LoadingScreen loading={loading} />
      <Toast message={toast?.message} />
      
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        showToast={showToast} 
      />

      <Hero showToast={showToast} />
      <About addToRefs={addToRefs} />
      <Projects addToRefs={addToRefs} />
      <Blogs addToRefs={addToRefs} />
      <Skills addToRefs={addToRefs} />
      <Contact addToRefs={addToRefs} showToast={showToast} />

      <Footer />
    </div>
  );
};

export default App;