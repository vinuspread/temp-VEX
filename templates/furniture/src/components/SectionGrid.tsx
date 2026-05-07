"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { products } from "../lib/data";
import themeData from "../../theme.json";
import Link from "next/link";

const theme = themeData.theme;

import bannerLifestyle from "../../asset/banner_lifestyle.png";

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group cursor-pointer"
    >
      <Link href={`/furniture/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-white overflow-hidden mb-8">
          <motion.img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-contain ${theme.interaction.card_hover}`}
          />
          
          {/* Black Iconic Button on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Link>
      
      <div className="flex justify-between items-start px-2">
        <div className="space-y-1">
          <Link href={`/furniture/product/${product.id}`}>
            <h3 className="text-[17px] font-bold text-[#1D1D1F] tracking-tight group-hover:text-black transition-colors uppercase">{product.name}</h3>
          </Link>
          <p className={`text-[13px] text-zinc-500 font-medium leading-relaxed max-w-[240px] ${theme.typography.body.style}`}>
            {product.desc}
          </p>
        </div>
        <span className="text-[16px] font-bold text-[#1D1D1F]">{product.price}</span>
      </div>
    </motion.div>
  );
};

export const ProductGrid = () => {
  return (
    <section className="bg-white py-48 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 border-b border-black/5 pb-12">
          <div className="max-w-2xl">
            <span className="text-[13px] font-bold text-[#1A1A1A] tracking-[0.4em] uppercase mb-8 block">The Collection</span>
            <h2 className="text-[3.5vw] font-bold text-[#1D1D1F] tracking-tighter leading-[1.1]">
              Essential pieces for <br />
              <span className="text-[#6E6E73]">modern living.</span>
            </h2>
          </div>
          <button className="text-[15px] font-bold text-[#1D1D1F] border-b-2 border-black pb-2 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all">
            See All Items
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
          {products.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
