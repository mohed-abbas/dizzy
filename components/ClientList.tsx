import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  "ANTARA", "AGMIS", "BIOMA", "BMI LIETUVA", "BROKEN PLANET", "BUTINA", 
  "ESKIMI", "EVERGROWTH", "FERIKAS", "FAVRO", "FINPASS", "KILO.HEALTH",
  "CITY PRO", "LOGIFLY", "LECTRUM", "MONOTWO", "MOKYKLĖLĖ", "PLUNGĖS TURIZMAS",
  "RIMTI", "SCORIFY", "SPEIZ", "STRATO", "ŽALIASIS REGIONAS", "TUKADA",
  "FINTEGRY", "FRONTIT", "DIGIKLASĖ", "VIKO", "WESRELE", "BETTER MARKET"
];

export const ClientList: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-display uppercase text-brand-lime mb-6 leading-none cursor-default transition-all duration-500 hover:tracking-widest"
            >
              Trusted By<br/>The Fastest<br/>Growing<br/>Companies
            </motion.h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-lime text-black px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-white transition-colors"
            >
              Get in Touch
            </motion.button>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {clients.map((client, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <div className="w-2 h-2 bg-white/20 group-hover:bg-brand-lime transition-all duration-300 rounded-full group-hover:scale-150" />
                  <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider group-hover:tracking-widest duration-300">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};