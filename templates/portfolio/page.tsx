"use client";
import React from "react";
import { ImageWithFallback } from '@/components/portfolio/ui/ImageWithFallback';
import { motion } from 'framer-motion';
import { projects, designerInfo } from '@/lib/portfolio-data';
import Link from 'next/link';
import { Header } from '@/components/portfolio/layout/Header';
import { Footer } from '@/components/portfolio/layout/Footer';
import theme from "./theme.json";
import { TemplateWrapper } from "@/components/TemplateWrapper";

export default function PortfolioHome() {
    return (
        <TemplateWrapper theme={theme}>
            <main className="min-h-screen bg-white selection:bg-[#ED008C] selection:text-white pb-32 font-sans">
                <Header />
                <div className="pt-48 pb-16 px-6 max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-black/10 pb-12">
                        <div className="space-y-4">
                            <span className="text-[13px] font-black tracking-tight text-[#ED008C] uppercase block">Design Practice</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                                {designerInfo?.tagline || "Authentic Studio"}
                            </h2>
                        </div>
                        <div className="text-right">
                            <span className="text-[12px] font-black tracking-tight text-[#707070] uppercase">Selected Portfolios // 2018—2026</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="px-6 mb-32">
                    <div className="relative h-[80vh] w-full overflow-hidden rounded-[1px] shadow-2xl">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000"
                            alt="Hero Workspace"
                            className="w-full h-full object-cover grayscale brightness-90 contrast-105"
                        />
                        <div className="absolute inset-x-0 bottom-16 flex justify-center pointer-events-none px-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[7vw] font-black text-white leading-none tracking-tighter select-none drop-shadow-2xl opacity-90 uppercase"
                            >
                                Authentic
                            </motion.h1>
                        </div>
                    </div>
                </section>

                {/* Introduction Grid */}
                <section className="py-48 px-6 max-w-[1440px] mx-auto border-b border-black/10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        <div className="lg:col-span-12">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-12"
                            >
                                <span className="text-[13px] font-black tracking-tight text-[#ED008C]/50 uppercase block">Manifesto</span>
                                <h2 className="text-[3.5vw] font-black tracking-tighter leading-[1.2] max-w-6xl text-black">
                                    Crafting digital environments where <span className="text-[#ED008C]">clarity</span> meets emotion.
                                    We define the future of interaction through <span className="text-[#ED008C]">intentional craft</span>.
                                </h2>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Featured Works */}
                <section className="py-60 max-w-[1440px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-8 pb-12">
                        <div className="space-y-6">
                            <span className="text-[13px] font-black tracking-tight text-[#ED008C]/40 uppercase">Featured Works</span>
                            <h2 className="text-[3.5vw] font-black tracking-tighter leading-[1.2]">Recent <br /> Case Studies.</h2>
                        </div>
                        <Link href="/" className="text-[12px] font-black uppercase tracking-tight border-b border-[#ED008C] pb-2 hover:text-[#ED008C] hover:border-[#ED008C] transition-all">
                            Archive [004—2026]
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
                        {projects?.slice(0, 4).map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group block"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden bg-white mb-10 shadow-sm rounded-[1px]">
                                    <ImageWithFallback
                                        src={project.thumbnail}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        alt={project.title}
                                    />
                                    <div className="absolute top-8 left-8">
                                        <span className="bg-white/95 backdrop-blur-sm px-4 py-2 text-[9px] font-black uppercase tracking-tight text-black shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-baseline border-b border-black/5 pb-4 group-hover:border-[#ED008C]/30 transition-colors">
                                        <h3 className="text-2xl font-black tracking-tighter group-hover:text-[#ED008C] transition-colors uppercase">
                                            {project.title}
                                        </h3>
                                        <span className="text-[12px] font-black tracking-tight text-[#707070]">{project.year}</span>
                                    </div>
                                    <p className="text-[#707070] text-lg font-medium max-w-md leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Editorial Quote Section */}
                <section className="py-80 px-6 text-center bg-black text-white overflow-hidden relative rounded-t-[2px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-5xl mx-auto space-y-20 relative z-10"
                    >
                        <span className="text-[13px] font-black tracking-tight text-[#ED008C] uppercase animate-pulse">Core Belief</span>
                        <h2 className="text-[4vw] font-black leading-[1.3] tracking-tighter italic uppercase">
                            "Design is not what <br /> <span className="text-white/40">it looks like</span>; <br /> <span className="text-[#ED008C]">it's how it works.</span>"
                        </h2>
                        <div className="pt-20">
                            <Link href="/" className="inline-block border border-[#ED008C] text-[#ED008C] px-20 py-8 text-[11px] font-black uppercase tracking-tight hover:bg-[#ED008C] hover:text-black transition-all">
                                Back to Hub
                            </Link>
                        </div>
                    </motion.div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/[0.02] leading-none pointer-events-none select-none uppercase italic">
                        A
                    </div>
                </section>
                <Footer />
            </main>
        </TemplateWrapper>
    );
}
