"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Ready-to-Wear", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop" },
  { name: "Home Collection", image: "https://images.unsplash.com/photo-1616489953149-8e442998a637?q=80&w=2070&auto=format&fit=crop" }
];

export default function CategoryShowcase() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="group relative h-[70vh] cursor-pointer overflow-hidden border-r border-neutral-100 last:border-0"
          >
            <img 
              src={cat.image} 
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/30 transition-colors" />
            <div className="absolute inset-x-0 bottom-20 flex flex-col items-center">
              <h3 className="display-xl text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {cat.name}
              </h3>
              <span className="label-ui text-white border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Discovery
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
