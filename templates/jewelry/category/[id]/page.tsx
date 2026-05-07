"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Heart, ShoppingBag, Filter, Grid, List } from "lucide-react";

export default function JewelryCategoryPage({ params }: { params: { id: string } }) {
  const products = [
    { name: "Diamond Solitaire Ring", price: "$2,250", img: "/images/jewelry_ring.png", tag: "Engagement" },
    { name: "Radiant Pearl Pendant", price: "$1,850", img: "/images/jewelry_pendant.png", tag: "Seasonal" },
    { name: "Tiffany-Blue Sapphire Bangle", price: "$1,200", img: "/images/jewelry_hero_main.png", tag: "Luxury" },
    { name: "Rose Gold Infinity Band", price: "$950", img: "/images/jewelry_ring.png", tag: "Essential" },
  ];

  return (
    <main className="bg-[#F9F6F0] selection:bg-[#70C5BB] selection:text-white font-sans text-neutral-900 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-neutral-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-500">
            <Link href="/jewelry/category/collections" className="text-[#70C5BB]">Collections</Link>
            <Link href="/jewelry/category/engagement" className="hover:text-[#70C5BB] transition-colors">Engagement</Link>
            <Link href="/jewelry/category/high-jewelry" className="hover:text-[#70C5BB] transition-colors">High Jewelry</Link>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/jewelry" className="text-3xl font-serif tracking-[0.25em] font-normal uppercase text-neutral-900">vinuspread</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/jewelry/cart" className="flex items-center gap-2">
              <ShoppingBag size={20} strokeWidth={1.2} />
              <span className="text-[9px] mt-0.5 font-bold">(0)</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-48 pb-32 px-6 max-w-[1440px] mx-auto">
        <div className="mb-24 flex flex-col items-center text-center space-y-8">
           <span className="text-[10px] uppercase font-bold tracking-[0.6em] text-[#70C5BB]">The Boutique</span>
           <h1 className="text-6xl font-serif tracking-tight uppercase">Fine Jewelry Collections</h1>
           <p className="max-w-xl text-sm font-light text-neutral-500 leading-relaxed italic">
             From the eternal brilliance of diamonds to the serene glow of pearls, explore a curated selection of vinuspread's finest masterpieces.
           </p>
        </div>

        {/* Toolbar */}
        <div className="border-y border-neutral-200 py-8 mb-20 flex justify-between items-center text-[10px] uppercase font-bold tracking-[0.3em]">
           <button className="flex items-center gap-4 hover:text-[#70C5BB] transition-all">
             <Filter size={14} /> Filter & Sort
           </button>
           <div className="hidden md:flex items-center gap-12">
             <span className="text-neutral-300">4 Items Found</span>
             <div className="flex gap-4">
               <Grid size={16} className="text-[#70C5BB]" />
               <List size={16} className="text-neutral-300" />
             </div>
           </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-white shadow-sm border border-neutral-100">
                <img src={item.img} className="w-full h-full object-cover grayscale-[0.2] transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0" alt={item.name} />
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-4 rounded-full bg-white/80 backdrop-blur-md text-neutral-400 hover:text-[#70C5BB] shadow-xl">
                    <Heart size={18} strokeWidth={1} />
                  </button>
                </div>
              </div>
              <div className="space-y-3 text-center">
                <h4 className="text-lg font-serif font-light text-neutral-800 tracking-wide group-hover:text-[#70C5BB] transition-colors">{item.name}</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
