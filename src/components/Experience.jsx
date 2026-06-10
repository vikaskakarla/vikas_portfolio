import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineNode = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex w-full mb-12 ${isEven ? 'justify-start' : 'justify-end'} relative`}>
      {/* Center Dot */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, type: "spring" }}
        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-black border-4 border-brand-orange flex items-center justify-center z-10"
      >
        {item.type === 'work' ? <Briefcase className="w-5 h-5 text-brand-orange" /> : <GraduationCap className="w-5 h-5 text-brand-orange" />}
      </motion.div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`w-[45%] bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-colors ${isEven ? 'text-right' : 'text-left'}`}
      >
        <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2 block">{item.period}</span>
        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
        <h4 className="text-sm text-gray-400 mb-4">{item.company}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

    const experiences = [
    {
      type: 'education',
      period: 'Sept 2023 - Present',
      title: 'B.Tech in Computer Science',
      company: 'Dayananda Sagar University',
      description: 'Currently pursuing my degree with a focus on Artificial Intelligence. Maintaining a CGPA of 8.75.'
    },
    {
      type: 'work',
      period: '2023 - Present',
      title: 'Event Manager',
      company: 'Cultural and Performing Arts (CPA) Club',
      description: 'Managed and successfully executed two large-scale annual college fests and one major cultural festival, coordinating multiple teams and resources.'
    }
  ];

  return (
    <section 
      id="experience" 
      className="w-full text-white px-8 py-32 border-t border-white/5 relative bg-brand-black bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/dotted_wave_bg.jpeg')" }}
    >
      {/* Edge fade for blending into black background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>

      <div className="relative z-10 max-w-[1000px] mx-auto flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-24 tracking-tight"
        >
          Education & Leadership
        </motion.h2>

        <div className="relative w-full" ref={ref}>
          {/* Animated Background Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full"></div>
          
          {/* Active Drawing Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-brand-orange rounded-full z-0"
          ></motion.div>

          {/* Timeline Nodes */}
          <div className="flex flex-col w-full relative z-10">
            {experiences.map((item, index) => (
              <TimelineNode key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
