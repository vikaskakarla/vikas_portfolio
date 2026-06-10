import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Custom Counter Hook
const Counter = ({ from, to, duration = 2, inView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span>{count}</span>;
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { num: 2, label: "Large-Scale Fests", desc: "Successfully executed annual college fests" },
    { num: 1, label: "Cultural Festival", desc: "Managed major cultural event for CPA Club" },
    { num: 2025, label: "Nasa Space Apps", desc: "Participated in the Nasa Space Apps Challenge" }
  ];

  return (
    <section id="achievements" className="relative w-full py-24 bg-brand-gray text-white px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-16 text-center"
        >
          Milestones & <span className="text-brand-neon">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-8 glass-card hover:border-brand-neon/50 transition-colors duration-500"
            >
              <div className="text-6xl md:text-8xl font-black text-transparent text-outline-neon mb-4">
                <Counter from={0} to={stat.num} inView={isInView} duration={2.5} />
              </div>
              <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{stat.label}</h4>
              <p className="text-white/60 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card flex flex-col md:flex-row items-center justify-between p-8 border-brand-neon/30 bg-brand-neon/5"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-brand-neon">AWS Academy Graduate</h3>
            <p className="text-white/80 font-medium">Certified in Cloud Foundations</p>
          </div>
          <div className="glass-pill border-brand-neon/50 text-brand-neon uppercase text-sm tracking-wider font-bold shadow-[0_0_15px_rgba(0,255,102,0.2)]">
            Verified Certification
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
