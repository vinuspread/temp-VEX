'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image?: string;
    breadcrumb?: string;
}

export function PageHero({ title, subtitle, image, breadcrumb }: PageHeroProps) {
    const bgClass = 'text-brand-secondary bg-white';

    return (
        <section className={`pt-40 pb-24 overflow-hidden relative ${bgClass} border-b border-brand-border`}>
            {image && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img src={image} className="w-full h-full object-cover opacity-10 grayscale" alt="" />
                </div>
            )}

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                {breadcrumb && (
                    <div className="flex items-center gap-2 text-[9px] font-black tracking-[0.3em] text-brand-secondary/30 mb-8 uppercase">
                        <span>Shop</span>
                        <div className="w-1 h-1 bg-brand-accent rounded-full" />
                        <span className="text-brand-secondary">{breadcrumb}</span>
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {subtitle && (
                        <span className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">
                            {subtitle}
                        </span>
                    )}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
                        {title}
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}
