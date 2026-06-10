import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import TextReveal from './TextReveal';

const ProjectCard = ({ title, category, image }) => (
  <div className="w-[300px] sm:w-[450px] lg:w-[600px] flex-shrink-0">
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1500}
    >
      <div className="group relative w-full aspect-[4/3] bg-[#1a1a1a] rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-orange/50 transition-colors shadow-2xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">{title}</h3>
          <p className="text-brand-orange text-base md:text-lg font-medium drop-shadow-md tracking-wide uppercase">{category}</p>
        </div>
      </div>
    </Tilt>
  </div>
);

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Secure Offline RAG", category: "AI / ML" },
    { id: 2, title: "RunaGen-AI", category: "AI / ML" },
    { id: 3, title: "DineInGo Platform", category: "Full-Stack" },
    { id: 4, title: "FlowGrid ERP System", category: "Full-Stack" },
    { id: 5, title: "Next-Gen Analytics", category: "Data Science" } // Added a 5th for better scroll length
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Slide left horizontally based on scroll. Adjust percentages based on item count.
  // With 5 items, sliding to -60% usually works depending on the container width.
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);

  return (
    <section ref={targetRef} id="portfolio" className="relative h-[400vh] bg-brand-black w-full border-t border-white/5">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16 mb-12">
          <TextReveal 
            text="Selected Projects" 
            className="text-5xl md:text-7xl font-bold tracking-tight text-white" 
          />
          <p className="text-gray-400 mt-4 text-lg max-w-xl">
            A showcase of my recent work in AI, full-stack development, and system architecture.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-8 md:px-16 w-max">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              image="/assets/grayscale_office_collab_1780770503322.png"
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
