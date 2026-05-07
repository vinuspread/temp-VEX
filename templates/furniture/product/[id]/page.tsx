"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowLeft, ShieldCheck, Truck, RotateCcw, Globe } from "lucide-react";
import { products } from "../../src/lib/data";
import themeData from "../../src/lib/theme.json";
import { Navbar } from "../../src/components/Navbar";
import { Footer } from "../../src/components/Footer";
import Link from "next/link";

const theme = themeData.theme;

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [quantity, setQuantity] = useState(1);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const product = products.find((p) => String(p.id) === String(params.id));

  if (!mounted) return null;
  if (!product) return <div className="pt-40 text-center uppercase font-bold">Product not found</div>;

  return (
    <main className="bg-white min-h-screen pt-32 pb-20 selection:bg-black selection:text-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mb-12 hover:opacity-50 transition-opacity"
        >
          <ArrowLeft size={14} /> Back to Collection
        </button>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Left: Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-3/5 lg:sticky lg:top-32 h-fit"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className={`w-full h-auto object-contain ${theme.interaction.card_hover}`}
            />
          </motion.div>

          {/* Right: Product Info */}
          <div className="flex flex-col lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="border-b border-black/5 pb-10">
                <span className="text-[12px] font-bold text-[#6E6E73] tracking-[0.4em] uppercase mb-4 block">
                  {product.category}
                </span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-[#1D1D1F] leading-[1.1] tracking-tighter uppercase mb-6">
                  {product.name}
                </h1>
                <p className="text-[20px] font-semibold text-[#1D1D1F]">
                  {product.price}
                </p>
              </div>
              
              <div className="h-[1px] w-full bg-black/5 mb-12" />

              <p className="text-lg text-[#6E6E73] leading-relaxed mb-12 max-w-md uppercase font-medium">
                {product.desc}
              </p>

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-16">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Material</h4>
                  <p className="text-[14px] font-semibold text-[#1D1D1F] uppercase">{product.details?.material}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Dimensions</h4>
                  <p className="text-[14px] font-semibold text-[#1D1D1F] uppercase">{product.details?.dimensions}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Origin</h4>
                  <p className="text-[14px] font-semibold text-[#1D1D1F] uppercase">{product.details?.origin}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Shipping</h4>
                  <p className="text-[14px] font-semibold text-[#1D1D1F] uppercase">Worldwide</p>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-6 border border-black/10 rounded-full px-6 py-3">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50 transition-opacity">
                      <Minus size={16} />
                    </button>
                    <span className="text-[14px] font-bold w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50 transition-opacity">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={() => router.push('/furniture/cart')}
                    className={`flex-1 py-5 rounded-full text-[14px] font-bold tracking-[0.2em] uppercase transition-all shadow-xl active:scale-95 ${theme.interaction.button}`}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Visual Narrative Section */}
        <section className="mt-48 pb-64 border-t border-black/10">
          <div className="pt-32 mb-24 px-2">
            <span className="text-[12px] font-bold text-black/40 tracking-[0.4em] uppercase mb-4 block">Visual Narrative</span>
            <h2 className="text-[48px] md:text-[80px] font-bold text-black tracking-tighter leading-none uppercase">Atmos Here.</h2>
          </div>

          {/* 1. Primary Lifestyle Hero */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[21/9] w-full overflow-hidden mb-48 bg-zinc-50 group rounded-2xl shadow-sm"
          >
            <img 
              src="/furniture/lifestyle_narrative.png" 
              className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
              alt="Brand Lifestyle"
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute bottom-12 left-12">
              <p className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Vinuspread Archive 01</p>
            </div>
          </motion.div>

          {/* 2. Focused Storytelling Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-50"
            >
              <img 
                src={product.image} 
                className="w-full h-full object-contain p-12 transition-transform duration-1000 hover:scale-105"
                alt="Product Detail"
              />
            </motion.div>
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h3 className="text-[32px] md:text-[56px] font-bold uppercase tracking-tight leading-[0.85] text-[#1D1D1F]">
                Essential pieces<br/>for modern living.
              </h3>
              <div className="w-12 h-[2px] bg-black mb-8" />
              <p className="text-[16px] text-[#6E6E73] leading-relaxed uppercase font-medium max-w-sm">
                Each piece is a dialogue between material and space. We curate experiences through form, ensuring that every curve and line contributes to a sense of serenity. {product.desc}
              </p>
              <div className="pt-8">
                <Link href="/furniture" className="text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                  Explore More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
