"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import React from "react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-luxury-border flex items-center justify-between">
              <h2 className="text-xl font-serif italic tracking-widest">Your Bag (2)</h2>
              <button onClick={onClose} className="p-2 hover:bg-luxury-beige rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {[
                { name: "Unicorn Limited Edition", price: "$4,200", img: "/images/gundam-unicorn.jpg", size: "M" },
                { name: "Sazabi Executive Piece", price: "$5,850", img: "/images/gundam-sazabi.jpg", size: "L" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-24 aspect-[3/4] bg-luxury-beige overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-serif text-lg mb-1">{item.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-luxury-gray">Size: {item.size}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-4 text-xs">
                        <span className="cursor-pointer opacity-50 hover:opacity-100">-</span>
                        <span>1</span>
                        <span className="cursor-pointer opacity-50 hover:opacity-100">+</span>
                      </div>
                      <span className="font-serif font-bold text-sm">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-8 bg-luxury-cream border-t border-luxury-border">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-luxury-gray">Subtotal</span>
                <span className="text-2xl font-serif tracking-tighter">$10,050.00</span>
              </div>
              <button className="w-full py-5 bg-luxury-black text-white text-[10px] uppercase font-bold tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-opacity-90 transition-all active:scale-95">
                Checkout Now <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
