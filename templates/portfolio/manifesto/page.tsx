"use client";

import React from "react";
import { Header } from "@/components/portfolio/layout/Header";
import { Footer } from "@/components/portfolio/layout/Footer";
import { motion } from "framer-motion";

export default function PortfolioManifestoPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[#ED008C] selection:text-white pb-32">
            <Header />
            <div className="pt-48 pb-16 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-24">
                    <div className="space-y-4 border-b border-black/10 pb-12">
                        <span className="text-[13px] font-black tracking-tight text-[#ED008C] uppercase block">Chapter 01</span>
                        <h1 className="text-7xl md:text-[10vw] font-black tracking-tighter leading-[0.8] uppercase italic">Manifesto</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-8 space-y-20">
                            <h2 className="text-[4vw] font-black tracking-tighter leading-[1.1] uppercase">
                                Radical <span className="text-[#ED008C]">Simplification</span> <br /> 
                                as a form of <br /> 
                                <span className="italic">Visual Truth</span>.
                            </h2>
                            <div className="space-y-8 text-xl font-medium leading-relaxed max-w-2xl text-black/60">
                                <p>
                                    We believe that in an age of infinite noise, the most powerful tool is silence. Our practice is dedicated to removing the non-essential until only the core identity remains.
                                </p>
                                <p>
                                    Every pixel must have a purpose. Every interaction must evoke an emotion. We do not just build interfaces; we architect digital environments that breathe.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 bg-[#F5F5F5] aspect-[3/4] overflow-hidden p-12 flex flex-col justify-between">
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-20">vinuspread laboratory // 2025</span>
                            <div className="space-y-4">
                                <div className="w-12 h-[1px] bg-black" />
                                <p className="text-[11px] font-black tracking-widest uppercase leading-loose">
                                    01. Clarity <br />
                                    02. Intent <br />
                                    03. Emotion <br />
                                    04. Sustainability
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
