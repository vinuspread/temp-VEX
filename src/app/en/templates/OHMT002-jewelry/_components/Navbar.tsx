// src/app/templates/OHMT002-jewelry/-internal/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const pathname = usePathname();

  const t = {
  "nav": {
    "collections": `Collections`,
    "engagement": `Engagement`,
    "highJewelry": `High Jewelry`,
    "about": `About`
  },
  "hero": {
    "badge": `AVELINE Fine Jewelry`,
    "title1": `The Radiance`,
    "title2": `of Forever`,
    "cta1": `Explore The Edition`,
    "cta2": `Our Heritage`
  },
  "products": {
    "badge": `The Boutique`,
    "title": `The Modern Classics`,
    "tabs": {
      "all": `All`,
      "rings": `Rings`,
      "necklaces": `Necklaces`,
      "earrings": `Earrings`
    },
    "action": `Request Appointment`,
    "items": {
      "item1": `Diamond Solitaire Ring`,
      "item2": `Radiant Pearl Pendant`,
      "item3": `Tiffany-Blue Sapphire Bangle`,
      "item4": `Rose Gold Infinity Band`
    },
    "tags": {
      "engagement": `Engagement`,
      "seasonal": `Seasonal`,
      "luxury": `Luxury`,
      "essential": `Essential`
    }
  },
  "craftsmanship": {
    "badge": `Artisan Technique`,
    "quote": `Every facet is a dialogue between light and stone, hand-polished to achieve AVELINE's signature brilliance.`,
    "heritage": `The Heritage`,
    "title1": `Hand-Set`,
    "title2": `With Soul`,
    "desc": `At AVELINE, we believe a jewel is more than a material; it is a silent observer of life's most precious moments. Our artisans spend hundreds of hours perfecting a single setting.`,
    "process": `Discover The Process`
  }
};
const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if it is the home page
  const isHome = /^\/(en|ko)?\/?templates\/(OHMT002-)?jewelry\/?$/.test(pathname);
  const isCategoryPage = /^\/(en|ko)?\/?templates\/(OHMT002-)?jewelry\/category\//.test(pathname);
  const isTransparent = isHome && !scrolled;

  // Derive current category ID if on subpage
  const currentCategory = isCategoryPage
    ? pathname.split("/category/")[1]
    : "";

  const menuItems = [
    { name: t.nav.collections, id: "collections", href: `/en/templates/OHMT002-jewelry/category/collections` },
    { name: t.nav.engagement, id: "engagement", href: `/en/templates/OHMT002-jewelry/category/engagement` },
    { name: t.nav.highJewelry, id: "high-jewelry", href: `/en/templates/OHMT002-jewelry/category/high-jewelry` },
    { name: t.nav.about, id: "about", href: `/en/templates/OHMT002-jewelry/category/about` },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-20 transition-all duration-700 flex items-center ${
          !isTransparent
            ? "bg-[var(--color-bg-secondary)]/95 backdrop-blur-xl border-b border-neutral-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center transition-all w-full">

          {/* Desktop Left - Curation Categories */}
          <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em] -mr-[0.3em] font-bold">
            {menuItems.slice(0, 3).map((item) => {
              const isActive = currentCategory === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive
                      ? !isTransparent
                        ? "text-[var(--color-primary-ink)]"
                        : "text-[var(--color-primary)]"
                      : !isTransparent
                      ? "text-neutral-500 hover:text-[var(--color-primary-ink)]"
                      : "text-white/80 hover:text-[var(--color-primary)]"
                  } group`}
                >
                  {item.name}
                  {/* Hover & Active Emerald Underline Slider */}
                  <span
                    className={`absolute bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 transition-transform duration-300 ease-out bg-[var(--color-primary)] origin-center ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className={`lg:hidden p-2 transition-colors ${
              !isTransparent ? "text-neutral-900" : "text-white"
            } hover:text-[var(--color-primary)]`}
          >
            <Menu size={20} />
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none max-w-[120px] sm:max-w-none">
            <Link
              href={`/en/templates/OHMT002-jewelry`}
              className={`text-sm sm:text-lg md:text-2xl font-serif tracking-[0.25em] -mr-[0.25em] font-normal uppercase transition-colors duration-700 pointer-events-auto text-center ${
                !isTransparent ? "text-neutral-900" : "text-white"
              }`}
            >
              AVELINE
            </Link>
          </div>

          {/* Right Icons & About */}
          <div
            className={`flex items-center gap-4 sm:gap-6 md:gap-8 transition-colors duration-700 ${
              !isTransparent ? "text-neutral-700" : "text-white"
            }`}
          >
            {/* Desktop Only About Link on the right of Logo */}
            <div className="hidden lg:flex items-center text-sm uppercase tracking-[0.2em] font-bold">
              {menuItems.slice(3).map((item) => {
                const isActive = currentCategory === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`relative py-1 transition-colors duration-300 ${
                      isActive
                        ? !isTransparent
                          ? "text-[var(--color-primary-ink)]"
                          : "text-[var(--color-primary)]"
                        : !isTransparent
                        ? "text-neutral-500 hover:text-[var(--color-primary-ink)]"
                        : "text-white/80 hover:text-[var(--color-primary)]"
                    } group`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 transition-transform duration-300 ease-out bg-[var(--color-primary)] origin-center ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <span className={`hidden lg:inline-block w-px h-3 ${!isTransparent ? "bg-neutral-200/50" : "bg-white/20"}`} />

            <button aria-label="Search" className="hover:text-[var(--color-primary)] transition-colors hidden sm:block">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button aria-label="Wishlist" className="hover:text-[var(--color-primary)] transition-colors hidden md:block">
              <Heart size={18} strokeWidth={1.5} />
            </button>
            <button aria-label="Account" className="hover:text-[var(--color-primary)] transition-colors hidden sm:block">
              <User size={18} strokeWidth={1.5} />
            </button>
            <Link href={`/en/templates/OHMT002-jewelry/cart`} aria-label="Shopping bag" className="group flex items-center gap-2 hover:opacity-85 transition-opacity">
              <ShoppingBag size={18} strokeWidth={1.5} className="group-hover:text-[var(--color-primary)] transition-colors" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-[100]"
            />

            {/* Sidebar Box */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-[var(--color-bg-secondary)] z-[101] p-10 flex flex-col justify-between selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)]"
            >
              <div className="space-y-16">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-serif tracking-[0.2em] uppercase text-neutral-900">AVELINE</span>
                  <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="p-2 text-neutral-500 hover:text-neutral-900">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-8 text-sm uppercase tracking-[0.3em] font-bold text-neutral-600">
                  {menuItems.map((item) => {
                    const isActive = currentCategory === item.id;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`transition-colors py-2 border-b border-neutral-100 flex justify-between items-center ${
                          isActive ? "text-[var(--color-primary-ink)]" : "hover:text-[var(--color-primary-ink)]"
                        }`}
                      >
                        {item.name}
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6 border-t border-neutral-200/50 pt-8 text-sm tracking-[0.2em] text-neutral-500 font-bold uppercase">
                <p>© 2026 Oh My Template.</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Pinterest</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
