import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="relative w-full py-20 sm:py-32 md:py-48 bg-brand-black text-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        
        {/* Left massive text */}
        <motion.div 
          style={{ y: y1 }}
          className="flex-1 w-full"
        >
          <h2 className="text-[12vw] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] md:leading-tight">
            Engineering <br />
            <span className="text-outline-neon">Intelligence</span>
          </h2>
        </motion.div>

        {/* Right Info Cards */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card group hover:border-brand-neon/50 transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold mb-2">Dayananda Sagar University</h3>
            <p className="text-brand-neon mb-4 font-medium uppercase tracking-wider text-sm">Student</p>
            <p className="text-white/70 leading-relaxed text-lg">
              Pursuing a Bachelor of Technology in Computer Science and Technology. Actively building scalable systems and AI-driven applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="glass-card group hover:border-brand-neon/50 transition-colors duration-500 flex justify-between items-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-1">Current GPA</h3>
              <p className="text-white/50 text-sm">Consistent academic excellence</p>
            </div>
            <div className="text-5xl font-black text-brand-neon">
              8.75
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
