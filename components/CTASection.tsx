import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-brand-dark py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          
          <div className="w-full md:w-1/2">
             <span className="font-mono text-xs uppercase text-gray-500 mb-4 block tracking-widest">Our Process</span>
             <h2 className="text-6xl md:text-8xl font-display uppercase leading-none text-white mb-8 cursor-default transition-all duration-700 hover:tracking-wide">
               Start With<br/>
               <span className="text-outline-hover transition-all duration-300">A Conversation</span>
             </h2>
          </div>

          <div className="w-full md:w-1/2 relative">
             <motion.div 
               whileHover={{ scale: 1.02, rotate: -1 }}
               className="bg-brand-purple p-1 rounded-3xl -rotate-1 shadow-[10px_10px_0px_#CCFF00] cursor-pointer"
             >
                <div className="bg-brand-purple border-2 border-white/20 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                   {/* Sticker Graphic */}
                   <div className="absolute top-4 right-4 animate-bounce">
                     <div className="bg-brand-lime text-black p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl font-bold font-display text-xl group-hover:bg-white transition-colors">
                        LET'S TALK!
                     </div>
                   </div>

                   <div className="mt-12 flex gap-4">
                     <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full bg-white relative">
                          <div className="absolute top-1/3 left-1/4 w-3 h-4 bg-black rounded-full" />
                          <div className="absolute top-1/3 right-1/4 w-3 h-4 bg-black rounded-full" />
                          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-8 h-4 border-b-4 border-black rounded-full" />
                        </div>
                     </div>
                     <div className="flex-1">
                        <p className="text-white font-medium text-lg leading-tight mb-4 group-hover:text-white/90">
                          Ready to launch your next big project? Let's connect and discuss the architecture.
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:bg-brand-lime transition-colors">
                          Schedule Call
                        </button>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};