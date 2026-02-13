import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GitCommit, Terminal, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "TechNova Systems",
    period: "2022 - Present",
    desc: "Architected a micro-frontend platform serving 1M+ daily users. Optimizing rendering engines and reducing latency by 45%.",
    tech: ["React", "Node.js", "AWS"]
  },
  {
    role: "Creative Developer",
    company: "PixelForge Studio",
    period: "2020 - 2022",
    desc: "Built award-winning immersive web campaigns using WebGL. Collaborated with designers to push browser limits.",
    tech: ["Three.js", "GSAP", "WebGL"]
  },
  {
    role: "Backend Architect",
    company: "DataCore Inc",
    period: "2018 - 2020",
    desc: "Designed scalable API infrastructure and real-time data pipelines. Migrated legacy monoliths to serverless architecture.",
    tech: ["Go", "PostgreSQL", "Docker"]
  }
];

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience-section" ref={containerRef} className="relative py-32 bg-space-950 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <Terminal className="text-neon-cyan" size={24} />
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-wider">
              System Logs
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-4 top-0 bottom-0 w-px bg-neon-cyan origin-top"
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 group"
              >
                {/* Node Point */}
                <div className="absolute left-[11px] top-2 w-2.5 h-2.5 bg-space-950 border border-neon-cyan rounded-full group-hover:bg-neon-cyan transition-colors duration-300 shadow-[0_0_10px_rgba(102,252,241,0.5)]" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-space-700 mt-1 font-mono text-sm">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-neon-teal border border-neon-teal/20 px-3 py-1 rounded-full bg-neon-teal/5">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-400 max-w-2xl mb-6 font-light leading-relaxed">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-space-700 bg-space-800/50 px-2 py-1 rounded hover:text-white hover:bg-space-800 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};