"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";

import chair from "../../asset/chair.png";
import lamp from "../../asset/lamp.png";
import sofa from "../../asset/sofa.png";
import bed from "../../asset/bed.png";
import wardrobe from "../../asset/wardrobe.png";
import desk from "../../asset/desk.png";
import sidetable from "../../asset/sidetable.png";
import table from "../../asset/table.png";

const HERO_PRODUCTS = [
  { 
    id: 1, 
    name: "Sculptural Lounge Chair", 
    image: chair.src,
    subtitle: "New Arrival // 2026",
    title: "The Art of Living Well.",
    desc: "Experience unmatched comfort and timeless design with our handcrafted lounge series. A masterpiece in every detail."
  },
  { 
    id: 2, 
    name: "Architectural Table Lamp", 
    image: lamp.src,
    subtitle: "Limited Edition",
    title: "Illuminate Your Vision.",
    desc: "Sleek lines meet warm radiance. Our latest lighting system brings professional ambiance to any modern workspace."
  },
  { 
    id: 3, 
    name: "Minimalist Solid Oak Sofa", 
    image: sofa.src,
    subtitle: "Modern Classic",
    title: "Simplicity Reimagined.",
    desc: "Sustainability and aesthetics in perfect harmony. Designed for the discerning individual who values purity of form."
  }
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);
  };

  const current = HERO_PRODUCTS[index];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden selection:bg-[#1D1D1F] selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-40 pb-20 grid lg:grid-cols-2 gap-20 items-center min-h-[900px]">
        {/* Left: Content */}
        <div className="z-20 relative h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <span className="text-[14px] font-bold text-[#1A1A1A] tracking-[0.4em] uppercase mb-10 block">{current.subtitle}</span>
              <h1 className="text-[5vw] md:text-[6vw] font-bold text-[#1D1D1F] leading-[1.05] tracking-tighter mb-12 uppercase">
                {current.title.split('.').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}{i === 0 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              <p className="text-xl text-[#6E6E73] font-medium leading-relaxed max-w-lg mb-16">
                {current.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="px-12 py-5 bg-[#1A1A1A] text-white text-[15px] font-bold rounded-full hover:bg-black transition-all flex items-center gap-3">
                  Shop Piece <ArrowRight size={18} />
                </button>
                <button className="group flex items-center gap-4 text-[15px] font-bold text-[#1D1D1F] hover:text-[#1A1A1A] transition-all">
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                    <Play size={16} fill="currentColor" />
                  </div>
                  Watch Film
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Large Single Product Slider (Nukki Cut Style with Filter Fix) */}
        <div className="relative h-[850px] flex items-center justify-center lg:scale-110 xl:scale-125 transition-all">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300, scale: 0.8 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center p-0"
              >
                 <motion.img 
                   src={current.image} 
                   className="w-[110%] h-[110%] object-contain hover:scale-105 transition-transform duration-[2s] pointer-events-none" 
                   alt={current.name} 
                 />
              </motion.div>
            </AnimatePresence>
        </div>
      </div>

      {/* Globally Centered Slider Controls (Fixed Alignment) */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-10 z-30">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-white hover:border-black/20 transition-all shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          
          <div className="flex items-center gap-3">
            {HERO_PRODUCTS.map((_, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 rounded-full ${index === i ? "w-8 h-[2px] bg-black" : "w-1.5 h-1.5 bg-black/10"}`} 
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-white hover:border-black/20 transition-all shadow-sm hover:shadow-md"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
      </div>

    </section>
  );
};

export const CategoryNav = () => {
  const categories = [
    { name: "Sleeping",  image: bed.src,        id: "sleeping" },
    { name: "Wardrobe",  image: wardrobe.src,   id: "wardrobe" },
    { name: "Workspace", image: desk.src,       id: "workspace" },
    { name: "Lounge",    image: sofa.src,       id: "lounge" },
    { name: "Culinary",  image: table.src,      id: "culinary" },
    { name: "Seating",   image: chair.src,      id: "seating" },
    { name: "Exhibit",   image: lamp.src,       id: "exhibit" },
    { name: "Storage",   image: sidetable.src,  id: "storage" }
  ];

  return (
    <section className="bg-white py-16 border-b border-black/5 selection:bg-black selection:text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16">
          <span className="inline-block text-[10px] font-bold text-[#1A1A1A] tracking-[0.5em] uppercase mb-4 opacity-40">Explore Curated Series</span>
          <div className="h-[1px] w-12 bg-black/10 mx-auto" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 md:gap-4">
          {categories.map((cat, i) => (
            <Link key={i} href={`/furniture/category/${cat.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="w-full aspect-square mb-6 flex items-center justify-center p-4 transition-all duration-700 relative overflow-hidden">
                  <motion.img 
                    src={cat.image} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                    alt={cat.name} 
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-[11px] font-bold text-[#1D1D1F] uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-500">
                    {cat.name}
                  </h4>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
