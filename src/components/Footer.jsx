import React from 'react';
import { FaInstagram, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-[#111] text-white pt-16 pb-8 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
        
        {/* Logo Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-brand-orange font-bold text-2xl tracking-widest mb-8"
        >
          LOGO
        </motion.div>
        
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-xs tracking-widest uppercase mb-12 font-medium opacity-80">
          <a href="#hero" className="hover:text-brand-orange transition-colors">Home</a>
          <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-orange transition-colors">About me</a>
          <a href="#portfolio" className="hover:text-brand-orange transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-brand-orange transition-colors">Contact me</a>
        </nav>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-6 mb-12"
        >
          <motion.a whileHover={{ y: -5, backgroundColor: "#ff4e00", borderColor: "#ff4e00", color: "#fff" }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex justify-center items-center text-gray-400 transition-colors">
            <FaInstagram className="w-4 h-4" />
          </motion.a>
          <motion.a whileHover={{ y: -5, backgroundColor: "#ff4e00", borderColor: "#ff4e00", color: "#fff" }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex justify-center items-center text-gray-400 transition-colors">
            <FaLinkedinIn className="w-4 h-4" />
          </motion.a>
          <motion.a whileHover={{ y: -5, backgroundColor: "#ff4e00", borderColor: "#ff4e00", color: "#fff" }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex justify-center items-center text-gray-400 transition-colors">
            <FaDribbble className="w-4 h-4" />
          </motion.a>
          <motion.a whileHover={{ y: -5, backgroundColor: "#ff4e00", borderColor: "#ff4e00", color: "#fff" }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex justify-center items-center text-gray-400 transition-colors">
            <FaBehance className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 items-center text-gray-400 text-sm mb-12"
        >
          <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-5 h-5" />
            <span>vikaskakarla.ak@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
            <Phone className="w-5 h-5" />
            <span>+91 6281971518</span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 tracking-wide text-center">
          Copyright © 2026 Vikas Kakarla. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
