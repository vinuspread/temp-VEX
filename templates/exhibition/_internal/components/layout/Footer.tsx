import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#F9F6F0] pt-32 pb-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <Link href="/">
          <h2 className="text-4xl font-serif mb-8 italic tracking-widest cursor-pointer hover:opacity-80 transition-opacity">vinuspread</h2>
        </Link>
        <p className="text-sm text-white/40 max-w-md leading-relaxed font-light tracking-wide mb-24">
          Curating the eternal masterpieces into dynamic digital spaces. 
          Experience the Vatican like never before.
        </p>

        <div className="flex flex-col md:flex-row items-center w-full justify-between pt-10 border-t border-white/10 gap-8">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30">© 2026 vinuspread Exhibition.</span>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.5em] text-white/40 mb-10 md:mb-0">
             <Link href="/exhibition/curator-note" className="hover:text-white cursor-pointer transition-colors block">Curator's Note</Link>
             <Link href="/exhibition/collections" className="hover:text-white cursor-pointer transition-colors block">Archives</Link>
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30">Designed for Excellence</span>
        </div>
      </div>
    </footer>
  );
}


