import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-purple text-white pt-20 pb-0 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start">
        <div className="grid grid-cols-2 gap-8 mb-8 md:mb-0">
          <div>
            <h4 className="font-bold text-brand-lime mb-4 text-xs uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-sm font-mono opacity-80">
              <li className="hover:text-brand-lime hover:translate-x-2 transition-all cursor-pointer">Tech Consulting</li>
              <li className="hover:text-brand-lime hover:translate-x-2 transition-all cursor-pointer">Development</li>
              <li className="hover:text-brand-lime hover:translate-x-2 transition-all cursor-pointer">UI/UX Design</li>
              <li className="hover:text-brand-lime hover:translate-x-2 transition-all cursor-pointer">AI Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-lime mb-4 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-sm font-mono opacity-80">
              <li className="hover:text-brand-lime hover:translate-x-2 transition-all cursor-pointer">About</li>
              <li className="hover:text-brand-lime hover:translate-x-2 transition-all cursor-pointer">Projects</li>
              <li className="hover:text-brand-lime hover:translate-x-2 transition-all cursor-pointer">Articles</li>
              <li className="hover:text-brand-lime hover:translate-x-2 transition-all cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="text-right">
           <div className="w-24 h-24 rounded-full bg-brand-lime text-black flex items-center justify-center font-bold text-xl animate-spin-slow hover:animate-none hover:scale-110 transition-transform cursor-pointer shadow-[0_0_20px_rgba(204,255,0,0.4)]">
             100%
           </div>
        </div>
      </div>

      {/* Massive Text */}
      <h1 className="text-[25vw] leading-[0.75] font-display text-center select-none text-brand-lime mix-blend-hard-light translate-y-10 transition-all duration-1000 hover:tracking-tighter cursor-default">
        MYGOM
      </h1>
      
      <div className="bg-black text-gray-500 py-2 text-[10px] text-center font-mono uppercase tracking-widest">
        © 2025 Creative Developer Portfolio. All rights reserved.
      </div>
    </footer>
  );
};