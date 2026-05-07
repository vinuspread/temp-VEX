'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const products = [
    {
        id: 'sn-001',
        name: 'Sport Sneakers',
        category: 'Performance',
        price: '$240.00',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200'
    },
    {
        id: 'sn-002',
        name: 'Formal Leather',
        category: 'Luxury',
        price: '$310.00',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200'
    },
    {
        id: 'sn-003',
        name: 'Daily Runner',
        category: 'Lifestyle',
        price: '$190.00',
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200'
    },
    {
        id: 'sn-004',
        name: 'Urban Explorer',
        category: 'Adventure',
        price: '$180.00',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200'
    },
    {
        id: 'sn-005',
        name: 'Cloud Walker',
        category: 'Tech',
        price: '$220.00',
        image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1200'
    },
    {
        id: 'sn-006',
        name: 'Onyx Stealth',
        category: 'Performance',
        price: '$265.00',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200'
    },
    {
        id: 'sn-007',
        name: 'Sandstone Loafer',
        category: 'Luxury',
        price: '$340.00',
        image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1200'
    },
    {
        id: 'sn-008',
        name: 'Arctic Breeze',
        category: 'Lifestyle',
        price: '$210.00',
        image: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1200'
    },
    {
        id: 'sn-009',
        name: 'Gravity Core',
        category: 'Tech',
        price: '$280.00',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200'
    },
    {
        id: 'sn-010',
        name: 'Velvet Stride',
        category: 'Luxury',
        price: '$380.00',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200'
    },
    {
        id: 'sn-011',
        name: 'Neon Pulse',
        category: 'Performance',
        price: '$230.00',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1200'
    },
    {
        id: 'sn-012',
        name: 'Desert Mirage',
        category: 'Adventure',
        price: '$195.00',
        image: 'https://images.unsplash.com/photo-1549298814-57e55a3cff83?q=80&w=1200'
    },
    {
        id: 'sn-013',
        name: 'Zenith Peak',
        category: 'Tech',
        price: '$255.00',
        image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200'
    },
    {
        id: 'sn-014',
        name: 'Mesa Hiker',
        category: 'Adventure',
        price: '$215.00',
        image: 'https://images.unsplash.com/photo-1520639889458-39676b830ac7?q=80&w=1200'
    },
    {
        id: 'sn-015',
        name: 'Linear Pro',
        category: 'Lifestyle',
        price: '$175.00',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200'
    },
    {
        id: 'sn-016',
        name: 'Imperial Brogue',
        category: 'Luxury',
        price: '$420.00',
        image: 'https://images.unsplash.com/photo-1614252235316-8c8afbc9bc0d?q=80&w=1200'
    }
];

export function ProductGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const currentProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {currentProducts.map((product, i) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="group flex flex-col"
                    >
                        <div className="relative aspect-square bg-[#F8F8F8] rounded-3xl overflow-hidden mb-6">
                            <img
                                src={product.image}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                alt={product.name}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary shadow-lg">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <p className="text-[11px] font-medium text-brand-secondary/50 tracking-[-0.01em]">{product.category}</p>
                            <h3 className="text-lg font-black tracking-tight leading-tight">{product.name}</h3>
                            <p className="text-lg font-black text-brand-secondary pt-1">{product.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination UI */}
            <div className="mt-24 pt-12 border-t border-brand-border flex justify-between items-center text-[12px] font-bold tracking-widest uppercase">
                <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 hover:opacity-50 transition-opacity disabled:opacity-10"
                >
                    <ChevronLeft size={16} /> Previous
                </button>

                <div className="flex gap-8">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`transition-colors ${currentPage === i + 1 ? 'text-brand-accent' : 'text-brand-secondary/30 hover:text-brand-secondary'}`}
                        >
                            {String(i + 1).padStart(2, '0')}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 hover:opacity-50 transition-opacity disabled:opacity-10"
                >
                    Next <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}
