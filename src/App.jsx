import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-brand-black min-h-screen selection:bg-brand-neon selection:text-brand-black">
      <main className="relative flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
