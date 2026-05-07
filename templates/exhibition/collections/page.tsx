"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { collections } from "@exhib/data/collections";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const CATEGORIES = ["All", "Sculpture", "Fresco", "Marble"] as const;
const LIMIT_PER_PAGE = 10;

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);

  // Filter items based on active category
  const filteredItems = collections.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  // Reset count whenever category changes
  useEffect(() => {
    setVisibleCount(LIMIT_PER_PAGE);
  }, [activeCategory]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + LIMIT_PER_PAGE);
  };

  // Helper function to get stable grid span based on original ID to avoid flickers on index change
  const getGridSpan = (id: string) => {
    // Generate a pseudo-random but stable number from the ID string
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const mod = hash % 4; // Use 4 types of spans
    
    if (mod === 0) return "md:col-span-8 aspect-[16/9]";
    if (mod === 1) return "md:col-span-4 aspect-[3/4]";
    if (mod === 2) return "md:col-span-6 aspect-square";
    return "md:col-span-6 aspect-square";
  };

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#F9F6F0] pt-40 pb-40">
      
      {/* Intro & Stats Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-end"
        >
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6 px-1">Archives</span>
            <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">Vatican <br /><span className="italic">Masterpieces</span></h1>
          </div>
          <div className="flex flex-col gap-8 border-l border-white/10 pl-8 md:pl-16">
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-sm">
              Discover a curated selection of masterpieces. Each piece encapsulates a milestone of human engineering and spiritual devotion.
            </p>
            <div className="flex gap-12 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-serif">{collections.length}</span>
                <span className="text-[8px] uppercase tracking-widest text-white/30">Total Exhibits</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif">54</span>
                <span className="text-[8px] uppercase tracking-widest text-white/30">Galleries</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Category Filter & Count */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-wrap items-center justify-between gap-8 border-b border-white/10 pb-8">
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-[0.3em] transition-all border ${
                  activeCategory === cat 
                  ? "bg-[#F9F6F0] text-[#0F0F0F] border-[#F9F6F0]" 
                  : "text-white/40 border-white/10 hover:border-white/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium">
            Showing {displayedItems.length} of {filteredItems.length} pieces
          </span>
        </div>
      </div>

      {/* Optimized Asymmetric Grid (Preventing Flickers) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 min-h-[500px]">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        >
          <AnimatePresence initial={false}>
            {displayedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`${getGridSpan(item.id)} relative group overflow-hidden bg-[#151515]`}
                >
                  <Link href={`/collections/${item.slug}`} className="block w-full h-full cursor-pointer">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-[2s] ease-out grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                         <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 mb-3 block">{item.tag}</span>
                         <h3 className="text-2xl md:text-4xl font-serif">
                            {item.title}
                         </h3>
                    </div>

                    <div className="absolute top-8 left-8 mix-blend-difference overflow-hidden">
                       <span className="text-[10px] font-mono opacity-50 block group-hover:-translate-y-full transition-transform duration-500">Exhibit</span>
                    </div>
                  </Link>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE BUTTON */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-32 flex justify-center"
          >
            <button 
              onClick={handleLoadMore}
              className="group flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F9F6F0] group-hover:text-[#0F0F0F] transition-all duration-500">
                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/40 group-hover:text-white transition-colors">
                Load More Masterpieces
              </span>
            </button>
          </motion.div>
        )}

        {filteredItems.length === 0 && (
          <div className="py-40 text-center w-full">
            <p className="text-xl font-serif italic text-white/30">No masterpieces found in this category.</p>
          </div>
        )}
      </div>

    </main>
  );
}

