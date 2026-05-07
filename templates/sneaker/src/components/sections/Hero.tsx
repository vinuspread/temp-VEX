'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroProducts = [
    {
        name: 'Leather Loafers',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800',
        color: '#F5F5F5'
    },
    {
        name: 'Vortex Runners',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800',
        color: '#F0F4F8'
    },
    {
        name: 'Desert Boots',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800',
        color: '#FAF6F2'
    }
];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroProducts.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const product = heroProducts[currentIndex];

    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#D2B48C] overflow-hidden">
            {/* Background Lifestyle Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000"
                    className="w-full h-full object-cover"
                    alt="Lifestyle Model"
                />
                <div className="absolute inset-0 bg-black/5" />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-12 items-center">

                {/* Left Side Content */}
                <div className="col-span-12 lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                            Explore Premium Shoes
                        </h1>

                        <p className="text-white/90 text-lg md:text-xl font-medium tracking-[-0.01em] max-w-xl">
                            Discover our curated collection of high-performance footwear designed for the modern stride.
                        </p>


                        <div className="flex gap-4">
                            <button className="px-10 py-4 bg-brand-secondary text-white text-[15px] font-bold tracking-tight rounded-md hover:bg-black transition-all">
                                Woman
                            </button>
                            <button className="px-10 py-4 bg-white text-brand-secondary text-[15px] font-bold tracking-tight rounded-md hover:bg-neutral-100 transition-all">
                                Man
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Rolling Product Card */}
                <div className="hidden lg:flex lg:col-span-6 justify-end relative h-[500px] items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9, x: 40, rotate: 2 }}
                            animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.95, x: -40, rotate: -2 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-[300px] flex flex-col drop-shadow-2xl absolute"
                        >
                            <div className={`aspect-square rounded-t-2xl overflow-hidden relative shadow-inner`} style={{ backgroundColor: product.color }}>
                                <motion.img
                                    key={`img-${currentIndex}`}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                    src={product.image}
                                    className="w-full h-full object-cover"
                                    alt={product.name}
                                />
                            </div>
                            <div className="bg-white p-6 rounded-b-2xl border-t border-neutral-100 shadow-lg flex justify-between items-center">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-black text-brand-secondary tracking-tight">{product.name}</h3>
                                </div>
                                <button className="w-10 h-10 rounded-full bg-brand-secondary text-white flex items-center justify-center hover:bg-black transition-colors shadow-md">
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Simple Indicator Dots */}
                    <div className="absolute -bottom-8 right-0 flex gap-2">
                        {heroProducts.map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-white w-6' : 'bg-white/30'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Technical Tag */}
            <div className="absolute left-12 bottom-12 hidden md:block">
                <span className="text-[9px] font-black text-white/40 tracking-[0.4em] transform -rotate-90 origin-left">EST. 2025 // vinuspread</span>
            </div>
        </section>
    );
}
