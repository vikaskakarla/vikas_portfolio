import React from 'react';
import { Layers, Database, Globe, Hexagon, Code2 } from 'lucide-react';

const TrustBar = () => {
  return (
    <section className="w-full bg-brand-black text-white/50 py-16">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-wrap justify-between items-center gap-8 border-t border-white/10 pt-16">
        
        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Layers className="w-6 h-6" />
          <span className="font-bold tracking-tight text-lg">zantic</span>
        </div>
        
        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Database className="w-5 h-5" />
          <span className="font-semibold tracking-tight text-lg">BookStore</span>
        </div>
        
        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Hexagon className="w-5 h-5" />
          <span className="font-semibold tracking-tight text-lg">Wager</span>
        </div>

        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Globe className="w-5 h-5" />
          <span className="font-bold tracking-tight text-lg">Crona</span>
        </div>

        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Code2 className="w-6 h-6" />
          <span className="font-bold tracking-tight text-lg">Mercury</span>
        </div>
        
      </div>
    </section>
  );
};

export default TrustBar;
