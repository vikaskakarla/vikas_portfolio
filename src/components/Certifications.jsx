import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Zap } from 'lucide-react';

const CertCard = ({ title, subtitle, icon: Icon }) => (
  <div className="min-w-[350px] md:min-w-[450px] bg-[#1a1a1a] p-8 rounded-2xl mx-4 border border-white/5 flex flex-col justify-between hover:border-brand-orange/30 transition-colors">
    <div className="flex items-start gap-4 mb-8">
      <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-white text-lg font-bold leading-tight mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  </div>
);

const Certifications = () => {
  const items = [
    { title: "NASA Space Apps Challenge 2025", subtitle: "Hackathon Participant", icon: Zap },
    { title: "AWS Academy Graduate", subtitle: "Cloud Foundations", icon: Award },
    { title: "Event Manager, CPA Club", subtitle: "Managed 2 major college fests", icon: Star },
    { title: "Problem Solving & Management", subtitle: "Core Soft Skills", icon: Zap },
    { title: "NASA Space Apps Challenge 2025", subtitle: "Hackathon Participant", icon: Zap },
    { title: "AWS Academy Graduate", subtitle: "Cloud Foundations", icon: Award },
    { title: "Event Manager, CPA Club", subtitle: "Managed 2 major college fests", icon: Star },
    { title: "Problem Solving & Management", subtitle: "Core Soft Skills", icon: Zap }
  ];

  return (
    <section id="certifications" className="w-full bg-brand-black text-white py-32 border-t border-white/5 overflow-hidden flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-20 tracking-tight text-center"
      >
        Achievements & Skills
      </motion.h2>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Left/Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex py-4 cursor-grab active:cursor-grabbing"
          animate={{ x: [0, -1900] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {items.map((item, index) => (
            <CertCard 
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Certifications;
