import React, { useRef, useLayoutEffect } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  theme: 'purple' | 'lime' | 'black' | 'white';
  year: string;
}

const projects: Project[] = [
  {
    title: "NEON NEXUS",
    category: "WEBGL EXPERIENCE",
    description: "An interactive 3D city generator using Three.js and instanced rendering to visualize blockchain transaction data in real-time.",
    tags: ["Three.js", "React", "WebGL", "Solidity"],
    theme: "purple",
    year: "2024"
  },
  {
    title: "VOID CHAT",
    category: "REAL-TIME APP",
    description: "End-to-end encrypted messaging platform featuring noise-based visual encryption and decentralized storage protocols.",
    tags: ["Socket.io", "Node.js", "Redis", "Cryptography"],
    theme: "lime",
    year: "2023"
  },
  {
    title: "SYNTH UI",
    category: "DESIGN SYSTEM",
    description: "A comprehensive React component library focusing on neumorphic and glassmorphic traits for next-gen dashboards.",
    tags: ["React", "Storybook", "Tailwind", "NPM"],
    theme: "white",
    year: "2023"
  },
  {
    title: "AETHER FINANCE",
    category: "FINTECH DASHBOARD",
    description: "High-frequency trading visualization interface processing 50k+ events per second with WebWorkers and OffscreenCanvas.",
    tags: ["D3.js", "WebSockets", "Rust", "WASM"],
    theme: "black",
    year: "2022"
  }
];

const themeConfig = {
  purple: "bg-brand-purple text-white border-brand-purple",
  lime: "bg-brand-lime text-black border-brand-lime",
  white: "bg-white text-black border-white",
  black: "bg-brand-dark text-white border-white/20"
};

export const ProjectGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // The card is sticky via CSS. 
        // We want to animate it as it gets covered by the next content.
        // start matches the 'top' sticky offset in CSS (approx 96px + stack offset)
        gsap.to(card, {
          scale: 0.92,
          y: -20, // Subtle lift
          filter: "brightness(0.4) saturate(0.5)",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: `top ${96 + index * 15}px`, 
            end: "bottom top", 
            scrub: 0.5, // Numeric scrub for smoother interpolation
            invalidateOnRefresh: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={containerRef} id="projects" className="bg-brand-dark py-24 relative overflow-visible">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-b border-white/20 pb-8">
           <div className="overflow-hidden">
              <h2 className="text-6xl md:text-9xl font-display uppercase leading-[0.85] text-white cursor-default transition-all duration-700 hover:tracking-widest">
                Selected<br/>Works
              </h2>
           </div>
           <div className="flex items-center gap-4 text-brand-lime font-mono text-sm uppercase tracking-widest pb-2">
              <span className="w-3 h-3 bg-brand-lime rounded-full animate-pulse"></span>
              Scroll to explore
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative flex flex-col items-center gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={addToRefs}
            className={`group sticky w-full min-h-[60vh] rounded-3xl border-2 p-8 md:p-12 flex flex-col justify-between shadow-[0_-20px_60px_rgba(0,0,0,0.6)] transform-gpu transition-shadow duration-500 hover:shadow-brand-lime/5 ${themeConfig[project.theme]}`}
            style={{ 
                zIndex: index + 1,
                top: `calc(6rem + ${index * 15}px)`, 
                transformOrigin: 'top center'
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-start">
               <div className="flex items-center gap-4">
                  <span className="font-display text-4xl opacity-50 group-hover:scale-110 transition-transform duration-500">0{index + 1}</span>
                  <span className="font-mono text-xs md:text-sm uppercase border border-current px-3 py-1 rounded-full group-hover:bg-current group-hover:text-inherit group-hover:bg-opacity-10 transition-all">
                    {project.category}
                  </span>
               </div>
               <div className="font-mono text-sm opacity-60">{project.year}</div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-end h-full">
               <div>
                  <h3 className="text-5xl md:text-8xl font-display uppercase leading-[0.9] mb-8 break-words transition-all duration-500 group-hover:tracking-wide">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                     {project.tags.map((tag, i) => (
                       <span key={i} className="text-xs font-mono uppercase bg-black/10 px-2 py-1 rounded hover:bg-black/20 transition-colors">
                         #{tag}
                       </span>
                     ))}
                  </div>
                  <div className="flex gap-4">
                     <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold uppercase hover:scale-105 transition-transform active:scale-95 shadow-xl">
                       View Case <ArrowUpRight size={16} />
                     </button>
                     <button className="p-3 border-2 border-current rounded-full hover:bg-black/10 transition-colors">
                       <Github size={20} />
                     </button>
                  </div>
               </div>

               {/* Description / Abstract Graphic */}
               <div className="flex flex-col justify-between h-full">
                  <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-xl ml-auto opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-8 ml-auto w-full h-32 md:h-48 border-2 border-current rounded-xl relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-[length:15px_15px]"></div>
                      <span className="font-display text-6xl uppercase opacity-20 rotate-12 group-hover:rotate-0 transition-all duration-700">
                        {project.theme}
                      </span>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};