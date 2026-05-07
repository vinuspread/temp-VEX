"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../../src/components/Navbar";
import { Footer } from "../../src/components/Footer";
import { Filter, Grid, SlidersHorizontal } from "lucide-react";

export default function FashionCategoryPage({ params }: { params: { id: string } }) {
    const products = [
        { id: "1", name: "SCULPTURAL BLAZER V.01", price: "$890", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000" },
        { id: "2", name: "OVERSIZED TRENCH COAT", price: "$1,240", img: "https://images.unsplash.com/photo-1544022613-e87d0ff9bb75?q=80&w=1000" },
        { id: "3", name: "MONOLITHIC TROUSERS", price: "$420", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000" },
        { id: "4", name: "ARCHIVAL MERINO KNIT", price: "$380", img: "https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?q=80&w=1000" }
    ];

    return (
        <main className="bg-white min-h-screen selection:bg-black selection:text-white">
            <Navbar />
            <div className="pt-48 pb-32 px-6 max-w-[1440px] mx-auto uppercase">
                {/* Header */}
                <div className="mb-24 flex flex-col items-center text-center space-y-10">
                    <span className="text-[10px] font-bold tracking-[0.6em] text-black/30 animate-pulse">Laboratory Core</span>
                    <h1 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter leading-none italic">
                        {params.id === 'ss26' ? 'SPRING/SUMMER 26' : 'CATALOG SERIES'}
                    </h1>
                    <div className="max-w-xl text-[11px] font-bold tracking-widest text-black/50 leading-relaxed text-center">
                        Redefining the relationship between structure and silhouette. Explorations in high-density merino and sculptural tailoring.
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex justify-between items-center border-y border-black/5 py-8 mb-20 text-[10px] font-bold tracking-[0.3em]">
                    <div className="flex gap-12">
                        <button className="flex items-center gap-3 hover:text-black/40 transition-colors">
                            <SlidersHorizontal size={14} /> Filter
                        </button>
                        <button className="flex items-center gap-3 hover:text-black/40 transition-colors">
                            Sort by: Featured
                        </button>
                    </div>
                    <div className="hidden md:flex gap-4 opacity-20">
                        <Grid size={16} />
                        <div className="w-[1px] h-4 bg-black" />
                        <span className="opacity-50">View: 04 / 32</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
                    {products.map(product => (
                        <Link key={product.id} href={`/fashion/product/${product.id}`} className="group block space-y-8">
                            <div className="aspect-[3/4] bg-[#F5F5F7] overflow-hidden relative">
                                <img 
                                    src={product.img} 
                                    className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-[0.5]" 
                                    alt={product.name} 
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-start border-b border-black/5 pb-4 group-hover:border-black transition-colors">
                                    <h3 className="text-xl font-bold tracking-tighter max-w-[180px] leading-none">{product.name}</h3>
                                    <span className="text-sm font-bold tracking-tight">{product.price}</span>
                                </div>
                                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    <span className="text-[9px] font-bold tracking-[0.3em] text-black/40">Discover Details</span>
                                    <div className="w-8 h-[1px] bg-black" />
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
