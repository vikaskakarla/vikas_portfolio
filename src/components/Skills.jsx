import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "C"],
    colSpan: "md:col-span-2 lg:col-span-1"
  },
  {
    title: "AI/ML Core",
    items: ["LangChain", "LangGraph", "LlamaIndex", "RAG Pipelines", "AI Agents", "Prompt Engineering", "OpenAI API"],
    colSpan: "md:col-span-2 lg:col-span-2",
    accent: true
  },
  {
    title: "Backend",
    items: ["FastAPI", "Flask", "REST APIs", "Node.js", "Async Python"],
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Databases",
    items: ["FAISS", "ChromaDB", "Neo4j", "MongoDB", "MySQL", "SQLite"],
    colSpan: "md:col-span-1 lg:col-span-2"
  },
  {
    title: "AI/ML Tools",
    items: ["Gemini API", "Hugging Face", "Ollama", "Embeddings", "Semantic Search"],
    colSpan: "md:col-span-2 lg:col-span-1",
    accent: true
  },
  {
    title: "DevOps",
    items: ["Docker", "Jenkins", "AWS EC2", "GitHub Actions", "Nginx", "CI/CD"],
    colSpan: "md:col-span-2 lg:col-span-1"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-24 bg-brand-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-16 text-center"
        >
          Technical <span className="text-brand-neon">Arsenal</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`glass-card flex flex-col justify-between ${category.colSpan} ${category.accent ? 'border-brand-neon/30 bg-brand-neon/5' : ''}`}
            >
              <h3 className={`text-xl font-bold mb-6 uppercase tracking-wider ${category.accent ? 'text-brand-neon' : 'text-white/80'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="bg-white/10 hover:bg-brand-neon hover:text-brand-black transition-colors duration-300 px-3 py-1.5 rounded-full text-sm font-medium cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
