"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "bg-white/80 backdrop-blur-xl py-6" : "bg-transparent py-10"}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center transition-all">
        <Link href="/fashion" className={`text-2xl font-black tracking-tighter uppercase ${scrolled ? "text-black" : "text-white"}`}>
          vinuspread
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] ${scrolled ? "text-black/60" : "text-white/70"}`}>
          <Link href="/fashion/category/collection" className="hover:text-black transition-colors">Collection</Link>
          <Link href="/fashion/category/archive" className="hover:text-black transition-colors">Archive</Link>
          <Link href="/fashion/journal" className="hover:text-black transition-colors">Journal</Link>
          <Link href="/fashion/about" className="hover:text-black transition-colors">About</Link>
        </div>

        {/* Icons */}
        <div className={`flex items-center gap-8 ${scrolled ? "text-black" : "text-white"}`}>
          <button className="hover:opacity-50 transition-opacity">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/fashion/cart" className="relative hover:opacity-50 transition-opacity">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[9px] rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Link>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};
