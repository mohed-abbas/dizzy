import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Layout, Database, Smartphone } from 'lucide-react';

const services = [
  {
    title: "TECH & SOFTWARE CONSULTING",
    id: "01",
    icon: <Code size={32} />,
    bg: "bg-white",
    text: "text-black",
    col: "md:col-span-1"
  },
  {
    title: "DEDICATED DEVELOPMENT TEAM",
    id: "02",
    icon: <Database size={32} />,
    bg: "bg-white",
    text: "text-black",
    col: "md:col-span-1"
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    id: "03",
    icon: <Smartphone size={32} />,
    bg: "bg-white",
    text: "text-black",
    col: "md:col-span-1"
  },
  {
    title: "CREATING INTUITIVE UI/UX DESIGN",
    id: "04",
    icon: <Layout size={32} />,
    bg: "bg-white",
    text: "text-black",
    col: "md:col-span-1"
  },
  {
    title: "CONVERSION OPTIMISED WEBSITES",
    id: "05",
    icon: <ArrowUpRight size={32} />,
    bg: "bg-white",
    text: "text-black",
    col: "md:col-span-1"
  },
  {
    title: "CUSTOM WEB APP DEVELOPMENT",
    id: "06",
    icon: <Code size={32} />,
    bg: "bg-white",
    text: "text-black",
    col: "md:col-span-1"
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-purple relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative h-[300px] p-8 flex flex-col justify-between 
                rounded-2xl ${service.bg} ${service.text}
                hover:-translate-y-2 hover:shadow-[8px_8px_0px_#CCFF00] transition-all duration-300 border-2 border-transparent hover:border-black
                cursor-pointer
              `}
            >
              <h3 className="text-4xl font-display uppercase leading-tight max-w-[80%] transition-all duration-300 group-hover:tracking-wide">
                {service.title}
              </h3>
              
              <div className="flex justify-between items-end border-t border-black/10 pt-4">
                <span className="font-mono text-sm opacity-50 transition-opacity group-hover:opacity-100">SERVICE / {service.id}</span>
                <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center group-hover:bg-brand-lime group-hover:text-black transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};