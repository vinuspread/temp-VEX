'use client';

import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center bg-black overflow-hidden">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-[center_top] opacity-50"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")' }}
            />

            {/* Main Content Layer */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <h1 className="text-white font-semibold font-['Inter'] text-[78px] leading-[94px] tracking-[-3.9px] m-0 p-0">
                        Interior design<br />that matters.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <a
                        href="#"
                        className="inline-flex items-center justify-center h-[54px] px-12 border border-white/75 rounded-[100px] text-white text-[11px] font-normal tracking-[3px] uppercase hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Schedule a call
                    </a>
                </motion.div>

                <div className="w-[1px] h-[100px] bg-white/40 mt-[60px]" />
            </div>

            {/* Bottom Meta Data Layer */}
            <div className="absolute bottom-[48px] left-0 right-0 px-[64px] flex justify-between items-end z-20 text-white">
                <div className="flex gap-[48px] text-[11px] font-normal tracking-[3px] uppercase">
                    <div className="flex flex-col gap-1">
                        <span className="opacity-60">Est.</span>
                        <span>2026</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="opacity-60">Locations</span>
                        <span>Austin / TX</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60">Scroll</span>
                    <div className="w-[1px] h-[64px] bg-white/40" />
                </div>
            </div>
        </section>
    );
}
