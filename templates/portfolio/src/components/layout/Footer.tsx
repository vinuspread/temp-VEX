'use client';

import Link from 'next/link';
import { designerInfo } from '@/lib/portfolio-data';

export function Footer() {
    return (
        <footer className="bg-white border-t border-black/5 py-40">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-24">
                <div className="space-y-8">
                    <h3 className="text-2xl font-black tracking-tighter">{designerInfo.name}.</h3>
                    <p className="text-[16px] text-[#707070] font-medium leading-relaxed max-w-xs">
                        {designerInfo.philosophy}
                    </p>
                </div>
                <div className="space-y-8">
                    <span className="text-[10px] font-black tracking-tight text-[#ED008C]/30">Navigation</span>
                    <ul className="space-y-4 text-sm font-bold tracking-tight text-[#1A1A1A]">
                        {designerInfo.nav.map((item) => (
                            <li key={item.name}><Link href={item.href} className="hover:text-[#ED008C] transition-all">{item.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-8">
                    <span className="text-[10px] font-black tracking-tight text-black/20">Social Connect</span>
                    <ul className="space-y-4 text-sm font-bold tracking-tight text-[#1A1A1A]">
                        <li><Link href="#" className="hover:text-black/50 transition-all">Instagram</Link></li>
                        <li><Link href="#" className="hover:text-black/50 transition-all">LinkedIn</Link></li>
                        <li><Link href="#" className="hover:text-black/50 transition-all">Twitter</Link></li>
                    </ul>
                </div>
                <div className="space-y-8">
                    <span className="text-[10px] font-black tracking-[0.4em] text-black/20 uppercase">Inquiries</span>
                    <div className="space-y-4">
                        <p className="text-sm font-bold uppercase tracking-widest">{designerInfo.contact.email}</p>
                        <p className="text-[10px] text-[#707070] font-medium uppercase tracking-[0.2em]">{designerInfo.location}</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-6 mt-40 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between gap-8">
                <span className="text-[12px] font-medium text-[#707070]">© 2024 {designerInfo.name} DESIGN. ALL RIGHTS RESERVED.</span>
                <div className="flex gap-8 text-[12px] font-medium text-[#707070]">
                    <span>PRIVACY POLICY</span>
                    <span>TERMS OF SERVICE</span>
                </div>
            </div>
        </footer>
    );
}
