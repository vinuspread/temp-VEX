'use client';

import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000" 
                    className="w-full h-full object-cover"
                    alt="Hero"
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>
            
            <div className="relative z-10 text-center text-white px-6">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="block text-[12px] font-bold tracking-[0.5em] uppercase mb-8"
                >
                    COMMERCIAL EST. 2024
                </motion.span>
                <h1 className="text-[12vw] md:text-[8vw] font-extrabold leading-[0.9] tracking-tighter uppercase mb-12">
                    THE FUTURE <br /> OF FORM.
                </h1>
            </div>
        </section>
    );
}
