"use client";
import React from "react";
import { Truck, ShieldCheck, Undo2, Globe, Share2 } from "lucide-react";
import Link from "next/link";

export const Features = () => {
  const items = [
    { icon: <Truck size={24} />, title: "Free Delivery", desc: "Above $2,000" },
    { icon: <ShieldCheck size={24} />, title: "Secure Payment", desc: "Encrypted" },
    { icon: <Undo2 size={24} />, title: "45-Day Returns", desc: "Hassle-free" },
  ];

  return (
    <section className="bg-white py-16 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
               {item.icon}
            </div>
            <div>
               <h4 className="text-sm font-bold text-[#1D1D1F] mb-0.5">{item.title}</h4>
               <p className="text-[11px] font-medium text-[#6E6E73]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white text-[#1A1A1A] py-12 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black tracking-tighter lowercase mb-1">vinuspread</h2>
          <p className="text-[10px] text-[#6E6E73] font-bold uppercase tracking-[0.4em]">Essential Interior Archive</p>
        </div>

        <div className="flex items-center gap-8 text-[11px] font-bold text-[#6E6E73] uppercase tracking-widest">
          <Link href="/furniture" className="hover:text-black transition-colors">Shop</Link>
          <Link href="/furniture/category/all" className="hover:text-black transition-colors">Archive</Link>
          <Link href="/furniture/journal" className="hover:text-black transition-colors">Journal</Link>
          <Link href="/furniture/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
          <div className="flex gap-4 mb-1">
             <Link href="#" className="hover:text-black transition-colors"><Globe size={16} strokeWidth={1.5} /></Link>
             <Link href="#" className="hover:text-black transition-colors"><Share2 size={16} strokeWidth={1.5} /></Link>
          </div>
          <span>&copy; 2026 Archive / Tokyo & Seoul</span>
        </div>
      </div>
    </footer>
  );
};
