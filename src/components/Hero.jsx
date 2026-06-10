import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Framer motion variants for text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: "110%", opacity: 0 },
    show: { 
      y: "0%", 
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  const nameWords = "Vikas Kakarla".split(" ");

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black">
      
      {/* Dynamic Background Noise / Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gray/50 via-brand-black to-brand-black z-0 pointer-events-none"></div>

      {/* Floating Pill Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="glass-pill text-sm font-medium tracking-wide flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-neon"></span>
          </span>
          Available for work
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y1, opacity }} 
        className="relative z-10 w-full px-6 flex flex-col items-center mt-12"
      >
        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-brand-neon font-semibold text-lg md:text-xl tracking-widest uppercase text-center border border-brand-neon/30 bg-brand-neon/5 px-6 py-2 rounded-full">
            Architecting Intellect. Engineering Everything.
          </p>
        </motion.div>

        {/* Massive Text Reveal */}
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-center uppercase flex flex-wrap justify-center gap-x-6 md:gap-x-12 lg:gap-x-16 gap-y-2 max-w-[95vw] mb-6"
        >
          {nameWords.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block pb-4 px-2 md:px-4 -mx-2 md:-mx-4">
              <motion.span 
                variants={itemVariants}
                className="inline-block hover:text-brand-neon transition-colors duration-300"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-12 mb-10"
        >
          <TypeAnimation
            sequence={[
              'AI Engineer', 2000,
              'ML Engineer', 2000,
              'Full Stack Developer', 2000,
              'Backend Developer', 2000,
              'DevOps Engineer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-3xl lg:text-4xl text-white/80 font-medium tracking-wide"
          />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center w-full"
        >
          <a 
            href="/vikas_resume.pdf" 
            download="Vikas_Kakarla_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-neon text-brand-black font-bold uppercase tracking-widest rounded-full hover:bg-brand-neon-light transition-all hover:scale-105 active:scale-95 text-center min-w-[200px]"
          >
            Download Resume
          </a>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-center min-w-[200px]"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
