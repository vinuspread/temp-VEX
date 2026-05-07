"use client";
import React from "react";
import { motion } from "framer-motion";

const STATS_DATA = [
  { value: "30K+", label: "Products Delivered", detail: "Global Excellence" },
  { value: "500+", label: "Unique Designs", detail: "Signature Series" },
  { value: "15+", label: "Years of Heritage", detail: "Timed Craftsmanship" },
];

export const Stats = () => {
  return (
    <section className="bg-[#F5F5F7] py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {STATS_DATA.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:text-left flex flex-col gap-2"
            >
              <h3 className="text-[64px] md:text-[80px] font-bold text-[#1D1D1F] tracking-tighter leading-none mb-4">
                {item.value}
              </h3>
              <div className="h-[2px] w-12 bg-black mb-6 mx-auto md:mx-0" />
              <p className="text-[14px] font-bold text-[#1D1D1F] uppercase tracking-[0.3em] mb-1">
                {item.label}
              </p>
              <p className="text-[13px] text-[#6E6E73] font-medium uppercase tracking-widest">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
