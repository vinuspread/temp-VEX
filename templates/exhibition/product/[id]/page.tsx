"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Heart, ShoppingBag, ArrowLeft, Ruler, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProductPage() {
  const params = useParams();
  const id = params.id;

  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-luxury-gray hover:text-black transition-colors mb-12">
          <ArrowLeft size={14} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Image Gallery */}
          <div className="grid gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/5] bg-luxury-beige overflow-hidden"
            >
              <img 
                src="/images/gundam-unicorn.jpg" 
                alt="Product Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-luxury-cream overflow-hidden">
                <img src="/images/gundam-nu.jpg" alt="Detail 1" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="aspect-square bg-luxury-cream overflow-hidden">
                <img src="/images/gundam-sazabi.jpg" alt="Detail 2" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-32">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-luxury-gray mb-4 block">Nano Banana Exclusive</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter leading-none italic">Unicorn Limited <br /> Edition Piece</h1>
            <p className="text-2xl font-serif mb-12 tracking-tighter">$4,200.00</p>

            <div className="mb-12">
              <h5 className="text-[10px] uppercase font-bold tracking-widest mb-6">Select Size</h5>
              <div className="flex gap-4">
                {["S", "M", "L", "XL"].map(size => (
                  <button key={size} className="w-14 h-14 border border-luxury-border flex items-center justify-center text-xs font-bold hover:border-black transition-colors active:bg-black active:text-white">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-16">
              <button className="w-full py-6 bg-luxury-black text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-4">
                Add to Bag <ShoppingBag size={18} />
              </button>
              <button className="w-full py-6 border border-luxury-border text-xs uppercase tracking-[0.3em] font-bold hover:border-black transition-all flex items-center justify-center gap-4">
                Add to Wishlist <Heart size={18} />
              </button>
            </div>

            <div className="grid gap-8 border-t border-luxury-border pt-12">
              <div className="flex items-start gap-4">
                <ShieldCheck size={20} className="text-luxury-gray" />
                <div>
                  <h6 className="text-[10px] uppercase font-bold tracking-widest mb-2">Authenticity Guaranteed</h6>
                  <p className="text-xs text-luxury-gray leading-relaxed">Each Nano Banana piece comes with a digital certificate of authenticity on the blockchain.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Truck size={20} className="text-luxury-gray" />
                <div>
                  <h6 className="text-[10px] uppercase font-bold tracking-widest mb-2">Complimentary Shipping</h6>
                  <p className="text-xs text-luxury-gray leading-relaxed">Premium white-glove delivery service included for all icons collection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
