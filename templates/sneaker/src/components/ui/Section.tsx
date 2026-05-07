'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: ReactNode;
    title?: string;
    description?: string;
    className?: string;
    isDark?: boolean;
}

export function Section({ children, title, description, className = '', isDark = false }: SectionProps) {
    return (
        <section className={`py-24 ${isDark ? 'bg-black text-white' : 'bg-white text-brand-secondary'} ${className}`}>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {(title || description) && (
                    <div className="mb-16">
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black tracking-tighter mb-4"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {description && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-brand-secondary/40 text-[10px] uppercase tracking-widest font-bold"
                            >
                                {description}
                            </motion.p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
