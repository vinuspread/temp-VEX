import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Users, TrendingUp, Heart, MoveRight } from "lucide-react";

export default function AirlineSubRoute() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col justify-center items-center text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)]"></div>
      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-12 animate-pulse">
         <span className="text-4xl italic font-black">S</span>
      </div>
      <Link href="/" className="z-20 group">
        <h1 className="text-7xl font-serif tracking-tighter uppercase group-hover:italic transition-all duration-500">Sky Premium</h1>
      </Link>
      <p className="mt-8 text-neutral-500 uppercase tracking-[0.3em] text-sm z-10">Premium Airline Template / Remastering in Progress</p>
      <Link href="/" className="mt-20 px-12 py-5 border border-white/20 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-700 z-10">
        Return to Hub
      </Link>
      <div className="absolute bottom-12 text-[10px] tracking-widest text-[#333]">VINUSPREAD ARCHIVE</div>
    </div>
  );
}
