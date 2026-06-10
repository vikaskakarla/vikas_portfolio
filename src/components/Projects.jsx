import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projectsData = [
  {
    title: "Secure Offline RAG System",
    description: "Built an offline AI document intelligence system using FAISS vector search and Neo4j knowledge graph retrieval to reduce hallucinations.",
    tech: ["Python", "FastAPI", "Neo4j", "FAISS", "Three.js"],
    color: "bg-[#111111]"
  },
  {
    title: "RunaGen-AI",
    description: "Built an AI-powered career assistant platform leveraging Gemini AI, RAG pipelines, and semantic search workflows.",
    tech: ["Gemini AI", "RAG Pipelines", "Semantic Search"],
    color: "bg-[#151515]"
  },
  {
    title: "DineInGo",
    description: "Built a restaurant and event reservation platform with multilingual support and responsive UI/UX.",
    tech: ["React", "Node.js", "Firebase", "TypeScript"],
    color: "bg-[#1A1A1A]"
  },
  {
    title: "FlowGrid - ERP System",
    description: "Built and deployed a full-stack ERP platform with analytics dashboards, employee management, and JWT authentication.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "Jenkins", "AWS EC2"],
    color: "bg-[#222222]"
  }
];

const Card = ({ project, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  
  // Scale down the card as the next one comes up
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} className="h-screen flex items-start justify-center sticky top-0 pt-[20vh]">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(${i * 30}px)` 
        }}
        className={`relative w-[90vw] max-w-5xl h-[500px] md:h-[600px] ${project.color} rounded-[40px] p-8 md:p-14 flex flex-col justify-between origin-top shadow-[0_-20px_50px_rgba(0,0,0,0.6)] border border-white/10`}
      >
        <div className="flex flex-col gap-6 max-w-2xl">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">{project.title}</h3>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-8">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="bg-brand-neon/10 text-brand-neon border border-brand-neon/20 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="relative w-full bg-brand-black py-24 mb-48">
      <div className="max-w-6xl mx-auto px-6 mb-24 sticky top-24 z-10 text-center pointer-events-none">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mix-blend-difference">
          Selected <span className="text-transparent text-outline-neon mix-blend-normal">Works</span>
        </h2>
      </div>

      <div className="relative z-20">
        {projectsData.map((project, i) => {
          const targetScale = 1 - ((projectsData.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
