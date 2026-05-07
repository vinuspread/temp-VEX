"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MousePointerClick, Headphones } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";
import { collections } from "@exhib/data/collections";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  // Horizontal Scroll Setup
  const horizontalRef = useRef(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });
  
  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-55%"]);

  return (
    <main className="relative bg-[#0F0F0F] text-[#F9F6F0] selection:bg-[#F9F6F0] selection:text-[#0F0F0F]">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-[#0F0F0F]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0F0F0F] z-10" />
          <img 
            src="/images/hero_bg.png" 
            alt="Vatican Ceiling"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-20 pointer-events-none mt-20"
        >
          <motion.span variants={fadeIn} className="inline-block text-[10px] md:text-xs uppercase tracking-[0.6em] font-medium mb-8 text-[#F9F6F0]/70">
            Musei Vaticani — vinuspread Curation
          </motion.span>
          <motion.h2 
            variants={fadeIn}
            className="text-6xl md:text-[8vw] font-serif font-medium leading-[0.9] tracking-tighter mb-12 text-[#F9F6F0]"
          >
            THE ETERNAL <br /> 
            <span className="italic font-light text-[#F9F6F0]/80">Masterpieces</span>
          </motion.h2>
          <motion.div variants={fadeIn} className="pointer-events-auto mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/exhibition/collections" className="px-10 py-4 border border-[#F9F6F0]/30 text-xs uppercase tracking-[0.4em] hover:bg-[#F9F6F0] hover:text-[#0F0F0F] transition-colors duration-500 backdrop-blur-sm">
              Begin Journey
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Audio Guide Highlights Section */}
      <section className="py-24 bg-[#F9F6F0] text-[#0F0F0F]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 border-y border-black/10 py-16 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-black/40 block mb-4">Enhance Your Experience</span>
            <h3 className="text-3xl font-serif mb-4">Official Audio Guide</h3>
            <p className="text-black/60 font-light max-w-md text-sm leading-relaxed">
              Immerse yourself deeper into the Vatican collections with our newly recorded, multi-lingual audio guide. Featuring insights from world-renowned art historians.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button className="w-16 h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-[#F9F6F0] transition-colors">
              <Headphones size={24} />
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-bold">Listen Preview</span>
              <span className="text-xs text-black/40">0:00 / 1:45</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Horizontal Scroll Gallery Section */}
      <section ref={horizontalRef} className="relative bg-[#0F0F0F]" style={{ height: "400vh" }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
          
          <div className="px-12 md:px-24 mb-16">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40 block mb-4">Collection 01</span>
            <h3 className="text-4xl md:text-6xl font-serif">Renaissance & Antiquity</h3>
          </div>

          <motion.div style={{ x }} className="flex gap-16 md:gap-24 px-12 md:px-24 pb-20 w-[200vw] lg:w-[150vw]">
            {collections.map((item, i) => (
              <Link key={i} href={`/exhibition/collections/${item.slug}`} className="group relative w-[70vw] md:w-[35vw] lg:w-[25vw] shrink-0 cursor-pointer block">
                <div className="relative aspect-[3/4] bg-[#1A1A1A] overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xl">
                      <MousePointerClick size={20} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col border-t border-white/10 pt-6 px-1">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h4 className="text-xl md:text-2xl font-serif tracking-tight leading-snug break-words">{item.title}</h4>
                    <span className="text-[9px] whitespace-nowrap uppercase tracking-widest text-white/50 bg-white/5 px-2 py-1 h-fit">{item.tag}</span>
                  </div>
                  <div className="flex justify-between text-xs font-light tracking-widest text-white/60">
                    <span className="truncate pr-4">{item.artist}</span>
                    <span className="shrink-0">{item.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curator Note Segment */}
      <section className="py-40 bg-[#F9F6F0] text-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 max-w-lg"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-black/40 mb-10 block">Curator's Note</span>
            <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-[1.1] tracking-tighter">Divine <br /><span className="italic">Proportions</span></h3>
            <p className="text-lg text-black/70 leading-relaxed mb-12 font-light">
              The Vatican Museums house the defining works of Western civilization. 
              Here, we present a curated digital experience that bridges the tactile genius of Renaissance masters with modern interaction design. Every brushstroke and chisel mark speaks of human aspiration reaching for the divine.
            </p>
            <Link href="/exhibition/curator-note" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] group pb-2 border-b border-black">
              Read the Essay <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-300" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl"
          >
             <img 
               src="/images/curator.png" 
               alt="Vatican Museum Interior"
               className="w-full h-full object-cover grayscale"
             />
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}

