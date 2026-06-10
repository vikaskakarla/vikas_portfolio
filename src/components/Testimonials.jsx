import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role }) => (
  <div className="min-w-[350px] md:min-w-[450px] bg-[#1a1a1a] p-8 rounded-2xl mx-4 border border-white/5 flex flex-col justify-between hover:border-brand-orange/30 transition-colors">
    <p className="text-gray-300 text-lg md:text-xl font-light italic mb-8 leading-relaxed">
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-lg">
        {author[0]}
      </div>
      <div>
        <h4 className="text-white font-bold">{author}</h4>
        <p className="text-brand-orange text-xs tracking-wider uppercase">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    { quote: "Vikas transformed our outdated website into a modern masterpiece. The new UI dramatically increased our conversion rates.", author: "Sarah Jenkins", role: "CEO, TechFlow" },
    { quote: "An absolute pleasure to work with. He understands both design aesthetics and complex technical requirements seamlessly.", author: "Marcus Thorne", role: "Product Manager" },
    { quote: "The attention to detail and smooth animations he integrated into our app blew our investors away. Highly recommended.", author: "Elena Rodriguez", role: "Founder, Bloom" },
    { quote: "Vikas delivered ahead of schedule and the code quality was impeccable. The best creative developer we've hired.", author: "David Chen", role: "CTO, Innovate" }
  ];

  // Duplicate for seamless infinite scrolling
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="w-full bg-brand-black text-white py-32 border-t border-white/5 overflow-hidden flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-20 tracking-tight text-center"
      >
        Client Feedback
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
          {scrollItems.map((item, index) => (
            <TestimonialCard 
              key={index}
              quote={item.quote}
              author={item.author}
              role={item.role}
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Testimonials;
