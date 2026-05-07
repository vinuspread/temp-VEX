"use client";

import { motion } from "framer-motion";
import React from "react";

export default function CuratorNotePage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#0F0F0F] pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-black/50 block mb-6">Editorial</span>
          <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">Divine <br /><span className="italic">Proportions</span></h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="aspect-[21/9] w-full bg-black mb-24 overflow-hidden relative"
        >
          <img 
            src="/images/curator.png" 
            alt="Curator Note Architecture"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="prose prose-lg md:prose-xl font-serif mx-auto text-black/80 leading-relaxed"
        >
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:mt-2">
            The Vatican Museums stand not only as a repository of historical objects, but as a monument to the relentless human pursuit of perfection. Walking through its halls is akin to walking through the physical manifestation of the Renaissance mind.
          </p>
          <p className="mt-8">
            Our curation seeks to extract the structural brilliance from the overwhelming ornamentation. By highlighting works like the <em>Laocoön</em> or the delicate <em>Pietà</em> in an isolated, digital space, we allow their raw theological and emotional gravity to echo without the noise of the physical gallery crowd.
          </p>
          <p className="mt-8">
            Every brushstroke captured by Raphael, every chisel strike endured by Michelangelo — these are not relics of the past. They are continuing dialogues on the nature of humanity, suffering, knowledge, and divinity.
          </p>
          
          <div className="border-t border-black/20 mt-20 pt-10">
            <span className="text-xs uppercase tracking-[0.4em] font-bold block mb-2">Curator</span>
            <span className="font-serif italic text-2xl">vinuspread Exhibition</span>
          </div>
        </motion.article>

      </div>
    </main>
  );
}


