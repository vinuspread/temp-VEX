"use client";
import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, Globe, Link as LinkIcon, ExternalLink } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="py-40 bg-[#F5F5F7] text-black">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-40 mb-10 block">Stay Connected</span>
                <h2 className="text-[4vw] font-bold tracking-tighter uppercase mb-16 leading-none italic">
                    JOIN THE <span className="text-black/30">LABORATORY SERIES</span>
                </h2>
                <div className="max-w-2xl mx-auto relative group">
                    <input 
                        type="email" 
                        placeholder="EMAIL ADDRESS" 
                        className="w-full bg-white border-0 py-8 px-10 text-[11px] font-bold tracking-[0.3em] outline-none placeholder:text-black/20 focus:ring-1 focus:ring-black transition-all"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] bg-black text-white px-8 py-4 hover:bg-black/80 transition-all">
                        SUBSCRIBE <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-black/5 selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
        <div className="space-y-12">
          <Link href="/fashion" className="text-2xl font-black tracking-tighter uppercase">
            vinuspread
          </Link>
          <p className="text-[12px] text-black/50 font-medium leading-relaxed max-w-xs">
            Crafting silhouettes that speak volumes through silence. Redefining digital luxury for the next generation.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-50 transition-all"><Globe size={18} /></Link>
            <Link href="#" className="hover:opacity-50 transition-all"><LinkIcon size={18} /></Link>
            <Link href="#" className="hover:opacity-50 transition-all"><ExternalLink size={18} /></Link>
          </div>
        </div>

        <div className="space-y-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">Catalogs</h5>
            <ul className="space-y-4 text-[12px] font-bold uppercase tracking-widest">
                <li><Link href="/fashion/category/ss26" className="hover:text-black/40 transition-colors">Spring/Summer 26</Link></li>
                <li><Link href="/fashion/category/aw25" className="hover:text-black/40 transition-colors">Autumn/Winter 25</Link></li>
                <li><Link href="/fashion/category/core" className="hover:text-black/40 transition-colors">Core Series</Link></li>
                <li><Link href="/fashion/category/limited" className="hover:text-black/40 transition-colors">Limited Drop</Link></li>
            </ul>
        </div>

        <div className="space-y-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">Assistance</h5>
            <ul className="space-y-4 text-[12px] font-bold uppercase tracking-widest">
                <li><Link href="/fashion/care" className="hover:text-black/40 transition-colors">Customer Care</Link></li>
                <li><Link href="/fashion/shipping" className="hover:text-black/40 transition-colors">Shipping & Returns</Link></li>
                <li><Link href="/fashion/size-guide" className="hover:text-black/40 transition-colors">Size Guide</Link></li>
                <li><Link href="/fashion/contact" className="hover:text-black/40 transition-colors">Contact</Link></li>
            </ul>
        </div>

        <div className="space-y-8">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">Legal</h5>
            <ul className="space-y-4 text-[12px] font-bold uppercase tracking-widest">
                <li><Link href="#" className="hover:text-black/40 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-black/40 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-black/40 transition-colors">Cookie Settings</Link></li>
            </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold tracking-[0.4em] text-black/20 uppercase">
            &copy; 2026 vinuspread Laboratory. All rights reserved.
          </p>
          <div className="flex gap-10 text-[9px] font-bold tracking-[0.2em] text-black/40 uppercase">
              <Link href="#" className="hover:text-black transition-colors">Seoul</Link>
              <Link href="#" className="hover:text-black transition-colors">Paris</Link>
              <Link href="#" className="hover:text-black transition-colors">Tokyo</Link>
          </div>
      </div>
    </footer>
  );
};
