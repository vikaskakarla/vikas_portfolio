import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="w-full flex flex-col z-30 relative mt-24">
      {/* Top Section - Brand Neon Background */}
      <div className="w-full bg-brand-neon py-24 px-6 flex flex-col items-center justify-center">
        
        <div className="flex flex-col items-center mb-16">
          <p className="text-xl md:text-2xl font-semibold mb-6 uppercase tracking-widest text-brand-black">Ready to build the future?</p>
          <h2 className="text-[15vw] sm:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase text-center text-brand-black hover:scale-105 transition-transform duration-700 cursor-pointer mb-4">
            Let's Talk
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
          
          <a href="mailto:vikaskakarla.ak@gmail.com" className="flex items-center gap-3 bg-white text-brand-black px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
            <FaEnvelope className="text-brand-neon bg-brand-black p-1.5 rounded-md text-2xl" />
            <span>Email Me</span>
          </a>

          <a href="https://www.linkedin.com/in/vikaskakarla/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-brand-black px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
            <FaLinkedin className="text-blue-600 text-2xl" />
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/vikaskakarla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-brand-black px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
            <FaGithub className="text-black text-2xl" />
            <span>GitHub</span>
          </a>

        </div>
        
        <p className="text-brand-black/80 font-medium text-sm md:text-base">
          Phone: +91 6281971518 (India)
        </p>
      </div>

      {/* Bottom Footer Section - Dark Background */}
      <div className="w-full bg-[#151515] text-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Left Column: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <h3 className="text-brand-neon font-black text-3xl md:text-4xl tracking-tighter">Vikas Kakarla</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-medium">
              Architecting Intellect. Engineering Everything.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl mb-2">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {['About', 'Skills', 'Achievements', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/60 hover:text-brand-neon transition-colors text-left w-fit font-medium text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xl mb-2">Connect</h4>
            <div className="flex items-center gap-5 mb-2">
              <a href="https://www.linkedin.com/in/vikaskakarla/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-neon transition-colors text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/vikaskakarla" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-neon transition-colors text-2xl">
                <FaGithub />
              </a>
              <a href="mailto:vikaskakarla.ak@gmail.com" className="text-white/60 hover:text-brand-neon transition-colors text-2xl">
                <FaEnvelope />
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-white/60 text-sm font-medium">vikaskakarla.ak@gmail.com</span>
              <span className="text-white/60 text-sm font-medium">India</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Contact;
