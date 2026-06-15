import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import GitHub from './components/sections/GitHub';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import WhyHireMe from './components/sections/WhyHireMe';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <GitHub />
          <Education />
          <Certifications />
          <WhyHireMe />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
