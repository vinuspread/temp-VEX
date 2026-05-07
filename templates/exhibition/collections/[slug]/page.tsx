"use client";

import { use } from "react";
import { collections } from "@exhib/data/collections";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Headphones, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ArtworkDetailPage({ params }: DetailPageProps) {
  const resolvedParams = use(params);
  const artwork = collections.find((c) => c.slug === resolvedParams.slug);

  if (!artwork) {
    notFound();
  }

  // Fallback to single image if array isn't provided
  const images = artwork.images || [artwork.img];

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#F9F6F0] selection:bg-[#F9F6F0] selection:text-[#0F0F0F]">
      
      {/* Top Floating Utility Bar */}
      <div className="fixed top-32 left-0 w-full z-40 px-6 md:px-12 pointer-events-none">
        <Link href="/exhibition/collections" className="pointer-events-auto w-fit flex items-center gap-3 text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity bg-black/50 p-3 rounded-full backdrop-blur-md">
          <ArrowLeft size={16} /> Back to Archive
        </Link>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row relative">
        
        {/* LEFT: Scrolling Image Stack */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 bg-[#0A0A0A]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full aspect-[3/4] md:aspect-auto md:min-h-screen overflow-hidden group"
            >
              <img 
                src={img} 
                alt={`${artwork.title} - view ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
              {/* Badge for perspective if more than 1 image */}
              {images.length > 1 && (
                <div className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.4em] text-white/40 bg-black/40 px-2 py-1 backdrop-blur-sm">
                  Perspective {idx + 1}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* RIGHT: Sticky Content Section */}
        <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 p-8 md:p-20 lg:p-32 flex flex-col justify-center bg-[#0F0F0F]">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-8 block">{artwork.tag} // {artwork.year}</span>
            
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-[0.9] tracking-tighter">
              {artwork.title}
            </h1>
            
            <div className="flex flex-col gap-2 mb-12 pb-12 border-b border-white/10 w-fit">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">Masterpiece By</span>
              <span className="text-xl tracking-widest font-serif italic text-white/90">{artwork.artist}</span>
            </div>

            <p className="text-lg leading-relaxed text-white/70 font-light max-w-xl mb-16">
              {artwork.description}
            </p>

            {/* Audio Player UX */}
            <div className="group flex items-center gap-6 p-6 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer w-full max-w-md">
               <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <Headphones size={20} />
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Curator Audio Insight</span>
                  <span className="text-xs text-white/40 font-mono italic">Length: {artwork.audioDuration}</span>
               </div>
            </div>
            
            {/* Scroll Indicator for left side if multiple images */}
            {images.length > 1 && (
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-20 flex items-center gap-3 text-[9px] uppercase tracking-[0.5em] text-white/30"
              >
                <div className="w-px h-12 bg-white/20" />
                <span>Scroll left to see details</span>
              </motion.div>
            )}
          </motion.div>
        </div>

      </div>
    </main>
  );
}
