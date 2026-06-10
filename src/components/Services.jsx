import React from 'react';
import { BrainCircuit, Server, AppWindow, Cloud, Database, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <Tilt 
    tiltMaxAngleX={10} 
    tiltMaxAngleY={10} 
    perspective={1000} 
    scale={1.02} 
    transitionSpeed={2000}
    className="h-full"
  >
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#1a1a1a] rounded-xl p-8 flex flex-col items-center text-center border border-white/5 hover:border-brand-orange/30 group h-full shadow-xl"
    >
      <motion.div 
        whileHover={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
        className="mb-4 text-brand-orange"
      >
        <Icon className="w-10 h-10" />
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  </Tilt>
);

const Services = () => {
  const services = [
    {
      icon: BrainCircuit,
      title: "AI & ML Engineering",
      description: "Building intelligent systems with RAG pipelines, AI agents, LangChain, and integrating local LLMs like Llama 3.2."
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Engineered scalable and secure backend services, REST APIs, and microservices using FastAPI, Node.js, and Python."
    },
    {
      icon: AppWindow,
      title: "Full-Stack Development",
      description: "Crafting responsive and interactive user interfaces with React and TypeScript, seamlessly connected to robust backends."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Automating deployments and managing infrastructure using Docker, Jenkins, GitHub Actions, and AWS EC2."
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Designing data models across Vector DBs (FAISS), Graph DBs (Neo4j), NoSQL (MongoDB), and SQL databases."
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Implementing advanced document intelligence and retrieval systems using HuggingFace embeddings and FAISS."
    }
  ];

  return (
    <section id="services" className="w-full bg-brand-black text-white px-8 py-32 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          Services
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-sm max-w-xl text-center mb-20 leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
