"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { ShoppingBag, ArrowRight, Trash2 } from "lucide-react";

export default function FashionCartPage() {
    const items = [
        { id: "1", name: "SCULPTURAL BLAZER V.01", price: "$890", size: "M", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000" }
    ];

    return (
        <main className="bg-white min-h-screen selection:bg-black selection:text-white">
            <Navbar />
            <div className="pt-48 pb-32 px-6 max-w-[1440px] mx-auto uppercase">
                <div className="flex flex-col lg:flex-row gap-24">
                    <div className="flex-1 space-y-16">
                        <div className="border-b border-black pb-8 flex justify-between items-end">
                            <h1 className="text-4xl font-bold tracking-tighter">Shopping Bag</h1>
                            <span className="text-[10px] font-bold tracking-widest text-black/30">1 Item</span>
                        </div>

                        {items.map(item => (
                            <div key={item.id} className="flex flex-col md:flex-row gap-12 border-b border-black/5 pb-16">
                                <div className="w-full md:w-64 aspect-[3/4] bg-[#F5F5F7] overflow-hidden">
                                    <img src={item.img} className="w-full h-full object-cover grayscale" alt={item.name} />
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-2">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-start">
                                            <h2 className="text-2xl font-bold tracking-tighter max-w-xs">{item.name}</h2>
                                            <span className="text-lg font-bold">{item.price}</span>
                                        </div>
                                        <div className="flex gap-10 text-[10px] font-bold tracking-[0.2em] text-black/40">
                                            <span>Size: {item.size}</span>
                                            <span>Color: Carbon</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.2em]">
                                        <div className="flex gap-8">
                                            <button className="border-b border-black pb-1 hover:text-black/40 hover:border-black/40 transition-all">Remove</button>
                                            <button className="border-b border-transparent pb-1 hover:border-black transition-all">Move to Archive</button>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <span className="opacity-30">Quantity</span>
                                            <span className="text-sm">01</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-[400px] space-y-12 h-fit lg:sticky lg:top-48">
                        <div className="space-y-8">
                             <h3 className="text-xl font-bold tracking-tighter border-b border-black pb-6">Summary</h3>
                             <div className="space-y-4 text-[10px] font-bold tracking-widest">
                                 <div className="flex justify-between opacity-40">
                                     <span>Subtotal</span>
                                     <span>$890.00</span>
                                 </div>
                                 <div className="flex justify-between opacity-40">
                                     <span>Shipping</span>
                                     <span>Calculated at next step</span>
                                 </div>
                                 <div className="flex justify-between border-t border-black/5 pt-6 text-sm tracking-tight opacity-100">
                                     <span>Estimated Total</span>
                                     <span>$890.00</span>
                                 </div>
                             </div>
                        </div>
                        <button className="w-full py-8 bg-black text-white text-[10px] font-bold tracking-[0.4em] hover:bg-black/80 transition-all flex items-center justify-center gap-4">
                            Proceed to Checkout <ArrowRight size={14} />
                        </button>
                        <p className="text-[9px] text-center text-black/30 font-bold tracking-tight">
                            Free standard delivery for all members.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
