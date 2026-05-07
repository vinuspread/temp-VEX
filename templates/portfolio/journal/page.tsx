"use client";

import React from "react";
import { Header } from "@/components/portfolio/layout/Header";
import { Footer } from "@/components/portfolio/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioJournalPage() {
    const articles = [
        { date: "MAR 24, 2024", title: "THE ETHICS OF MINIMALISM", category: "ESSAY" },
        { date: "FEB 12, 2024", title: "RECAPTURING FOCUS IN A DIGITAL WORLD", category: "INSIGHT" },
        { date: "JAN 05, 2024", title: "2026 DESIGN TRENDS: RADICAL HONESTY", category: "FUTURE" }
    ];

    return (
        <main className="min-h-screen bg-white selection:bg-[#ED008C] selection:text-white pb-32">
            <Header />
            <div className="pt-48 pb-16 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-32">
                    <div className="space-y-4 border-b border-black/10 pb-12">
                        <span className="text-[13px] font-black tracking-tight text-[#ED008C] uppercase block">Chapter 02</span>
                        <h1 className="text-7xl md:text-[10vw] font-black tracking-tighter leading-[0.8] uppercase italic">Journal</h1>
                    </div>

                    <div className="space-y-0">
                        {articles.map((article, i) => (
                            <Link key={i} href="#" className="group grid grid-cols-1 md:grid-cols-12 py-16 border-b border-black/5 items-center hover:bg-[#F5F5F5] transition-colors px-4">
                                <div className="md:col-span-2 text-[11px] font-black tracking-widest text-black/30 uppercase">{article.date}</div>
                                <div className="md:col-span-8">
                                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase group-hover:text-[#ED008C] transition-colors leading-none">{article.title}</h2>
                                </div>
                                <div className="md:col-span-2 text-right">
                                    <span className="text-[10px] font-black tracking-[0.4em] uppercase border border-black/20 px-4 py-2 group-hover:border-[#ED008C] group-hover:text-[#ED008C] transition-all">{article.category}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
