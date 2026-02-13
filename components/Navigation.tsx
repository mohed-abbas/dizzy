import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onChatToggle: () => void;
}

const navLinks = [
  { label: 'SERVICES', id: 'services', desc: 'Expert solutions for complex problems' },
  { label: 'PROJECTS', id: 'projects', desc: 'A selection of high-impact works' },
  { label: 'ABOUT', id: 'about', desc: 'The philosophy behind the code' },
  { label: 'CONTACT', id: 'contact', desc: 'Start a new conversation today' },
];

export const Navigation: React.FC<NavigationProps> = ({ onChatToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    // Give time for exit animation before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    closed: {
      y: "110%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const overlayVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 0.7, delay: 0.4, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[110] px-6 py-8 flex items-center justify-between mix-blend-difference text-white">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-display tracking-tight z-50 group"
        >
          MYPORTFOLIO<span className="text-brand-lime group-hover:animate-pulse">.</span>
        </button>

        {/* Action Bar */}
        <div className="flex items-center gap-6">
          <button 
             onClick={onChatToggle}
             className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-purple hover:scale-110 transition-all duration-300"
           >
             <MessageCircle size={20} />
           </button>
           
           <button 
             className="relative flex items-center gap-2 group"
             onClick={() => setIsOpen(!isOpen)}
           >
             <div className="flex flex-col gap-1.5">
               <motion.span 
                 animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                 className="w-8 h-0.5 bg-white origin-center" 
               />
               <motion.span 
                 animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                 className="w-5 h-0.5 bg-brand-lime self-end" 
               />
               <motion.span 
                 animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                 className="w-8 h-0.5 bg-white origin-center" 
               />
             </div>
             <span className="text-xs font-mono font-bold tracking-widest hidden sm:block">
               {isOpen ? 'CLOSE' : 'MENU'}
             </span>
           </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-brand-dark z-[100] flex flex-col justify-center"
          >
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/10 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Menu Links */}
              <motion.div 
                variants={containerVariants}
                className="lg:col-span-8 flex flex-col"
              >
                {navLinks.map((link) => (
                  <div key={link.id} className="overflow-hidden py-2 group">
                    <motion.button
                      variants={linkVariants}
                      onClick={() => scrollTo(link.id)}
                      className="flex items-baseline gap-6 w-full text-left"
                    >
                      <span className="font-mono text-sm text-brand-lime opacity-40 group-hover:opacity-100 transition-opacity">0{navLinks.indexOf(link) + 1}</span>
                      <h2 className="text-6xl md:text-[10vw] font-display uppercase leading-none transition-all duration-500 group-hover:tracking-widest group-hover:text-brand-lime group-hover:italic">
                        {link.label}
                      </h2>
                    </motion.button>
                    {/* Hover Description (Hidden on mobile) */}
                    <div className="hidden lg:block ml-16 h-0 overflow-hidden group-hover:h-8 transition-all duration-500">
                       <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                         {link.desc}
                       </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Sidebar Info */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="lg:col-span-4 flex flex-col gap-12 border-l border-white/10 pl-12 hidden lg:flex"
              >
                <div>
                   <h4 className="font-mono text-xs text-brand-lime uppercase tracking-widest mb-4">Social Presence</h4>
                   <ul className="space-y-3 font-display text-2xl uppercase">
                     <li className="hover:text-brand-lime transition-colors cursor-pointer">Instagram</li>
                     <li className="hover:text-brand-lime transition-colors cursor-pointer">LinkedIn</li>
                     <li className="hover:text-brand-lime transition-colors cursor-pointer">Github</li>
                     <li className="hover:text-brand-lime transition-colors cursor-pointer">Twitter</li>
                   </ul>
                </div>
                
                <div>
                   <h4 className="font-mono text-xs text-brand-lime uppercase tracking-widest mb-4">Location</h4>
                   <p className="text-xl uppercase font-display max-w-[200px] leading-tight">
                     Based in Europe,<br/>Working Worldwide
                   </p>
                </div>

                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-24 h-24 rounded-full border border-brand-lime text-brand-lime flex flex-col items-center justify-center hover:bg-brand-lime hover:text-black transition-all duration-500 group"
                >
                  <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  <span className="text-[10px] font-bold mt-1">BACK</span>
                </button>
              </motion.div>
            </div>

            {/* Bottom Marquee Footer in Menu */}
            <div className="absolute bottom-12 left-0 w-full opacity-20 pointer-events-none">
               <div className="flex animate-marquee whitespace-nowrap font-display text-8xl text-white uppercase opacity-10">
                 LET'S CREATE SOMETHING REMARKABLE TOGETHER — LET'S CREATE SOMETHING REMARKABLE TOGETHER —
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};