import React, { useRef, useLayoutEffect } from 'react';
import { Database, Server, Code, Zap } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PluginAnatomy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);
  const tooltipsRef = useRef<HTMLDivElement>(null);
  const logsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!wrapperRef.current || !cubeRef.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%", // Slightly longer for better feel
          pin: true,
          scrub: 1.2, // Smooth follow
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // 1. Initial State: Aggressive rotation for depth
      timeline.fromTo(cubeRef.current, {
        rotationX: 0,
        rotationZ: 0,
        scale: 1,
      }, {
        rotationX: 65,
        rotationZ: 45,
        scale: 0.75,
        duration: 1.5,
        ease: "power2.inOut"
      }, 0);

      // 2. Explode Layers (Staggered offsets)
      const gap = 160;
      
      // React Layer (Top)
      timeline.to(layersRef.current[0], {
        z: 100, // Move towards camera in 3D space
        y: -gap,
        duration: 1.5,
        ease: "back.out(1.7)"
      }, 0.5);
      
      // Middle Layer (Stay centered but slight jitter/vibration effect)
      timeline.to(layersRef.current[1], {
        y: -10,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut"
      }, 1);

      // Data Layer (Bottom)
      timeline.to(layersRef.current[2], {
        z: -100, // Move away in 3D space
        y: gap,
        duration: 1.5,
        ease: "back.out(1.7)"
      }, 0.5);

      // 3. Fade in Logs (Left sidebar) - Staggered arrival
      if (logsRef.current) {
        timeline.fromTo(logsRef.current.children, {
          opacity: 0,
          x: -40,
          skewX: 10
        }, {
          opacity: 1,
          x: 0,
          skewX: 0,
          stagger: 0.1,
          duration: 0.8
        }, 1.2);
      }

      // 4. Fade in Tooltips (Right sidebar)
      if (tooltipsRef.current) {
        timeline.fromTo(tooltipsRef.current.children, {
          opacity: 0,
          scale: 0.8,
          x: 40
        }, {
          opacity: 1,
          scale: 1,
          x: 0,
          stagger: 0.2,
          duration: 1
        }, 1.5);
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToLayers = (el: HTMLDivElement | null) => {
    if (el && !layersRef.current.includes(el)) {
      layersRef.current.push(el);
    }
  };

  return (
    <section ref={containerRef} id="plugin-section" className="relative h-screen bg-brand-dark overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:60px:60px] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div ref={wrapperRef} className="relative w-full h-full flex items-center justify-center">
        
        {/* Header Title */}
        <div className="absolute top-24 text-center z-10 pointer-events-none px-6">
           <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-2 mix-blend-difference pointer-events-auto cursor-default transition-all duration-700 hover:tracking-widest">
             PLUGIN ARCHITECTURE
           </h2>
           <p className="text-brand-lime font-mono text-sm tracking-[0.2em] uppercase opacity-70">
             Scroll to deconstruct systems
           </p>
        </div>

        {/* Left Sidebar: Kernel Logs */}
        <div ref={logsRef} className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block w-72 font-mono text-xs text-gray-400 border-l border-brand-purple/30 pl-6">
          <div className="mb-6 text-brand-purple font-bold tracking-widest uppercase border-b border-white/10 pb-2">Kernel Initialization</div>
          {[
            '> MOUNTING_FS: MOODLE_ROOT', 
            '> LOADING_UI: REACT_V19', 
            '> DB_QUERY: SELECT_SCHEMA', 
            '> ASYNC_QUEUE: STARTING', 
            '> SYSTEM_READY: OK'
          ].map((line, i) => (
             <div key={i} className="mb-3 flex group hover:text-brand-lime transition-colors cursor-crosshair">
               <span className="text-brand-purple mr-3 opacity-50">{`0x${i+1}F`}</span>
               {line}
             </div>
          ))}
        </div>

        {/* Center: Exploded View */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] perspective-[2000px]">
          <div ref={cubeRef} className="w-full h-full relative preserve-3d transition-transform will-change-transform">
            
            {/* Top Layer: React Frontend */}
            <div 
              ref={addToLayers}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-2xl border-2 border-brand-purple rounded-2xl flex items-center justify-center group hover:bg-brand-purple/20 transition-all shadow-[0_0_50px_rgba(96,0,255,0.3)]"
            >
              <div className="absolute top-6 left-6 text-[11px] text-brand-purple font-mono font-bold tracking-[0.3em] border border-brand-purple/40 px-3 py-1.5 rounded-full bg-brand-purple/10">UI INTERFACE</div>
              <Code size={80} className="text-brand-purple group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute bottom-6 right-6 text-[10px] text-brand-purple/60 font-mono">REACT.TSX</div>
            </div>

            {/* Middle Layer: PHP Logic */}
            <div 
              ref={addToLayers}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-2xl border-2 border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:border-white/50 transition-all"
            >
              <div className="absolute top-6 left-6 text-[11px] text-white font-mono font-bold tracking-[0.3em] border border-white/30 px-3 py-1.5 rounded-full bg-white/5">CORE LOGIC</div>
              <Server size={80} className="text-white hover:rotate-[360deg] transition-transform duration-1000" />
              <div className="absolute bottom-6 right-6 text-[10px] text-white/40 font-mono">LIB.PHP</div>
            </div>

            {/* Bottom Layer: SQL Data */}
            <div 
              ref={addToLayers}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-2xl border-2 border-brand-lime rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(204,255,0,0.2)] hover:bg-brand-lime/10 transition-all"
            >
              <div className="absolute top-6 left-6 text-[11px] text-brand-lime font-mono font-bold tracking-[0.3em] border border-brand-lime/40 px-3 py-1.5 rounded-full bg-brand-lime/10">PERSISTENCE</div>
              <Database size={80} className="text-brand-lime hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-6 right-6 text-[10px] text-brand-lime/60 font-mono">SCHEMA.SQL</div>
            </div>

          </div>
        </div>

        {/* Right Sidebar: Dynamic Tooltips */}
        <div ref={tooltipsRef} className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 w-80">
          <div className="p-6 bg-brand-dark/80 backdrop-blur-xl border-l-4 border-brand-purple shadow-2xl hover:-translate-x-4 transition-transform duration-500 rounded-r-xl">
             <div className="flex items-center gap-3 mb-4 text-brand-purple">
               <Zap size={22} className="animate-pulse" />
               <span className="text-xs font-bold font-display uppercase tracking-widest">Efficiency Engine</span>
             </div>
             <p className="text-sm text-gray-300 leading-relaxed font-mono font-light">
               Cron orchestration layer handles <span className="text-brand-purple font-bold">50k+</span> concurrent tasks with optimized thread-safety.
             </p>
          </div>
          <div className="p-6 bg-brand-dark/80 backdrop-blur-xl border-l-4 border-brand-lime shadow-2xl hover:-translate-x-4 transition-transform duration-500 rounded-r-xl">
             <div className="flex items-center gap-3 mb-4 text-brand-lime">
               <Code size={22} />
               <span className="text-xs font-bold font-display uppercase tracking-widest">Hydration Cycle</span>
             </div>
             <p className="text-sm text-gray-300 leading-relaxed font-mono font-light">
               Progressive hydration ensures interactive <span className="text-brand-lime font-bold">LCP</span> scores below 1.2s on standard mobile networks.
             </p>
          </div>
        </div>

      </div>
      
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
};