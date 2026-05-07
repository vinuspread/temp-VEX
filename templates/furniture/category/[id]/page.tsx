"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, SlidersHorizontal, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { products } from "../../src/lib/data";
import themeData from "../../src/lib/theme.json";
import { Navbar } from "../../src/components/Navbar";
import { Footer } from "../../src/components/Footer";

const theme = themeData.theme;

export default function CategoryPage() {
  const { id } = useParams();
  const categoryName = typeof id === 'string' ? id.charAt(0).toUpperCase() + id.slice(1) : "Collection";

  // In a real app, we'd filter products by category. For now, we'll show a curated mix.
  const displayProducts = products.slice(0, 12);

  return (
    <main className="bg-white min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      
      {/* Category Header */}
      <section className="pt-48 pb-24 border-b border-black/5 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <Link href="/furniture" className="group flex items-center gap-2 text-[13px] font-bold text-[#6E6E73] hover:text-black transition-colors mb-12">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Showroom
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div>
              <span className="text-[12px] font-bold text-[#1A1A1A] tracking-[0.5em] uppercase mb-6 block">Curated Series</span>
              <h1 className="text-[6vw] font-bold text-[#1D1D1F] tracking-tighter leading-none uppercase">
                {categoryName}.
              </h1>
            </div>
            <div className="flex items-center gap-8 border-b border-black pb-4 text-[14px] font-bold cursor-pointer hover:opacity-60 transition-opacity">
              <SlidersHorizontal size={18} />
              Filter & Sort
            </div>
          </div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
            {displayProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className={`relative aspect-[3/4] bg-white overflow-hidden mb-6`}>
                  <motion.img 
                    src={p.image} 
                    className={`w-full h-full object-contain ${theme.interaction.card_hover}`} 
                    alt={p.name} 
                  />
                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <ShoppingBag size={18} />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-start px-2">
                  <div className="space-y-1">
                    <h3 className="text-[17px] font-bold text-[#1D1D1F] tracking-tight group-hover:text-black transition-colors uppercase">{p.name}</h3>
                    <p className="text-[13px] text-[#86868B] font-medium leading-relaxed max-w-[200px]">
                      Materialized in {p.tag} Series.
                    </p>
                  </div>
                  <span className="text-[16px] font-bold text-[#1D1D1F]">{p.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
