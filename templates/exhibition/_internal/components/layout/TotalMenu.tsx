"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TotalMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", href: "/exhibition", desc: "Experience the Sanctuary" },
  { name: "Museum Info", href: "/exhibition/our-story", desc: "Our 500-Year Legacy" },
  { name: "Collections", href: "/exhibition/collections", desc: "Explore the Archive" },
  { name: "Exhibitions", href: "/exhibition/exhibitions", desc: "Current & Special Showings" },
  { name: "Souvenir Shop", href: "/exhibition/souvenir", desc: "Echos of History" },
  { name: "Curator Note", href: "/exhibition/curator-note", desc: "Theological Insights" },
];

export default function TotalMenu({ isOpen, onClose }: TotalMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0F0F0F] text-[#F9F6F0] flex flex-col pt-32 pb-12 px-6 md:px-20 selection:bg-[#F9F6F0] selection:text-[#0F0F0F]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 md:top-12 md:right-12 hover:rotate-90 transition-transform duration-500"
          >
            <X size={32} />
          </button>

          {/* Menu Grid */}
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 flex-grow content-center">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link 
                  href={item.href} 
                  onClick={onClose}
                  className="group flex flex-col gap-2"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#F9F6F0]/30">0{i + 1}</span>
                    <h2 className="text-4xl md:text-7xl font-serif tracking-tighter group-hover:italic group-hover:translate-x-4 transition-all duration-700">
                      {item.name}
                    </h2>
                  </div>
                  <p className="text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold text-[#F9F6F0]/40 pl-8 md:pl-16 group-hover:text-[#F9F6F0] transition-colors">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-[1440px] mx-auto w-full border-t border-[#F9F6F0]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#F9F6F0]/30">
              © 2026 VINUSPREAD ARCHIVE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
              <a href="#" className="hover:opacity-50">Instagram</a>
              <a href="#" className="hover:opacity-50">Twitter</a>
              <a href="#" className="hover:opacity-50">Vatican City, Rome</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
