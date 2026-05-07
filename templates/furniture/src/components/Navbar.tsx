"use client";
import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { C } from "../lib/data";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter lowercase text-[#1D1D1F]">
          vinuspread
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-[#6E6E73]">
          <Link href="/furniture/category/living" className="hover:text-[#1A1A1A] transition-colors">LIVING ROOM</Link>
          <Link href="/furniture/category/bedroom" className="hover:text-[#1A1A1A] transition-colors">BEDROOM</Link>
          <Link href="/furniture/category/dining" className="hover:text-[#1A1A1A] transition-colors">DINING</Link>
          <Link href="/furniture/category/workspace" className="hover:text-[#1A1A1A] transition-colors">WORKSPACE</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-[#1D1D1F]">
          <button className="hover:text-[#0071E3] transition-all">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/furniture/cart" className="relative hover:text-[#1A1A1A] transition-all">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1A1A1A] text-white text-[9px] rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </Link>
          <button className="md:hidden">
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};
