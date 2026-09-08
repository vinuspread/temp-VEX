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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const products = [
    { id: 1, name: "다이아몬드 솔리테어 반지", price: "₩4,250,000", img: "/templates/OHMT002-jewelry/jewelry-ring.png", tag: "웨딩" },
    { id: 4, name: "남양 진주 펜던트", price: "₩1,850,000", img: "/templates/OHMT002-jewelry/jewelry-pendant.png", tag: "시즌 컬렉션" },
    { id: 6, name: "사파이어 뱅글", price: "₩12,200,000", img: "/templates/OHMT002-jewelry/bangle-item.png", tag: "하이 주얼리" },
    { id: 2, name: "로즈 골드 인피니티 밴드", price: "₩3,400,000", img: "/templates/OHMT002-jewelry/infinity-band.png", tag: "데일리" },
  ];

  const filteredProducts = products.filter((product) => {
    if (activeTab === "All") return true;
    if (activeTab === "Rings") return product.name.includes("반지") || product.name.includes("밴드");
    if (activeTab === "Necklaces") return product.name.includes("펜던트") || product.name.includes("뱅글");
    if (activeTab === "Earrings") return product.name.includes("귀걸이");
    return true;
  });

  return (
    <TemplateWrapper theme={theme}>
      <main ref={containerRef} className="bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-white font-sans text-neutral-900">
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
                AVELINE FINE JEWELRY
              </span>
              <h2 className="text-white mb-12 flex flex-col items-center tracking-[0.05em] max-w-6xl mx-auto space-y-4 break-keep">
                <span className="block whitespace-nowrap font-extralight text-white/90 text-center text-lg md:text-2xl tracking-tight" style={{ fontFamily: "'Nanum Myeongjo', serif" }}>시간이 지나도 오래 간직할 주얼리</span>
                <span className="block font-serif font-normal text-white text-center text-4xl md:text-7xl leading-[var(--leading-heading)] md:leading-[var(--leading-heading)]" style={{ fontFamily: "'Nanum Myeongjo', serif" }}>
                  {"소중한 순간을"} <br /> {"오래 기억할 수 있도록."}
                </span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="px-10 py-4 bg-white text-neutral-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[var(--color-primary)] hover:text-white transition-all">
                  컬렉션 보기
                </button>
                <button className="group flex items-center gap-4 text-white hover:text-[var(--color-primary)] transition-all text-xs uppercase tracking-[0.3em] font-bold">
                  브랜드 이야기 <div className="w-10 h-px bg-white group-hover:bg-[var(--color-primary)] group-hover:w-16 transition-all duration-700" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section className="py-10 md:py-20 md:py-32 px-6 md:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-row items-center justify-between mb-12 md:mb-16 gap-4 md:gap-8">
                <div className="shrink-0">
                  <h3 className="text-xl md:text-3xl lg:text-5xl font-serif font-bold tracking-[-0.02em] md:tracking-[-0.04em] whitespace-nowrap">모던 클래식 컬렉션</h3>
                </div>
              <div className="flex items-center gap-6 md:gap-10 overflow-x-auto pb-1 min-w-0 no-scrollbar shrink" style={{ scrollbarWidth: "none" }}>
                {[
                  { id: "All", label: "전체" },
                  { id: "Rings", label: "반지" },
                  { id: "Necklaces", label: "목걸이" },
                  { id: "Earrings", label: "귀걸이" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 cursor-pointer whitespace-nowrap border-b-[1.5px] shrink-0 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
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
                  <Link href={`/ko/templates/OHMT002-jewelry/product/${item.id}`} className="relative mb-4 block aspect-[3/4] overflow-hidden bg-[var(--color-bg-secondary)]">
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
                      <span className="block w-full py-3 bg-[var(--color-primary)] text-center text-xs font-bold uppercase tracking-[0.1em] text-white">
                        방문 상담 예약
                      </span>
                    </div>
                  </Link>
                  <div className="space-y-1 text-center">
                    <Link href={`/ko/templates/OHMT002-jewelry/product/${item.id}`} className="block">
                      <h4 className="text-sm md:text-base font-serif font-bold text-neutral-800 group-hover:text-[var(--color-primary)] transition-colors leading-none truncate">{item.name}</h4>
                    </Link>
                    <p className="text-sm text-[var(--color-primary)] font-medium">{item.price}</p>
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
                <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-[-0.03em] block mb-3">아틀리에의 세공</span>
                <p className="text-sm text-neutral-800 leading-relaxed font-serif italic break-keep tracking-[-0.025em]">
                  “원석마다 빛나는 방식이 다릅니다. 가장 자연스러운 빛이 드러나도록 형태와 세팅을 세심하게 다듬습니다.”
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-xs uppercase tracking-[0em] text-neutral-500 font-bold">HERITAGE</span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold leading-[var(--leading-heading)] tracking-[-0.04em]">
                원석의 빛을 살리고
                <br />
                <span className="text-[var(--color-primary)]">착용감을 세심하게 다듬습니다.</span>
              </h3>
              <p className="text-sm md:text-base text-neutral-600 leading-[var(--leading-body)] md:leading-loose max-w-md break-keep tracking-[-0.025em]">
                AVELINE는 주얼리가 특별한 날에만 머무는 장식이 아니라, 일상의 순간과 기억을 오래 간직하는 물건이라고 생각합니다. 원석을 고르는 단계부터 세팅과 마감까지 직접 살피며, 아름다움과 편안한 착용감을 함께 갖춘 주얼리를 만듭니다.
              </p>
              <div className="flex items-center gap-4 group cursor-pointer pt-2">
                <div className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:text-white transition-all duration-500 flex-shrink-0">
                  <Play size={12} fill="currentColor" className="translate-x-[1px]" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold group-hover:translate-x-2 transition-transform duration-500">제작 과정 보기</span>
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
