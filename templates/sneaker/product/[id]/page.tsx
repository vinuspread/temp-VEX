"use client";

import React from "react";
import { Header } from "@/components/sneaker/layout/Header";
import { Footer } from "@/components/sneaker/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Share2, Plus } from "lucide-react";
import Link from "next/link";

export default function SneakerProductPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-black selection:text-white">
            <Header />
            <div className="pt-40 pb-32 px-6 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Images */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="aspect-square bg-[#F5F5F5] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" alt="Product" />
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="aspect-square bg-[#F5F5F5] overflow-hidden opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000" className="w-full h-full object-cover grayscale" alt="Thumbnail" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-5 space-y-16 lg:sticky lg:top-40 h-fit">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black tracking-[0.5em] text-black/30 uppercase">Performance Series v1</span>
                                <div className="flex gap-6 opacity-30">
                                    <button className="hover:text-black transition-colors"><Heart size={18} /></button>
                                    <button className="hover:text-black transition-colors"><Share2 size={18} /></button>
                                </div>
                            </div>
                            <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">AURA <br /> RUNNER V1</h1>
                            <p className="text-2xl font-black italic">$180.00</p>
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-[11px] font-black tracking-[0.2em] uppercase">Select Size (US)</span>
                                <div className="grid grid-cols-4 gap-4">
                                    {['8', '9', '10', '11', '12', '13'].map(size => (
                                        <button key={size} className={`py-4 border text-xs font-black tracking-widest uppercase transition-all ${size === '10' ? 'bg-black text-white border-black' : 'border-black/5 hover:border-black'}`}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button className="w-full py-8 bg-black text-white text-[13px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-neutral-800 transition-all italic">
                                    Add to Bag <Plus size={16} />
                                </button>
                                <Link href="/sneaker/cart" className="w-full py-8 border border-black text-black text-[13px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-all italic">
                                    Expedited Checkout <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-black/5 space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-xs font-black tracking-widest uppercase italic">Manifesto</h3>
                                <p className="text-sm font-medium leading-relaxed text-black/60 max-w-sm">
                                    Engineered for the radical athlete. The Aura Runner V1 utilizes our proprietary carbon-flux plate for maximum energy return and a breathable platinum-shell upper.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
