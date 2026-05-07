'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isLight = !isScrolled && isHome;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isLight
                ? 'bg-transparent text-white pt-10'
                : 'bg-white/90 backdrop-blur-md text-black shadow-sm py-4 border-b border-brand-border'
                }`}
        >
            <div className="flex items-center gap-12">
                <Link href="/" className="font-black text-2xl tracking-[-0.08em]">
                    vinuspread
                </Link>

                <nav className="hidden lg:flex gap-10 items-center">
                    {['Shop All', 'New Drops', 'Innovations', 'Stories'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Shop All' ? '/shop-all' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className={`text-[15px] font-black tracking-[0.1em] transition-colors ${isLight ? 'hover:text-white/50' : 'hover:text-black/50'
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>


            <div className="flex items-center gap-10">
                <button className="hidden md:block transition-transform hover:scale-110"><Search size={18} strokeWidth={2.5} /></button>
                <button className="relative transition-transform hover:scale-110">
                    <ShoppingBag size={18} strokeWidth={2.5} />
                    <span className={`absolute -top-1.5 -right-1.5 w-4 h-4 text-[8px] font-black rounded-full flex items-center justify-center transition-colors ${isLight ? 'bg-white text-black' : 'bg-black text-white'
                        }`}>0</span>
                </button>

                <button className="lg:hidden"><Menu size={20} strokeWidth={2.5} /></button>
            </div>
        </header>
    );
}

