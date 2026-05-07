"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Heart, User, ShoppingBag, Menu, ArrowRight, Play } from "lucide-react";
import React, { useRef } from "react";
import theme from "./theme.json";
import { TemplateWrapper } from "@/components/TemplateWrapper";

export default function JewelryPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const products = [
    { name: "Diamond Solitaire Ring", price: "$4,250", img: "/images/jewelry_ring.png", tag: "Engagement" },
    { name: "Radiant Pearl Pendant", price: "$1,850", img: "/images/jewelry_pendant.png", tag: "Seasonal" },
    { name: "Tiffany-Blue Sapphire Bangle", price: "$12,200", img: "/images/jewelry_hero_main.png", tag: "Luxury" },
    { name: "Rose Gold Infinity Band", price: "$3,400", img: "/images/jewelry_ring.png", tag: "Essential" },
  ];

  return (
    <TemplateWrapper theme={theme}>
      <main ref={containerRef} className="bg-[#F9F6F0] selection:bg-[#70C5BB] selection:text-white font-sans text-neutral-900">
        {/* 1. Global Navigation - Tiffany/J.Estina Hybrid */}
        <header className="fixed top-0 w-full z-50 border-b border-neutral-100 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
            <nav className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-500">
              <Link href="/jewelry/category/collections" className="hover:text-[#70C5BB] transition-colors">Collections</Link>
              <Link href="/jewelry/category/engagement" className="hover:text-[#70C5BB] transition-colors">Engagement</Link>
              <Link href="/jewelry/category/high-jewelry" className="hover:text-[#70C5BB] transition-colors">High Jewelry</Link>
              <Link href="/jewelry/category/gifts" className="hover:text-[#70C5BB] transition-colors">Gifts</Link>
            </nav>

            <button className="lg:hidden p-2"><Menu size={20} /></button>

            <Link href="/jewelry" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="text-3xl font-serif tracking-[0.25em] font-normal uppercase text-neutral-900">vinuspread</h1>
            </Link>

            <div className="flex items-center gap-6">
              <button className="hover:text-[#70C5BB] transition-colors"><Search size={20} strokeWidth={1.2} /></button>
              <button className="hover:text-[#70C5BB] transition-colors hidden md:block"><Heart size={20} strokeWidth={1.2} /></button>
              <button className="hover:text-[#70C5BB] transition-colors"><User size={20} strokeWidth={1.2} /></button>
              <Link href="/jewelry/cart" className="group flex items-center gap-2">
                <ShoppingBag size={20} strokeWidth={1.2} className="group-hover:text-[#70C5BB] transition-colors" />
                <span className="text-[9px] mt-0.5 font-bold">(0)</span>
              </Link>
            </div>
          </div>
        </header>

        {/* 2. Hero Section - The Radiance of Forever */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/images/jewelry_hero_main.png" 
              className="w-full h-full object-cover grayscale-[0.2]"
              alt="vinuspread Fine Jewelry Hero"
            />
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs uppercase text-white mb-8 block tracking-[0.6em] font-bold opacity-80 drop-shadow-lg">
                vinuspread Fine Jewelry
              </span>
              <h2 className="text-[10vw] md:text-[6vw] font-serif text-white mb-20 leading-[1.1] drop-shadow-2xl">
                 The Radiance <br className="hidden md:block" /> 
                 <span className="italic font-light">of Forever</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <button className="px-16 py-6 bg-white text-neutral-900 text-xs font-bold uppercase tracking-[0.4em] hover:bg-[#70C5BB] hover:text-white transition-all shadow-2xl">
                  Explore The Edition
                </button>
                <button className="group flex items-center gap-5 text-white hover:text-[#70C5BB] transition-all text-xs uppercase tracking-[0.3em] font-bold">
                  Our Heritage <div className="w-10 h-px bg-white group-hover:bg-[#70C5BB] group-hover:w-20 transition-all duration-700" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. New Arrivals - Diamond Showcase */}
        <section className="py-48 px-6 md:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
              <div>
                <span className="text-xs text-[#70C5BB] mb-6 block tracking-[0.4em] font-bold uppercase">The Boutique</span>
                <h3 className="text-6xl font-serif font-light tracking-tight">The Modern Classics</h3>
              </div>
              <div className="flex items-center gap-16 text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold">
                 <button className="hover:text-neutral-900 border-b border-transparent hover:border-[#70C5BB] transition-all pb-2">Rings</button>
                 <button className="hover:text-neutral-900 border-b border-transparent hover:border-[#70C5BB] transition-all pb-2">Necklaces</button>
                 <button className="hover:text-neutral-900 border-b border-transparent hover:border-[#70C5BB] transition-all pb-2">Earrings</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {products.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] mb-10 overflow-hidden bg-[#FDFBF9] shadow-sm border border-neutral-100">
                    <img 
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                    />
                    <div className="absolute top-6 right-6 z-10">
                      <button className="p-4 rounded-full bg-white/60 backdrop-blur-md text-neutral-400 hover:text-[#70C5BB] shadow-xl transition-colors">
                        <Heart size={20} strokeWidth={1} />
                      </button>
                    </div>
                    <div className="absolute top-6 left-6">
                       <span className="text-[9px] bg-neutral-900 text-white px-3 py-1.5 uppercase font-bold tracking-widest">{item.tag}</span>
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                      <button className="w-full py-5 bg-[#70C5BB] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-900 shadow-2xl">
                        Request Appointment
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3 text-center">
                    <h4 className="text-lg font-serif font-light text-neutral-800 tracking-wide group-hover:text-[#70C5BB] transition-colors">{item.name}</h4>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Craftsmanship - The Alchemy of Brilliance */}
        <section className="py-60 px-6 md:px-12 bg-[#F9F6F0]">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-40 items-center">
            <div className="relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5 }}
                 className="aspect-[4/5] overflow-hidden shadow-2xl"
               >
                 <img src="/images/jewelry_craft.png" alt="Jewelry Craftsmanship" className="w-full h-full object-cover" />
               </motion.div>
               <div className="absolute -bottom-16 -right-16 w-80 bg-white p-12 hidden md:block shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-neutral-100">
                  <span className="text-[#70C5BB] text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">Artisan Technique</span>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light font-serif italic">
                    "Every facet is a dialogue between light and stone, hand-polished to achieve vinuspread's signature brilliance."
                  </p>
               </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <span className="text-[11px] uppercase tracking-[0.5em] text-neutral-400 font-bold">The Heritage</span>
              <h3 className="text-[5vw] font-serif leading-[1] text-neutral-900 tracking-tight">Hand-Set <br /> <span className="italic font-light">With Soul</span></h3>
              <p className="text-lg text-neutral-600 font-light leading-relaxed max-w-md">
                At vinuspread, we believe a jewel is more than a material; it is a silent observer of life's most precious moments. Our artisans spend hundreds of hours perfecting a single setting.
              </p>
              <div className="flex items-center gap-8 group cursor-pointer pt-6">
                <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[#70C5BB] group-hover:border-[#70C5BB] group-hover:text-white transition-all duration-500">
                  <Play size={18} fill="currentColor" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold group-hover:translate-x-2 transition-transform duration-500">Discover The Process</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Footer - Elevated Luxury */}
        <footer className="bg-white text-neutral-900 pt-48 pb-20 px-6 md:px-12 border-t border-neutral-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-40">
              <div className="md:col-span-2">
                <h2 className="text-5xl font-serif mb-12 tracking-widest uppercase">vinuspread</h2>
                <p className="text-sm text-neutral-500 max-w-sm leading-relaxed font-light tracking-wide">
                  Established 2026. A global boutique dedicated to the art of fine jewelry and the transcendence of luxury.
                </p>
              </div>
              <div>
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-12 text-neutral-400">vinuspread</h5>
                <ul className="flex flex-col gap-6 text-[11px] uppercase tracking-widest text-neutral-600">
                  <li className="hover:text-[#70C5BB] cursor-pointer transition-colors"><Link href="/jewelry/boutique">Find a Boutique</Link></li>
                  <li className="hover:text-[#70C5BB] cursor-pointer transition-colors"><Link href="/jewelry/history">Our History</Link></li>
                  <li className="hover:text-[#70C5BB] cursor-pointer transition-colors"><Link href="/jewelry/guide">Gifting Guide</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-12 text-neutral-400">Services</h5>
                <ul className="flex flex-col gap-6 text-[11px] uppercase tracking-widest text-neutral-600">
                  <li className="hover:text-[#70C5BB] cursor-pointer transition-colors">Client Advisor</li>
                  <li className="hover:text-[#70C5BB] cursor-pointer transition-colors">Care & Repair</li>
                  <li className="hover:text-[#70C5BB] cursor-pointer transition-colors">Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-neutral-100 gap-12 text-[10px] uppercase tracking-[0.6em] text-neutral-300">
              <span>© 2026 vinuspread. All rights reserved.</span>
              <div className="flex gap-16">
                 <span className="hover:text-neutral-900 cursor-pointer transition-colors">Privacy</span>
                 <span className="hover:text-neutral-900 cursor-pointer transition-colors">Legal</span>
              </div>
              <span>Crafted for Luxury.</span>
            </div>
          </div>
        </footer>
      </main>
    </TemplateWrapper>
  );
}
