"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Heart, User, ShoppingBag, Menu, ArrowRight } from "lucide-react";

export default function JewelryCartPage() {
  const cartItems = [
    {
      id: "1",
      name: "Tiffany-Blue Sapphire Bangle",
      price: "$1,200",
      img: "/images/jewelry_hero_main.png",
      material: "18k White Gold"
    }
  ];

  return (
    <main className="bg-[#F9F6F0] selection:bg-[#70C5BB] selection:text-white font-sans text-neutral-900 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-neutral-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link href="/jewelry" className="text-xs uppercase tracking-[0.4em] font-bold text-neutral-400 hover:text-[#70C5BB]">Back to Boutique</Link>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/jewelry" className="text-3xl font-serif tracking-[0.25em] font-normal uppercase text-neutral-900">vinuspread</Link>
          </div>
          <div className="flex items-center gap-6">
            <ShoppingBag size={20} strokeWidth={1.2} />
          </div>
        </div>
      </header>

      <div className="pt-48 pb-32 px-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-32">
          {/* Items */}
          <div className="flex-1">
            <h1 className="text-5xl font-serif mb-16 tracking-tight">Your Shopping Bag</h1>
            <div className="space-y-12">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col md:flex-row gap-12 border-b border-neutral-200 pb-12">
                  <div className="w-full md:w-60 aspect-square bg-white border border-neutral-100 overflow-hidden shadow-sm">
                    <img src={item.img} className="w-full h-full object-cover grayscale-[0.3]" alt={item.name} />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-serif">{item.name}</h2>
                        <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold">{item.material}</p>
                      </div>
                      <span className="text-lg font-serif">{item.price}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-8 text-[10px] uppercase font-bold tracking-widest text-[#70C5BB]">
                        <button className="border-b border-[#70C5BB]">Remove</button>
                        <button className="border-b border-transparent hover:border-neutral-900 text-neutral-300 hover:text-neutral-900">Move to Wishlist</button>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="opacity-40">Qty:</span>
                        <select className="bg-transparent font-bold outline-none">
                          <option>1</option>
                          <option>2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout */}
          <div className="w-full lg:w-[450px]">
            <div className="bg-white p-12 shadow-2xl border border-neutral-100 space-y-12">
              <h3 className="text-2xl font-serif">Order Summary</h3>
              <div className="space-y-6 text-xs uppercase tracking-widest font-bold">
                <div className="flex justify-between opacity-50">
                  <span>Subtotal</span>
                  <span>$1,200.00</span>
                </div>
                <div className="flex justify-between opacity-50">
                  <span>Standard Shipping</span>
                  <span>Complimentary</span>
                </div>
                <div className="flex justify-between border-t border-neutral-100 pt-8 text-lg font-serif normal-case tracking-tight">
                  <span>Estimated Total</span>
                  <span>$1,200.00</span>
                </div>
              </div>
              <button className="w-full py-8 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-[#70C5BB] transition-all shadow-xl">
                Begin Checkout
              </button>
              <div className="text-center">
                 <p className="text-[10px] text-neutral-400 italic">"Complimentary shipping and signature packaging on all orders."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
