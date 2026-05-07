"use client";

import React from "react";
import { Header } from "@/components/studio/layout/Header";
import { Footer } from "@/components/studio/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function StudioServicesPage() {
    const services = [
        { title: "Strategic Branding", desc: "Defining core identities for the modern corporate landscape." },
        { title: "Architectural UX", desc: "Building digital structures that scale with your ambitions." },
        { title: "Product Engineering", desc: "High-performance development with surgical precision." }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-48 pb-32 px-[64px] max-w-full">
                <div className="flex flex-col gap-[120px]">
                    <div className="max-w-[800px] space-y-[40px]">
                        <span className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">Capabilities</span>
                        <h1 className="text-[80px] leading-[90px] font-semibold tracking-[-2.4px] uppercase">
                            Elevating <br /> <span className="opacity-20 italic">Digital</span> Standards.
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
                        {services.map((service, i) => (
                            <div key={i} className="group border-t border-black/10 pt-[48px] space-y-[64px] hover:border-black transition-colors duration-700">
                                <span className="text-[11px] font-bold tracking-[3px] uppercase opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                                <div className="space-y-[24px]">
                                    <h3 className="text-[32px] font-semibold tracking-[-0.96px] uppercase leading-tight">{service.title}</h3>
                                    <p className="text-[16px] leading-[26px] opacity-60 font-normal max-w-[280px]">{service.desc}</p>
                                </div>
                                <div className="flex items-center gap-[12px] text-[11px] font-bold tracking-[3px] uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                                    Deep Dive <ArrowRight size={14} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#090B19] text-white p-[80px] flex flex-col md:flex-row justify-between items-end gap-20">
                        <div className="space-y-12">
                            <h2 className="text-[48px] font-semibold tracking-[-1.44px] uppercase leading-tight">Ready to scale <br /> your vision?</h2>
                            <div className="flex gap-16 text-[11px] font-bold tracking-[3px] uppercase">
                                <div className="flex items-center gap-3"><CheckCircle2 size={14} className="text-white/40" /> Precision</div>
                                <div className="flex items-center gap-3"><CheckCircle2 size={14} className="text-white/40" /> Ambition</div>
                                <div className="flex items-center gap-3"><CheckCircle2 size={14} className="text-white/40" /> Result</div>
                            </div>
                        </div>
                        <button className="h-[64px] px-[64px] bg-white text-black text-[11px] font-bold tracking-[3px] uppercase hover:bg-neutral-200 transition-colors">
                            Start Journey
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
