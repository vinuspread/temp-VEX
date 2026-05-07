"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layers, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const specialExhibitions = [
  { 
    name: "Leonardo da Vinci: The Divine Painter", 
    period: "2026.04.12 - 08.31",
    venue: "Main Gallery, Raphael Wing",
    desc: "A high-fidelity retrospective of the master's most delicate paintings, presented in a state-of-the-art interactive digital space.", 
    img: "/images/exhibition_poster_vinci.png", 
    tag: "High Renaissance" 
  },
  { 
    name: "Greek Brilliance: Classical Sculptures", 
    period: "2026.05.20 - 10.15",
    venue: "Statue Hall, Clementine Wing",
    desc: "Experience the tactile genius of ancient Greek masters, from the Laocoön to the Apollo Belvedere, in global resolution.", 
    img: "/images/exhibition_poster_greek.png", 
    tag: "Classical Antiquity" 
  }
];

const permanentGalleries = [
  { name: "Sistine Chapel", img: "/images/hero_bg.png", desc: "Michelangelo's zenith." },
  { name: "The Map Gallery", img: "/images/vatican_hallway.png", desc: "Italy's topographical legacy." }
];

export default function SpecialExhibitions() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-[#F9F6F0] selection:bg-[#F9F6F0] selection:text-[#0A0A0A] pb-32 pt-32">


      {/* Intro Section */}
      <section className="px-6 md:px-12 mb-40 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/30 mb-8 block font-sans">Current Feature</span>
          <h2 className="text-5xl md:text-[7vw] font-serif leading-none tracking-tighter mb-12 italic">Special <br />Exhibitions.</h2>
        </motion.div>
      </section>

      {/* Poster Style Special Exhibitions */}
      <section className="max-w-[1440px] mx-auto px-6 space-y-40 mb-60">
        {specialExhibitions.map((exhib, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div className={`relative aspect-[3/4] md:aspect-[4/5] overflow-hidden shadow-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img 
                src={exhib.img} 
                alt={exhib.name} 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
            </div>
            
            <div className={`space-y-12 ${i % 2 === 1 ? 'lg:order-1 lg:text-right text-right' : ''}`}>
              <span className="text-[9px] uppercase font-bold tracking-[0.6em] text-white/30 block mb-10 font-sans">{exhib.tag}</span>
              <h3 className="text-4xl md:text-6xl font-serif tracking-tighter leading-none mb-10">{exhib.name}</h3>
              
              <div className={`flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white/40 font-sans ${i % 2 === 1 ? 'lg:items-end' : ''}`}>
                 <div className="flex items-center gap-3"><Calendar size={14} strokeWidth={1.5} /> {exhib.period}</div>
                 <div className="flex items-center gap-3"><MapPin size={14} strokeWidth={1.5} /> {exhib.venue}</div>
              </div>

              <p className={`text-lg text-white/60 font-light leading-relaxed max-w-md font-serif italic ${i % 2 === 1 ? 'ml-auto' : ''}`}>
                "{exhib.desc}"
              </p>

              <div className={`pt-10 ${i % 2 === 1 ? 'flex justify-end' : ''}`}>
                <Link href="/exhibition/collections" className="inline-flex items-center gap-6 text-xs font-bold uppercase tracking-[0.5em] group/btn px-10 py-5 border border-white/20 hover:bg-white hover:text-black transition-all">
                   View Catalog <ArrowRight size={14} className="group-hover/btn:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Permanent Gallery Selection */}
      <section className="py-40 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/20 block mb-6">Discovery</span>
            <h3 className="text-4xl font-serif">Permanent Collection</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {permanentGalleries.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-[21/9] overflow-hidden mb-8 bg-white/5 relative">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50 group-hover:brightness-100" />
                   </div>
                   <h4 className="text-xl font-serif mb-2 tracking-wide">{item.name}</h4>
                   <p className="text-xs text-white/40 uppercase tracking-widest">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

    </main>
  );
}
