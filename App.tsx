import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { HeroSection } from './components/HeroSection';
import { ClientList } from './components/ClientList';
import { ServicesGrid } from './components/ServicesGrid';
import { ProjectGrid } from './components/ProjectGrid';
import { PluginAnatomy } from './components/PluginAnatomy';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { AIChat } from './components/AIChat';

// Register GSAP plugins outside component
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis with robust settings for global scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      autoRaf: true, // Newer Lenis versions manage requestAnimationFrame automatically
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Initial refresh to calculate heights correctly once images/fonts might have loaded
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    // Refresh on window resize for stability
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-lime selection:text-black">
      <Navigation onChatToggle={() => setIsChatOpen(true)} />
      
      <main>
        <HeroSection />
        <ClientList />
        <ProjectGrid />
        <PluginAnatomy />
        <ServicesGrid />
        <CTASection />
      </main>
      
      <Footer />
      
      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
};

export default App;