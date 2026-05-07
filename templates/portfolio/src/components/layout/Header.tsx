'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { designerInfo } from '@/lib/portfolio-data';

export function Header() {
    const itemCount = 0;
    const toggleCart = () => {};
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
            <nav className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
                <div className="hidden md:flex gap-12">
                    {designerInfo.nav.map((item) => (
                        <Link key={item.name} href={item.href} className="text-[17px] font-black tracking-tighter hover:text-[#ED008C] transition-all relative group">
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ED008C] transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <Link href="/" className="group flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        className="w-12 h-12 bg-black flex items-center justify-center rounded-full transition-colors group-hover:bg-[#ED008C]"
                    >
                        <span className="text-white font-black text-2xl select-none">R</span>
                    </motion.div>
                    <span className="text-2xl font-black tracking-tighter select-none group-hover:text-[#ED008C] transition-colors">vinuspread.</span>
                </Link>

                <div className="flex gap-8 items-center">
                    <Link href="/contact" className="text-[17px] font-black tracking-tighter hover:text-[#ED008C] transition-all">
                        Inquiry
                    </Link>
                    <div className="h-4 w-px bg-black/10" />
                    <button
                        onClick={toggleCart}
                        className="text-[17px] font-black tracking-tighter hover:text-[#ED008C] transition-all outline-none flex items-center gap-2"
                    >
                    </button>
                </div>
            </nav>
        </header>
    );
}
