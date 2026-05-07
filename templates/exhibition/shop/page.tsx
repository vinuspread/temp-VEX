"use client";

import { motion } from "framer-motion";
import { Filter, ChevronDown, ShoppingBag, Heart } from "lucide-react";
import React from "react";

const products = [
  { id: 1, name: "Unicorn Limited Edition", price: "$4,200", img: "/images/gundam-unicorn.jpg", category: "Nano Series" },
  { id: 2, name: "Sazabi Executive Piece", price: "$5,850", img: "/images/gundam-sazabi.jpg", category: "Elite" },
  { id: 3, name: "Nu-Gundam Classic", price: "$3,400", img: "/images/gundam-nu.jpg", category: "Icons" },
  { id: 4, name: "Project-01 Prototype", price: "$2,900", img: "/images/project-1.jpg", category: "Prototype" },
  { id: 5, name: "Project-02 Advanced", price: "$3,100", img: "/images/project-2.jpg", category: "Advanced" },
  { id: 6, name: "Project-03 Ultimate", price: "$6,500", img: "/images/project-3.jpg", category: "Ultimate" },
];

export default function ShopPage() {
  return (
    <main className="pt-32 pb-24 bg-luxury-beige min-h-screen">
      {/* Header Space */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter italic">The Collection</h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-luxury-black/10 pb-8">
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-luxury-gray">
            <span className="text-luxury-black cursor-pointer">All (24)</span>
            <span className="cursor-pointer hover:text-luxury-black transition-colors">Nano Series</span>
            <span className="cursor-pointer hover:text-luxury-black transition-colors">Elite</span>
            <span className="cursor-pointer hover:text-luxury-black transition-colors">Icons</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
              Filter <Filter size={14} />
            </button>
            <button className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
              Sort by <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-luxury-cream mb-6 overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1s]"
                />
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-colors">
                    <Heart size={16} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-white text-[10px] uppercase font-bold tracking-[0.3em] flex items-center justify-center gap-2">
                    Quick Add <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-luxury-gray mb-1">{product.category}</p>
                  <h4 className="text-xl font-serif tracking-tight group-hover:italic transition-all">{product.name}</h4>
                </div>
                <span className="font-serif text-lg tracking-tighter">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-40 flex justify-center gap-4 text-[10px] uppercase font-bold tracking-widest">
        <span className="text-luxury-black border-b border-black pb-1">01</span>
        <span className="text-luxury-gray hover:text-luxury-black cursor-pointer transition-colors">02</span>
        <span className="text-luxury-gray hover:text-luxury-black cursor-pointer transition-colors">03</span>
        <span className="ml-4 text-luxury-gray hover:text-luxury-black cursor-pointer transition-colors flex items-center gap-2">
          Next <ArrowRight size={14} />
        </span>
      </div>
    </main>
  );
}

import { ArrowRight } from "lucide-react";
