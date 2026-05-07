"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black selection:bg-white selection:text-black">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="/images/hero_custom_2.jpg" 
          alt="Luxury Fashion Hero" 
          className="w-full h-full object-cover grayscale brightness-75"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="max-w-5xl"
        >
          <span className="text-[12px] uppercase tracking-[1em] font-bold mb-12 block opacity-60">
            ESTABLISHED 2026
          </span>
          <h1 className="text-[6vw] md:text-[5vw] font-bold tracking-[-0.04em] uppercase leading-[1] mb-16 drop-shadow-2xl">
            LUXURY BRAND<br />
            <span className="text-white/40 italic">NEVER FADES</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button className="px-16 py-6 bg-white text-black text-[12px] font-bold tracking-[0.4em] hover:bg-black hover:text-white transition-all border border-white uppercase">
              EXPLORE COLLECTION
            </button>
            <button className="text-[12px] font-bold uppercase tracking-[0.4em] border-b border-white/30 pb-2 hover:border-white transition-all">
              WATCH CAMPAIGN
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
