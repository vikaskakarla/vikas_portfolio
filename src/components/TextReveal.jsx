import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextReveal = ({ text, className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 40%"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        const y = useTransform(scrollYProgress, [start, end], [10, 0]);

        return (
          <motion.span 
            key={i} 
            style={{ opacity, y }} 
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

export default TextReveal;
