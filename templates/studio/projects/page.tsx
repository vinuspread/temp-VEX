"use client";

import React from "react";
import { Header } from "@/components/studio/layout/Header";
import { Footer } from "@/components/studio/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";

export default function StudioProjectsPage() {
    const projects = [
        { title: "Neo Capital", category: "Financial Tech", year: "2024", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" },
        { title: "Zenith Tower", category: "Architectural", year: "2023", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000" },
        { title: "Flux Media", category: "Digital Agency", year: "2024", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000" }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-48 pb-32 px-[64px] max-w-full">
                <div className="flex flex-col gap-[120px]">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-[700px] space-y-[40px]">
                            <span className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">Portfolio</span>
                            <h1 className="text-[80px] leading-[90px] font-semibold tracking-[-2.4px] uppercase italic">
                                Iconic <br /> <span className="opacity-20 not-italic">Structures.</span>
                            </h1>
                        </div>
                        <div className="flex gap-[64px] text-[11px] font-bold tracking-[3px] uppercase mb-4">
                            <button className="border-b-2 border-black pb-2">All Works</button>
                            <button className="opacity-40 hover:opacity-100 transition-all pb-2">Digital</button>
                            <button className="opacity-40 hover:opacity-100 transition-all pb-2">Physical</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-[80px]">
                        {projects.map((project, i) => (
                            <Link key={i} href="#" className="group grid grid-cols-1 md:grid-cols-12 gap-[64px] items-center border-t border-black/5 pt-[80px]">
                                <div className="md:col-span-8 aspect-video overflow-hidden">
                                     <img src={project.img} className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0" alt={project.title} />
                                </div>
                                <div className="md:col-span-4 space-y-[32px]">
                                    <div className="space-y-[12px]">
                                        <span className="text-[11px] font-bold tracking-[3px] uppercase opacity-40">{project.category} // {project.year}</span>
                                        <h3 className="text-[48px] font-semibold tracking-[-1.44px] uppercase leading-tight group-hover:translate-x-4 transition-transform duration-700">{project.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-[12px] text-[11px] font-bold tracking-[3px] uppercase">
                                        View Case Study <MoveRight size={14} className="group-hover:translate-x-4 transition-transform duration-700" />
                                    </div>
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
