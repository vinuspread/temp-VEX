"use client";

import React from "react";
import { Header } from "@/components/sneaker/layout/Header";
import { Footer } from "@/components/sneaker/layout/Footer";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SneakerShopAllPage() {
    const products = [
        { id: "1", name: "AURA RUNNER V1", price: "$180", category: "Performance", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000" },
        { id: "2", name: "PHANTOM GHOST", price: "$240", category: "Limited", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000" },
        { id: "3", name: "ZENITH ZERO", price: "$160", category: "Core", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000" },
        { id: "4", name: "CARBON FLUX", price: "$320", category: "Elite", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000" }
    ];

    return (
        <main className="min-h-screen bg-white selection:bg-black selection:text-white">
            <Header />
            <div className="pt-40 pb-32 px-6 max-w-[1440px] mx-auto">
                {/* Grid Hero */}
                <div className="mb-24 border-b border-black pb-12 flex justify-between items-end">
                    <div className="space-y-4">
                        <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase italic opacity-10 absolute -top-10 left-0 pointer-events-none">ALL DROP</h1>
                        <h1 className="text-7xl font-black tracking-tighter uppercase italic relative z-10">Shop All</h1>
                        <p className="text-[11px] font-black tracking-[0.4em] uppercase text-black/40">vinuspread Laboratory Series // 2025</p>
                    </div>
                    <div className="flex gap-8 mb-4">
                        <button className="flex items-center gap-4 text-[11px] font-black tracking-widest uppercase border-b border-black/10 pb-2 hover:border-black transition-all">
                            Filter <Filter size={14} />
                        </button>
                        <button className="flex items-center gap-4 text-[11px] font-black tracking-widest uppercase border-b border-black/10 pb-2 hover:border-black transition-all">
                            Search <Search size={14} />
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
                    {products.map((item) => (
                        <Link key={item.id} href={`/sneaker/product/${item.id}`} className="group block">
                            <div className="aspect-[3/4] bg-[#F5F5F5] overflow-hidden mb-8 relative">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-black text-white text-[9px] font-black px-4 py-2 uppercase tracking-widest italic">{item.category}</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-baseline border-b border-black/5 pb-4 group-hover:border-black transition-colors">
                                    <h3 className="text-xl font-black tracking-tight italic uppercase">{item.name}</h3>
                                    <span className="text-sm font-black italic">{item.price}</span>
                                </div>
                                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-black/30">View Details</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
