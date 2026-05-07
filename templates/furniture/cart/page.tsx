"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from "lucide-react";
import { products } from "../src/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  // Mock cart state (simulating 2 items)
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 },
    { ...products[2], quantity: 1 },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <main className="bg-white min-h-screen pt-40 pb-20 flex flex-col items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={48} className="mx-auto mb-8 opacity-10 text-black" />
          <h1 className="text-[3vw] font-bold text-[#1D1D1F] tracking-tighter uppercase mb-6">Your bag is empty.</h1>
          <p className="text-[#6E6E73] mb-12">Explore our collection to find your next masterpiece.</p>
          <Link href="/furniture">
            <button className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
              Continue Exploring
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-40 pb-20 selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-[4vw] font-bold text-[#1D1D1F] tracking-tighter uppercase leading-none">
            Shopping Bag.
          </h1>
          <span className="text-[12px] font-bold text-[#6E6E73] tracking-[0.4em] uppercase">
            {cartItems.length} Items
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-20 items-start">
          {/* Left: Cart Items List */}
          <div className="lg:col-span-2 space-y-12">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-10 items-center md:items-start group border-b border-black/5 pb-12"
                >
                  <div className="w-48 h-48 bg-white flex items-center justify-center p-4">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <div className="flex-1 flex flex-col pt-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-[14px] font-bold text-[#1D1D1F] tracking-[0.1em] uppercase mb-1">{item.name}</h3>
                        <p className="text-[12px] font-medium text-[#6E6E73] uppercase tracking-widest">{item.category}</p>
                      </div>
                      <span className="text-[16px] font-bold text-[#1D1D1F]">{item.price}</span>
                    </div>
                    
                    <p className="text-[13px] text-[#6E6E73] mb-8 max-w-sm">{item.desc}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-6 border border-black/10 rounded-full px-4 py-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="hover:opacity-50 transition-opacity">
                          <Minus size={14} />
                        </button>
                        <span className="text-[13px] font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="hover:opacity-50 transition-opacity">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-[10px] font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors flex items-center gap-2">
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right: Summary Box */}
          <div className="bg-zinc-50 p-10 lg:sticky lg:top-40">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-10 text-black/40">Bag Summary</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex justify-between text-[13px] font-medium text-[#6E6E73]">
                <span>Member Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-[13px] font-medium text-[#6E6E73]">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
              <div className="h-[1px] w-full bg-black/5" />
              <div className="flex justify-between text-[16px] font-bold text-[#1D1D1F] uppercase tracking-wider">
                <span>Total</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-5 rounded-full font-bold text-[13px] tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
              Checkout <ArrowRight size={16} />
            </button>
            
            <div className="mt-10 flex flex-col gap-4">
              <p className="text-[10px] text-center text-[#6E6E73] font-medium">Secure payment powered by Stripe. Global delivery available.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
