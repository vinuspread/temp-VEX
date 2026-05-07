'use client';

import { motion } from 'framer-motion';

export function CategoryBanners() {
    return (
        <section className="bg-white py-24 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[400px] rounded-3xl overflow-hidden cursor-pointer group"
                >
                    <img src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1200" className="w-full h-full object-cover" alt="Formal Shoes" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute bottom-10 left-10 text-white space-y-8">
                        <h3 className="text-4xl font-black tracking-tighter leading-none">Explore All <br /> Formal Shoes</h3>
                        <button className="px-8 py-3 bg-white text-black text-[15px] font-bold tracking-tight rounded-full hover:bg-brand-secondary hover:text-white transition-all">
                            Shop Formal
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[400px] rounded-3xl overflow-hidden cursor-pointer group"
                >
                    <img src="https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200" className="w-full h-full object-cover" alt="Running Shoes" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute bottom-10 left-10 text-white space-y-8">
                        <h3 className="text-4xl font-black tracking-tighter leading-none">Check the Latest <br /> Running Shoes</h3>
                        <button className="px-8 py-3 bg-white text-black text-[15px] font-bold tracking-tight rounded-full hover:bg-brand-secondary hover:text-white transition-all">
                            Shop Running
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
