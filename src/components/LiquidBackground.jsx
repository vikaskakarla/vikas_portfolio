import React from 'react';

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark-900 pointer-events-none">
      {/* Dynamic blurred orbs representing liquid fire */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fiery-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-liquid-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-fiery-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-liquid-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] left-[60%] w-[40vw] h-[40vw] bg-fiery-400 rounded-full mix-blend-screen filter blur-[90px] opacity-20 animate-liquid-slow" style={{ animationDelay: '5s' }}></div>
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
};

export default LiquidBackground;
