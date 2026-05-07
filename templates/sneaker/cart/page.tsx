"use client";

import React from "react";
import { Header } from "@/components/sneaker/layout/Header";
import { Footer } from "@/components/sneaker/layout/Footer";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function SneakerCartPage() {
    const cartItems = [
        {
            id: "1",
            name: "AURA RUNNER V1",
            price: "$180",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
            size: "US 10",
            qty: 1
        }
    ];

    return (
        <main className="min-h-screen bg-white selection:bg-black selection:text-white">
            <Header />
            <div className="pt-40 pb-32 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Cart Items */}
                    <div className="flex-1 space-y-12">
                        <div className="flex justify-between items-end border-b border-black pb-8">
                            <h1 className="text-5xl font-black tracking-tighter uppercase italic">Shopping Bag</h1>
                            <span className="text-xs font-black tracking-[0.2em] uppercase opacity-30">( {cartItems.length} ITEMS )</span>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-b border-black/5 pb-12">
                                <div className="md:col-span-3 aspect-square bg-[#F5F5F5] overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                                </div>
                                <div className="md:col-span-5 space-y-4">
                                    <h2 className="text-2xl font-black tracking-tight uppercase italic">{item.name}</h2>
                                    <div className="flex gap-8 text-[11px] font-black tracking-widest text-black/40 uppercase">
                                        <span>Size: {item.size}</span>
                                        <span>Color: Platinum Shell</span>
                                    </div>
                                </div>
                                <div className="md:col-span-2 flex items-center gap-6">
                                    <button className="p-2 hover:bg-black hover:text-white transition-colors border border-black/10"><Minus size={14} /></button>
                                    <span className="text-sm font-black italic">{item.qty}</span>
                                    <button className="p-2 hover:bg-black hover:text-white transition-colors border border-black/10"><Plus size={14} /></button>
                                </div>
                                <div className="md:col-span-2 text-right">
                                    <span className="text-xl font-black italic">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="w-full lg:w-[400px] bg-black text-white p-12 space-y-12 h-fit sticky top-40">
                        <h2 className="text-3xl font-black tracking-tighter uppercase italic">Order Summary</h2>
                        <div className="space-y-6 text-[11px] font-black tracking-[0.2em] uppercase">
                            <div className="flex justify-between opacity-50">
                                <span>Subtotal</span>
                                <span>$180.00</span>
                            </div>
                            <div className="flex justify-between opacity-50">
                                <span>Shipping</span>
                                <span>Calculated next</span>
                            </div>
                            <div className="flex justify-between border-t border-white/20 pt-6 text-lg tracking-tighter">
                                <span>Total</span>
                                <span>$180.00</span>
                            </div>
                        </div>
                        <button className="w-full py-6 bg-white text-black text-[13px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white/90 transition-all italic">
                            Checkout <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
