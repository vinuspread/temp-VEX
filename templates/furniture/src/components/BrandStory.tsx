"use client";
import React from "react";
import { motion } from "framer-motion";
import bannerLifestyle from "../../asset/banner_lifestyle.png";

export const BrandStory = () => {
  return (
    <section className="bg-white py-48 px-6 md:px-12 selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-24 lg:gap-40">
        {/* Left: Interactive Image Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img 
            src={bannerLifestyle.src} 
            alt="Lifestyle Craftsmanship" 
            className="w-full h-auto object-cover transition-transform duration-[4s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>

        {/* Right: Editorial Narrative */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[12px] font-bold text-[#6E6E73] tracking-[0.4em] uppercase mb-10 block">Our Story / Narrative</span>
            <h2 className="text-[48px] md:text-[64px] font-bold text-[#1D1D1F] leading-[1.05] tracking-tighter mb-12 uppercase">
              Between material <br /> and space.
            </h2>
            <div className="h-[2px] w-16 bg-black mb-12" />
            <p className="text-xl text-[#1D1D1F] font-bold leading-relaxed mb-10 uppercase">
              Founded on the principles of purity and precision, Vinuspread is an archive of essential interiors.
            </p>
            <p className="text-lg text-[#6E6E73] font-medium leading-relaxed mb-16 uppercase italic">
              Each piece in our collection is a dialogue. We explore the tension between raw material and refined form, creating objects that bring a sense of serenity to the modern home. 01 Edition.
            </p>
            <button className="text-[14px] font-bold text-[#1D1D1F] border-b-2 border-black pb-2 hover:opacity-50 transition-all uppercase tracking-widest">
              Read the Journal
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
