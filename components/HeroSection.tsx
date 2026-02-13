import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-brand-purple flex flex-col justify-center overflow-hidden pt-20">
      
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px]" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Typography */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[12vw] leading-[0.85] font-display uppercase text-white mix-blend-overlay opacity-50 select-none transition-all duration-700 hover:tracking-widest cursor-default">
              Turning
            </h1>
            <h1 className="text-[12vw] leading-[0.85] font-display uppercase text-brand-lime relative z-20 drop-shadow-lg transition-all duration-700 hover:tracking-wide cursor-default">
              Ideas Into
            </h1>
            <div className="flex items-center gap-4">
              <h1 className="text-[12vw] leading-[0.85] font-display uppercase text-white transition-all duration-700 hover:tracking-widest cursor-default">
                Powerful
              </h1>
              {/* Decorative Sticker/Badge */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="hidden md:flex w-24 h-24 bg-white rounded-full items-center justify-center border-4 border-black hover:scale-110 transition-transform duration-300"
              >
                <span className="text-4xl">☻</span>
              </motion.div>
            </div>
            <h1 className="text-[12vw] leading-[0.85] font-display uppercase text-white text-outline transition-all duration-700 hover:tracking-widest cursor-default">
              Solutions
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-lg md:text-xl max-w-xl font-medium leading-relaxed hover:text-white transition-colors duration-300"
          >
            Stop wasting time. I ship scalable full-stack applications with production-grade quality chosen by industry leaders.
          </motion.p>
        </div>

        {/* 3D/Sticker Element */}
        <div className="lg:col-span-4 relative h-full min-h-[400px] flex items-center justify-center">
           <motion.div
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="relative w-64 h-64 md:w-80 md:h-80 bg-brand-lime rounded-full border-4 border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-500"
           >
             {/* Simple CSS Face */}
             <div className="relative w-full h-full bg-brand-lime">
                <div className="absolute top-1/3 left-1/4 w-12 h-16 bg-black rounded-full animate-blink" />
                <div className="absolute top-1/3 right-1/4 w-12 h-16 bg-black rounded-full animate-blink" />
                <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-32 h-16 border-b-8 border-black rounded-full" />
                
                {/* Headphones */}
                <div className="absolute top-1/4 -left-4 w-12 h-32 bg-brand-purple rounded-r-2xl border-4 border-white" />
                <div className="absolute top-1/4 -right-4 w-12 h-32 bg-brand-purple rounded-l-2xl border-4 border-white" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-24 border-t-8 border-white rounded-t-full" />
             </div>
           </motion.div>

           {/* Decorative floating elements */}
           <motion.div 
             animate={{ rotate: -10, y: [0, 10, 0] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="absolute top-0 right-0 bg-white text-black font-bold px-4 py-2 rounded-lg border-2 border-black rotate-12 shadow-[4px_4px_0px_black] hover:rotate-0 transition-transform duration-300 cursor-pointer"
           >
             Available for hire!
           </motion.div>
        </div>
      </div>

      {/* Marquee Stripe */}
      <div className="absolute bottom-12 left-0 w-full bg-brand-lime rotate-1 scale-105 border-y-4 border-black py-3 overflow-hidden z-20">
         <div className="flex animate-marquee whitespace-nowrap hover:paused cursor-default">
           {Array(10).fill("FULL STACK DEVELOPMENT • UI/UX DESIGN • AI INTEGRATION • ").map((text, i) => (
             <span key={i} className="text-2xl font-display text-black mx-4">{text}</span>
           ))}
         </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .animate-blink { animation: blink 4s infinite; }
        .hover\:paused:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
};