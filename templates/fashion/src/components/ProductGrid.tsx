"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NEW_ARRIVALS = [
  { id: 1, name: 'WOOL BUCKET HAT', price: '$120.00', image: '/images/wool_hat.png' },
  { id: 2, name: 'CLASSIC TRENCH COAT', price: '$850.00', image: '/images/trench_coat.png' },
  { id: 3, name: 'MINIMALIST BACKPACK', price: '$350.00', image: '/images/backpack.png' },
  { id: 4, name: 'PREMIUM LEATHER BOOTS', price: '$480.00', image: '/images/boots.png' },
  { id: 5, name: 'SILK EVENING DRESS', price: '$1,200.00', image: '/images/silk_dress.png' },
  { id: 6, name: 'COTTON BASICS TEE', price: '$65.00', image: '/images/basic_tee.png' }
];

export const ProductGrid = () => {
  return (
    <section className="py-40 bg-white selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-24">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">EDITOR'S PICK [001]</span>
            <h2 className="text-[3vw] font-bold tracking-tighter uppercase leading-none">NEW ARRIVALS</h2>
          </div>
          <Link href="#" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] border-b border-black/10 pb-2 hover:border-black transition-all">
            VIEW ALL COLLECTION
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
          {NEW_ARRIVALS.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-[#F5F5F7] overflow-hidden mb-8 relative">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
              </div>
              <div className="space-y-3">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.2em]">{p.name}</h3>
                <p className="text-[12px] text-black/40 font-bold">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BrandSection = () => {
    return (
        <section className="relative py-60 overflow-hidden group bg-black text-white">
          <div className="absolute inset-0">
            <img 
              src="/images/branding_custom.jpg" 
              alt="Branding Background" 
              className="w-full h-full object-cover grayscale brightness-50 opacity-40 group-hover:scale-110 transition-transform duration-[5s]"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
  
          <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
            <p className="text-[10px] uppercase tracking-[0.8em] mb-12 font-bold opacity-50">
              THE vinuspread ATTITUDE
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-20 leading-tight">
              CRAFTING SILHOUETTES THAT SPEAK <span className="italic text-white/40 font-light">VOLUMES THROUGH SILENCE.</span>
            </h2>
            <div className="w-24 h-[1px] bg-white/20 mx-auto mb-20" />
            <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.4em] border-b border-white/40 pb-2 hover:border-white transition-all inline-block hover:opacity-50">
              LEARN MORE
            </Link>
          </div>
        </section>
    );
};
