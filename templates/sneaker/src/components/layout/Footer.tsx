'use client';

import Link from 'next/link';
import { Globe } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white text-brand-secondary pt-32 pb-12 px-6 md:px-12 border-t border-brand-border">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-brand-border pb-24 gap-12 lg:gap-0">

                    {/* Brand Manifesto Section */}
                    <div className="lg:col-span-6 space-y-10 lg:pr-24">
                        <Link href="/" className="font-black text-3xl tracking-tighter uppercase inline-block">
                            vinuspread
                        </Link>
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.1] max-w-lg">
                                Technical footwear merging utility and editorial refinement.
                            </p>
                            <p className="text-brand-secondary/50 text-[15px] font-medium tracking-tight max-w-sm">
                                Designed in Tokyo. Distributed globally. Our objective is to redefine the intersection of performance and high-fashion.
                            </p>
                        </div>
                        <div className="flex gap-8 items-center pt-4">
                            <a href="#" className="text-brand-secondary/40 hover:text-brand-secondary transition-colors"><Globe size={20} /></a>
                            <a href="#" className="text-brand-secondary/40 hover:text-brand-secondary transition-colors"><Globe size={20} /></a>
                            <a href="#" className="text-brand-secondary/40 hover:text-brand-secondary transition-colors"><Globe size={20} /></a>
                        </div>
                    </div>

                    {/* Navigation Columns with Grid Borders */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 h-full">
                        <div className="border-t lg:border-t-0 lg:border-l border-brand-border p-8 lg:p-10 space-y-20">
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-secondary/30">Collection</span>
                            <ul className="space-y-4 text-[16px] font-bold tracking-tight">
                                <li><Link href="/shop-all" className="hover:opacity-50 transition-opacity">Shop All</Link></li>
                                <li><Link href="/new-drops" className="hover:opacity-50 transition-opacity">New Drops</Link></li>
                                <li><Link href="/innovations" className="hover:opacity-50 transition-opacity">Innovations</Link></li>
                                <li><Link href="/archive" className="hover:opacity-50 transition-opacity">Archive</Link></li>
                            </ul>
                        </div>
                        <div className="border-t lg:border-t-0 border-l border-brand-border p-8 lg:p-10 space-y-20">
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-secondary/30">Company</span>
                            <ul className="space-y-4 text-[16px] font-bold tracking-tight">
                                <li><Link href="/stories" className="hover:opacity-50 transition-opacity">Stories</Link></li>
                                <li><Link href="/about-us" className="hover:opacity-50 transition-opacity">About Us</Link></li>
                                <li><Link href="#" className="hover:opacity-50 transition-opacity">Journal</Link></li>
                                <li><Link href="#" className="hover:opacity-50 transition-opacity">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="border-t lg:border-t-0 border-l border-brand-border p-8 lg:p-10 space-y-20 col-span-2 md:col-span-1">
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-secondary/30">Support</span>
                            <ul className="space-y-4 text-[16px] font-bold tracking-tight">
                                <li><Link href="#" className="hover:opacity-50 transition-opacity">Shipping</Link></li>
                                <li><Link href="#" className="hover:opacity-50 transition-opacity">Returns</Link></li>
                                <li><Link href="#" className="hover:opacity-50 transition-opacity">Contact Us</Link></li>
                                <li><Link href="#" className="hover:opacity-50 transition-opacity">Sizing Guide</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center text-[11px] font-bold tracking-wider text-brand-secondary/30 uppercase">
                        <span>© 2025 vinuspread DESIGN CORP.</span>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-brand-secondary">Privacy Policy</Link>
                            <Link href="#" className="hover:text-brand-secondary">Terms of Service</Link>
                        </div>
                    </div>
                    <div className="flex gap-10 text-[11px] font-bold tracking-widest text-brand-secondary/30 uppercase">
                        <span className="flex items-center gap-2">
                            LOCAL TIME <span className="text-brand-secondary font-black">16:28 TOKYO</span>
                        </span>
                        <span>CRAFTED BY vinuspread</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
