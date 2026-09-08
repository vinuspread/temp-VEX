"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

interface FeaturedBrandProps {
  reverse?: boolean;
  brandName: string;
  title: string;
  description: string;
  image: string;
}

export default function FeaturedBrand({ reverse, brandName, title, description, image }: FeaturedBrandProps) {
  return (
    <section className="py-12 md:py-24 px-5 md:px-10 overflow-hidden">
      <div className={`max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`${reverse ? 'md:order-2' : ''}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
            <img
              src={image}
              alt={brandName}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`${reverse ? 'md:order-1' : ''}`}
        >
          <span className="label-ui text-gold-600 mb-4 block tracking-[0.2em]">{brandName}</span>
          <h2 className="display-xl mb-8 leading-none">{title}</h2>
          <p className="text-neutral-600 body-default max-w-md mb-10 leading-[var(--leading-body)] font-normal">
            {description}
          </p>
          <Button variant="ghost" className="label-ui border-b border-neutral-900 pb-1">
            Explore Collection
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
