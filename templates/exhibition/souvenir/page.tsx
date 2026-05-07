"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShoppingBag, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Laocoön Scale Replica",
    category: "Artifact Replicas",
    price: "€240.00",
    img: "/images/museum_replica_laocoon.png",
    desc: "A hand-finished resin replica of the Trojan priest, capturing every sinew in 1/8 scale."
  },
  {
    id: 2,
    name: "Vatican Archives: 500 Years",
    category: "Exhibition Catalogs",
    price: "€85.00",
    img: "/images/museum_catalog_vatican.png",
    desc: "The definitive monograph of the museum's history, bound in premium linen."
  },
  {
    id: 3,
    name: "St. Peter's Nocturnal Print",
    category: "Fine Art Prints",
    price: "€120.00",
    img: "/images/museum_print_st_peters.png",
    desc: "Limited edition Giclée print on 300gsm Hahnemühle paper."
  },
  {
    id: 4,
    name: "Pietà Silver Pendant",
    category: "Jewelry",
    price: "€55.00",
    img: "/images/museum_jewelry_pieta.png",
    desc: "Sterling silver commemorative medal featuring Michelangelo's masterpiece."
  },
  {
    id: 5,
    name: "Apollo Belvedere Bust",
    category: "Artifact Replicas",
    price: "€180.00",
    img: "/images/museum_apollo_bust.png",
    desc: "A bronze-casted miniature bust of the Apollo Belvedere, reflecting classical perfection."
  },
  {
    id: 6,
    name: "Renaissance Sketchbook",
    category: "Stationery",
    price: "€32.00",
    img: "/images/museum_sketchbook.png",
    desc: "Hand-stitched leather sketchbook with archival-grade paper for artists."
  },
  {
    id: 7,
    name: "Papal Seal Wax Set",
    category: "Stationery",
    price: "€45.00",
    img: "/images/museum_wax_seal.png",
    desc: "Authentic brass seal with three sticks of crimson Vatican wax."
  },
  {
    id: 8,
    name: "Raphael's Angels Silk Scarf",
    category: "Lifestyle",
    price: "€110.00",
    img: "/images/museum_silk_scarf.png",
    desc: "100% silk scarf featuring detail from the Sistine Madonna."
  },
  {
    id: 9,
    name: "Augustus of Prima Porta Bust",
    category: "Artifact Replicas",
    price: "€320.00",
    img: "/images/museum_replica_laocoon.png",
    desc: "Full-scale replica of the head of Augustus, the first Roman Emperor."
  },
  {
    id: 10,
    name: "Archival Ink Fountain Pen",
    category: "Stationery",
    price: "€145.00",
    img: "/images/museum_fountain_pen.png",
    desc: "Handcrafted ebony fountain pen with a 14k gold nib."
  },
  {
    id: 11,
    name: "The Sistine Chapel Blueprint",
    category: "Fine Art Prints",
    price: "€95.00",
    img: "/images/museum_blueprint.png",
    desc: "Architectural blueprint print showing the structural genius of the chapel."
  },
  {
    id: 12,
    name: "Romanesque Bronze Candle",
    category: "Lifestyle",
    price: "€65.00",
    img: "/images/museum_bronze_candle.png",
    desc: "Hand-poured beeswax candle in a cast bronze vessel."
  },
  {
    id: 13,
    name: "Vatican Museum Tote Bag",
    category: "Lifestyle",
    price: "€25.00",
    img: "/images/museum_catalog_vatican.png",
    desc: "Premium heavyweight cotton tote with minimalist typography."
  }
];

const ITEMS_PER_PAGE = 12;

export default function SouvenirShop() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="bg-[#FAF9F6] min-h-screen pt-40 pb-32 selection:bg-[#0A0A0A] selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-black/40 block mb-6">The Museum Store</span>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none mb-8">Echos of <br /><span className="italic">History</span></h1>
          <p className="max-w-2xl mx-auto text-black/60 font-serif text-lg leading-relaxed">
            Curated objects that transmit the legacy of the Vatican Museums into the modern home. 
            Each piece is selected for its material integrity and theological depth.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 min-h-[1200px]">
          <AnimatePresence mode="wait">
            {currentItems.map((product, i) => (
              <motion.div 
                key={`${product.id}-${currentPage}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-black/5 overflow-hidden mb-8 relative">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[8px] uppercase tracking-[0.2em] bg-white text-black px-3 py-1.5 font-bold shadow-sm">{product.category}</span>
                  </div>
                </div>
                <div className="space-y-3 px-2">
                  <h3 className="font-serif text-xl tracking-tight leading-tight">{product.name}</h3>
                  <p className="text-xs text-black/50 line-clamp-2 font-serif italic leading-relaxed">{product.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-black/5">
                    <span className="text-sm font-bold tracking-[0.1em]">{product.price}</span>
                    <button className="text-[9px] uppercase tracking-[0.2em] font-bold border-b border-black/20 hover:border-black transition-colors pb-1">
                      Inquire
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-40 flex items-center justify-center gap-12 border-t border-black/10 pt-20">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold transition-all ${currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:-translate-x-2'}`}
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <div className="flex items-center gap-6">
               {[...Array(totalPages)].map((_, i) => (
                 <button 
                   key={i}
                   onClick={() => setCurrentPage(i + 1)}
                   className={`text-[10px] uppercase font-bold tracking-widest ${currentPage === i + 1 ? 'text-black underline underline-offset-8' : 'text-black/30 hover:text-black'}`}
                 >
                   0{i + 1}
                 </button>
               ))}
            </div>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold transition-all ${currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'hover:translate-x-2'}`}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Collections Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-12 md:p-20 border border-black/5"
        >
          <div className="max-w-xl">
             <h2 className="text-4xl font-serif italic mb-6 text-black tracking-tighter">Authentic Reproductions.</h2>
             <p className="text-black/60 font-serif leading-relaxed text-lg">
               All artifact replicas are produced in collaboration with the Vatican Pontifical Academy, 
               using high-precision 3D scans of the original works to ensure absolute fidelity to the source.
             </p>
          </div>
          <Link href="/exhibition/collections" className="group flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-bold bg-black text-white px-10 py-6 hover:bg-[#1a1a1a] transition-colors">
            Back to Collections <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
