"use client";

import { motion } from "framer-motion";
import { ArrowLeft, History, Info, Map } from "lucide-react";
import Link from "next/link";
import React from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function MuseumInfo() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen selection:bg-[#0A0A0A] selection:text-white pb-32 pt-24">

      {/* Hero Section - The Museum Legacy */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="/images/st_peters_exterior.png" 
            alt="The Vatican Sanctuary" 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="inline-block text-[10px] md:text-xs uppercase font-bold mb-8"
          >
            MUSEI VATICANI // 500 YEARS OF HERITAGE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-6xl md:text-[8vw] font-serif font-medium leading-none tracking-tighter"
          >
            The Soul of <br /> <span className="italic">Stone</span>
          </motion.h2>
        </div>
      </section>

      {/* Part 1: Historical Genesis (Combined Our Story + Timeline) */}
      <section className="max-w-7xl mx-auto px-6 mt-32 border-b border-neutral-100 pb-32">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-32 items-center mb-64"
        >
          <motion.div variants={fadeIn} className="space-y-12">
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-neutral-400">Chapter I</span>
            <h3 className="text-5xl md:text-7xl font-serif leading-tight">The Foundation <br /> of Light</h3>
            <p className="text-xl text-neutral-600 leading-relaxed font-light font-serif">
               Founded in 1506 with the discovery of the Laocoön, the Vatican Museums encompass five centuries of papal patronage and the relentless pursuit of artistic perfection.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="relative aspect-[4/5] bg-neutral-100 overflow-hidden shadow-2xl">
            <img src="/images/vatican_hallway.png" alt="Museum Corridor" className="w-full h-full object-cover grayscale-[0.3]" />
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-20 text-black/30">
             <History size={32} />
             <h2 className="text-2xl font-serif uppercase tracking-widest italic">A Line in Time.</h2>
          </div>
          <div className="flex flex-col gap-24 relative">
             <div className="absolute left-[20px] top-0 bottom-0 w-px bg-black/5" />
             {[
               { year: "1506", title: "Discovery of Laocoön", desc: "Pope Julius II purchasing the marble statue, which led to the foundation of the museum." },
               { year: "1512", title: "Sistine Ceiling Completed", desc: "Michelangelo unveils his masterpiece after four years of grueling work." },
               { year: "1771", title: "Clementine Museum", desc: "The creation of a public museum system by Pope Clement XIV." },
               { year: "1932", title: "New Pinacoteca", desc: "The opening of the current Pinacoteca buildings by Pope Pius XI." }
             ].map((evt, i) => (
               <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="pl-16 relative">
                 <div className="absolute left-[16px] top-4 w-2 h-2 rounded-full bg-black ring-8 ring-[#FAF9F6]" />
                 <span className="text-3xl font-serif italic mb-4 block text-black/10">{evt.year}</span>
                 <h4 className="text-lg font-bold uppercase tracking-[0.2em] mb-4">{evt.title}</h4>
                 <p className="text-sm text-black/60 font-light leading-relaxed max-w-xl">{evt.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Part 2: Sacred Architecture (Combined Sacred Vatican) */}
      <section className="py-40 bg-white border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <span className="text-[10px] uppercase tracking-[0.6em] text-black/40 mb-6 block font-bold">The Sanctuary</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">St. Peter's <br /><span className="italic">Basilica</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-32 items-center mb-64">
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[4/5] overflow-hidden shadow-2xl">
               <img src="/images/baldaquin.png" alt="Bernini's Baldaquin" className="w-full h-full object-cover grayscale-[0.2]" />
             </motion.div>
             <div className="space-y-12">
               <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">The High Altar</span>
               <h3 className="text-4xl md:text-6xl font-serif leading-tight">Bernini's <br /><span className="italic">Masterpiece</span></h3>
               <p className="text-lg text-neutral-600 font-light leading-relaxed font-serif">
                 Stand directly under Michelangelo's dome, Gian Lorenzo Bernini's bronze Baldaquin marks the burial site of Saint Peter. This monumental structure, 29 meters tall, is the defining center-point of the basilica.
               </p>
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] opacity-30">
                  <Info size={16} /> Construction: 1623—1634
               </div>
             </div>
          </div>

          <div className="mb-24 text-center">
            <span className="text-[10px] uppercase tracking-[0.6em] text-black/40 mb-6 block font-bold">The Silent Vatican</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">Papal <br /><span className="italic">Grottoes</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { name: "Saint Peter the Apostle", title: "The First Pope", desc: "Buried directly beneath the High Altar, his tomb is the foundation upon which the entire basilica was constructed.", img: "/images/papal_tombs.png" },
               { name: "Pope John Paul II", title: "The Great Pilgrim", desc: "His tomb remains one of the most visited sacred sites in the Christian world.", img: "/images/curator.png" },
               { name: "Pope Gregory the Great", title: "Doctor of the Church", desc: "Known for his contributions to liturgy and chant, his resting place is marked by austere yet magnificent marble work.", img: "/images/vatican_hallway.png" }
             ].map((item, i) => (
               <div key={i} className="group">
                 <div className="aspect-square bg-neutral-50 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                 </div>
                 <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-black/40 mb-2 block">{item.title}</span>
                 <h4 className="text-xl font-serif mb-4">{item.name}</h4>
                 <p className="text-sm font-light leading-relaxed text-black/60">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer Utility */}
      <section className="py-48 text-center px-6">
        <Map size={48} className="mx-auto mb-10 text-black/10" />
        <h4 className="text-4xl md:text-6xl font-serif mb-16 tracking-tighter">Visit the Archive.</h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
           <Link href="/exhibition/exhibitions">
             <button className="px-16 py-6 bg-[#0A0A0A] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:px-20 transition-all">Explore Galleries</button>
           </Link>
        </div>
      </section>
    </main>
  );
}
