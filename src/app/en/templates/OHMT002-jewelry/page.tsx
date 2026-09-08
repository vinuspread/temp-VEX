"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Play } from "lucide-react";
import React, { useRef } from "react";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
function JewelryPageContent() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = React.useState("All");

  const t = {
  "nav": {
    "collections": `Collections`,
    "engagement": `Engagement`,
    "highJewelry": `High Jewelry`,
    "about": `About`
  },
  "hero": {
    "badge": `AVELINE Fine Jewelry`,
    "kicker": `Jewelry to treasure through time`,
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
const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const products = [
    { id: 1, name: t.products.items.item1, price: "$4,250", img: "/templates/OHMT002-jewelry/jewelry-ring.png", tag: t.products.tags.engagement },
    { id: 4, name: t.products.items.item2, price: "$1,850", img: "/templates/OHMT002-jewelry/jewelry-pendant.png", tag: t.products.tags.seasonal },
    { id: 6, name: t.products.items.item3, price: "$12,200", img: "/templates/OHMT002-jewelry/bangle-item.png", tag: t.products.tags.luxury },
    { id: 2, name: t.products.items.item4, price: "$3,400", img: "/templates/OHMT002-jewelry/infinity-band.png", tag: t.products.tags.essential },
  ];

  const filteredProducts = products.filter((product) => {
    if (activeTab === "All") return true;
    if (activeTab === "Rings") return product.name.toLowerCase().includes("ring") || product.name.toLowerCase().includes("band");
    if (activeTab === "Necklaces") return product.name.toLowerCase().includes("pendant") || product.name.toLowerCase().includes("bangle");
    if (activeTab === "Earrings") return product.name.toLowerCase().includes("earring");
    return true;
  });

  return (
    <TemplateWrapper theme={theme}>
      <main ref={containerRef} className="bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)] font-sans text-neutral-900">
        <Navbar />

        {/* Hero */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/templates/OHMT002-jewelry/jewelry-hero-main.png"
              className="w-full h-full object-cover grayscale-[0.2]"
              alt="AVELINE Fine Jewelry Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
          </motion.div>

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs md:text-sm uppercase text-white mb-6 block tracking-[0em] font-bold opacity-80">
                {t.hero.badge}
              </span>
              <h2 className="text-white mb-12 flex flex-col items-center tracking-[0.05em] max-w-6xl mx-auto space-y-4">
                <span className="block whitespace-nowrap font-extralight text-white/90 text-center text-lg md:text-2xl tracking-tight">
                  {t.hero.kicker}
                </span>
                <span className="block whitespace-nowrap font-serif font-normal text-white text-center text-4xl md:text-7xl leading-[var(--leading-heading)] md:leading-[var(--leading-heading)]">
                  {t.hero.title1} <br /> {t.hero.title2}
                </span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="px-10 py-4 bg-white text-neutral-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all">
                  {t.hero.cta1}
                </button>
                <button className="group flex items-center gap-4 text-white hover:text-[var(--color-primary)] transition-all text-xs uppercase tracking-[0.3em] font-bold">
                  {t.hero.cta2} <div className="w-10 h-px bg-white group-hover:bg-[var(--color-primary)] group-hover:w-16 transition-all duration-700" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section className="py-10 md:py-20 md:py-32 px-6 md:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6 md:gap-8">
                <div className="shrink-0">
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold tracking-[-0.02em] md:tracking-[-0.04em] whitespace-nowrap">{t.products.title}</h3>
                </div>
              <div className="flex items-center gap-6 md:gap-10 overflow-x-auto pb-1 min-w-0 max-w-full no-scrollbar md:shrink" style={{ scrollbarWidth: "none" }}>
                {[
                  { id: "All", label: t.products.tabs.all },
                  { id: "Rings", label: t.products.tabs.rings },
                  { id: "Necklaces", label: t.products.tabs.necklaces },
                  { id: "Earrings", label: t.products.tabs.earrings }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-300 cursor-pointer whitespace-nowrap border-b-[1.5px] shrink-0 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
                      activeTab === tab.id
                        ? "text-neutral-900 border-[var(--color-primary)]"
                        : "text-neutral-500 border-transparent hover:text-neutral-700 hover:border-neutral-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/en/templates/OHMT002-jewelry/product/${item.id}`} className="relative mb-4 block aspect-[3/4] overflow-hidden bg-[var(--color-bg-secondary)]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover scale-[1.06] group-hover:scale-[1.12] transition-transform duration-[2.5s] ease-out"
                    />
                     <div className="absolute top-4 right-4 z-10">
                       <button className="flex items-center justify-center w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-neutral-400 hover:text-red-500 hover:bg-white active:scale-95 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.05)]" aria-label="Add to wishlist">
                         <Heart size={13} strokeWidth={1.8} />
                       </button>
                     </div>
                     <div className="absolute top-4 left-4">
                       <span className="flex items-center justify-center h-7 text-xs bg-white/95 text-neutral-800 border border-neutral-200/50 rounded-none px-3.5 uppercase font-bold tracking-[0.15em] backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.03)]">{item.tag}</span>
                     </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700 hidden sm:block">
                      <span className="block w-full py-3 bg-[var(--color-primary)] text-center text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-on-primary)]">
                        {t.products.action}
                      </span>
                    </div>
                  </Link>
                  <div className="space-y-1 text-center">
                    <Link href={`/en/templates/OHMT002-jewelry/product/${item.id}`} className="block">
                      <h4 className="text-sm md:text-base font-serif font-bold text-neutral-800 group-hover:text-[var(--color-primary-ink)] transition-colors leading-none truncate">{item.name}</h4>
                    </Link>
                    <p className="text-sm text-[var(--color-primary-ink)] font-medium">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="py-10 md:py-20 md:py-32 px-6 md:px-12 bg-[var(--color-bg)]">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img loading="lazy" src="/templates/OHMT002-jewelry/jewelry-craft.png" alt="Jewelry Craftsmanship" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -bottom-10 -right-6 lg:-bottom-14 lg:-right-14 w-72 bg-white p-8 hidden md:block shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-neutral-100">
                <span className="text-[var(--color-primary-ink)] text-xs font-bold uppercase tracking-[0.3em] block mb-3">{t.craftsmanship.badge}</span>
                <p className="text-sm text-neutral-800 leading-[var(--leading-body)] font-serif italic">
                  “{t.craftsmanship.quote}”
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">{t.craftsmanship.heritage}</span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold leading-[var(--leading-heading)] tracking-tight">
                {t.craftsmanship.title1}
                <br />
                <span className="text-[var(--color-primary)]">{t.craftsmanship.title2}</span>
              </h3>
              <p className="text-sm md:text-base text-neutral-600 leading-[var(--leading-body)] max-w-md">
                {t.craftsmanship.desc}
              </p>
              <div className="flex items-center gap-4 group cursor-pointer pt-2">
                <div className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-on-primary)] transition-all duration-500 flex-shrink-0">
                  <Play size={12} fill="currentColor" className="translate-x-[1px]" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold group-hover:translate-x-2 transition-transform duration-500">{t.craftsmanship.process}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function JewelryPage() {
  return (
    <React.Suspense fallback={null}>
      <JewelryPageContent />
    </React.Suspense>
  );
}
