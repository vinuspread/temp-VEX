'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
    const pathname = usePathname();

    // Define which paths should have a White header (Dark backgrounds)
    // Home ('/') and Contact ('/contact') have dark backgrounds.
    const isDarkPage = pathname === '/' || pathname === '/contact';

    const textColorClass = isDarkPage ? 'text-white' : 'text-[#090B19]';
    const borderColorClass = isDarkPage ? 'border-white' : 'border-[#090B19]';
    const hoverBgClass = isDarkPage ? 'hover:bg-white hover:text-black' : 'hover:bg-[#090B19] hover:text-white';
    const hoverTextClass = isDarkPage ? 'hover:text-neutral-300' : 'hover:text-neutral-500';

    const navItems = [
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
        { name: 'About', href: '/about' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 px-[64px] py-[40px] flex justify-between items-center transition-colors duration-300 mix-blend-difference text-white`}>
            {/* Logo */}
            <Link href="/" className="text-[22px] font-bold tracking-[-0.54px] uppercase leading-[20px]">
                vinuspread.
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-[64px]">
                <div className="flex gap-[48px]">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-[11px] font-bold tracking-[3px] uppercase transition-colors ${hoverTextClass}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <button className={`h-[44px] px-[40px] rounded-[100px] border ${borderColorClass} text-[11px] font-bold tracking-[3px] uppercase transition-colors ${hoverBgClass}`}>
                    Start Project
                </button>
            </nav>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex flex-col gap-[6px] cursor-pointer">
                <div className={`w-[24px] h-[2px] ${isDarkPage ? 'bg-white' : 'bg-[#090B19]'}`} />
                <div className={`w-[24px] h-[2px] ${isDarkPage ? 'bg-white' : 'bg-[#090B19]'}`} />
            </div>
        </header>
    );
}
