"use client";

import React from "react";
import { Header } from "@/components/studio/layout/Header";
import { Footer } from "@/components/studio/layout/Footer";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function StudioContactPage() {
    return (
        <main className="min-h-screen bg-[#090B19] text-white">
            <Header />
            <div className="pt-48 pb-32 px-[64px] max-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[120px] items-start">
                    <div className="lg:col-span-6 space-y-[80px]">
                        <div className="space-y-[40px]">
                            <span className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">Contact</span>
                            <h1 className="text-[80px] leading-[90px] font-semibold tracking-[-2.4px] uppercase italic">
                                Start your <br /> <span className="opacity-20 not-italic">Legacy.</span>
                            </h1>
                        </div>
                        
                        <div className="space-y-[48px]">
                            <div className="space-y-[16px]">
                                <span className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">Direct Inquiry</span>
                                <h2 className="text-[32px] font-semibold hover:opacity-60 transition-opacity cursor-pointer">HELLO@VINUSPREAD.COM</h2>
                            </div>
                            <div className="space-y-[16px]">
                                <span className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">Office</span>
                                <h2 className="text-[32px] font-semibold">AUSTIN, TX <br /> 401 CONGRESS AVE.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 bg-white/5 p-[80px] space-y-[64px]">
                        <form className="space-y-[48px]">
                            <div className="space-y-[16px] border-b border-white/10 pb-[24px]">
                                <label className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">Your Name</label>
                                <input type="text" className="w-full bg-transparent outline-none text-[18px] uppercase tracking-tighter" placeholder="REQUIRED" />
                            </div>
                            <div className="space-y-[16px] border-b border-white/10 pb-[24px]">
                                <label className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">Email Address</label>
                                <input type="email" className="w-full bg-transparent outline-none text-[18px] uppercase tracking-tighter" placeholder="EMAIL@EXAMPLE.COM" />
                            </div>
                            <div className="space-y-[16px] border-b border-white/10 pb-[24px]">
                                <label className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">Project Summary</label>
                                <textarea className="w-full bg-transparent outline-none text-[18px] uppercase tracking-tighter min-h-[120px] resize-none" placeholder="TELL US ABOUT YOUR VISION" />
                            </div>
                            <button className="w-full h-[80px] bg-white text-black text-[11px] font-bold tracking-[3px] uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-4">
                                Send Inquiry <ArrowUpRight size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
