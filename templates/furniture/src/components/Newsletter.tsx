"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="bg-white py-48 px-6 md:px-12 border-t border-black/5 selection:bg-black selection:text-white">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[12px] font-bold text-[#6E6E73] tracking-[0.4em] uppercase mb-8 block">Stay in the Loop</span>
          <h2 className="text-[56px] md:text-[80px] font-bold text-[#1D1D1F] leading-[1.05] tracking-tighter mb-12 uppercase">
            Curated Insights. <br /> In Your Inbox.
          </h2>
          <p className="text-xl text-[#6E6E73] font-medium leading-relaxed mb-16 max-w-lg mx-auto uppercase">
            Subscribe to receive our latest collections, stories, and exclusive event invitations.
          </p>
          
          <form className="relative max-w-md mx-auto group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-[#F5F5F7] border-none px-10 py-6 pr-20 rounded-full text-[15px] font-bold text-[#1D1D1F] placeholder:text-black/30 focus:ring-2 focus:ring-black outline-none transition-all"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </form>
          
          <div className="mt-12">
            <p className="text-[11px] font-bold text-[#6E6E73] uppercase tracking-[0.2em]">Privacy First. Unsubscribe Anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
