"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const PRODUCTS = [
  { id: 1, name: "Diamond Solitaire Ring", price: "$4,250", img: "/templates/OHMT002-jewelry/jewelry-ring.png", category: "engagement" },
  { id: 2, name: "Rose Gold Infinity Band", price: "$3,400", img: "/templates/OHMT002-jewelry/infinity-band.png", category: "engagement" },
  { id: 3, name: "Emerald-Cut Halo Ring", price: "$6,800", img: "/templates/OHMT002-jewelry/emerald-cut-ring.png", category: "engagement" },
  { id: 4, name: "Radiant Pearl Pendant", price: "$1,850", img: "/templates/OHMT002-jewelry/jewelry-pendant.png", category: "collections" },
  { id: 5, name: "Classic Tennis Necklace", price: "$15,500", img: "/templates/OHMT002-jewelry/tennis-necklace.png", category: "high-jewelry" },
  { id: 6, name: "Tiffany-Blue Sapphire Bangle", price: "$12,200", img: "/templates/OHMT002-jewelry/bangle-item.png", category: "high-jewelry" },
  { id: 7, name: "Gold Link Chain Bracelet", price: "$2,950", img: "/templates/OHMT002-jewelry/gold-link-bracelet.png", category: "high-jewelry" },
  { id: 8, name: "Diamond Stud Earrings", price: "$1,250", img: "/templates/OHMT002-jewelry/diamond-studs.png", category: "collections" },
  { id: 9, name: "Pearl Drop Earrings", price: "$980", img: "/templates/OHMT002-jewelry/pearl-drop-earrings.png", category: "collections" },
  { id: 10, name: "Emerald Chandelier Earrings", price: "$18,900", img: "/templates/OHMT002-jewelry/emerald-chandelier.png", category: "high-jewelry" },
];

const CATEGORY_ASSETS: Record<string, { bg: string; eyebrow: string }> = {
  collections: { bg: "/templates/OHMT002-jewelry/category-atelier.png", eyebrow: "Collection" },
  engagement: { bg: "/templates/OHMT002-jewelry/category-engagement.png", eyebrow: "Engagement" },
  "high-jewelry": { bg: "/templates/OHMT002-jewelry/category-high-jewelry.png", eyebrow: "Haute Joaillerie" },
  about: { bg: "/templates/OHMT002-jewelry/jewelry-craft.png", eyebrow: "Our Story" },
};

function CategoryContent() {
  const params = useParams();
  const categoryId = String(params?.id || "collections");

  const filteredProducts = PRODUCTS.filter(p => {
    if (categoryId === "collections") return true;
    return p.category === categoryId;
  });

  const asset = CATEGORY_ASSETS[categoryId] || CATEGORY_ASSETS.collections;

  const getCategoryTitle = () => {
    switch (categoryId) {
      case "collections": return "The Collection";
      case "engagement": return "Engagement & Bridal";
      case "high-jewelry": return "High Jewelry";
      case "about": return "The House Heritage";
      default: return "Fine Jewelry";
    }
  };

  const getCategoryDesc = () => {
    switch (categoryId) {
      case "collections": return "Curated modern classics designed to be worn and treasured daily.";
      case "engagement": return "Exquisite diamond rings hand-set to capture your promise of forever.";
      case "high-jewelry": return "Masterpieces of extraordinary rarity, featuring signature brilliance.";
      case "about": return "A century of artisan dedication, framing life's most brilliant moments.";
      default: return "Discover the signature brilliance of AVELINE.";
    }
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)] font-sans text-neutral-900">
        <Navbar />

        {/* Category Header - h-[40vh] */}
        <section className="relative h-[40vh] min-h-[320px] overflow-hidden flex items-center justify-center">
          <img
            src={asset.bg}
            alt={getCategoryTitle()}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />
          <div className="relative z-10 text-center px-6">
            <span className="text-xs text-white/80 mb-3 block tracking-[0.3em] font-bold uppercase">
              {asset.eyebrow}
            </span>
            <h1 className="font-serif text-[length:var(--text-h1)] font-bold text-white leading-[var(--leading-heading)] tracking-tight">
              {getCategoryTitle()}
            </h1>
            <p className="text-sm text-white/70 max-w-xl mx-auto mt-4 leading-relaxed">
              {getCategoryDesc()}
            </p>
          </div>
        </section>

        {categoryId === "about" ? (
          /* About Page Content - split into multiple full-width sections for alternating backgrounds */
          <>
            {/* Story Grid Section */}
            <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                  <div className="aspect-[4/5] overflow-hidden bg-white border border-neutral-100 shadow-sm">
                    <img src="/templates/OHMT002-jewelry/jewelry-visual-detail.png" alt="Craftsmanship" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Artisan Technique</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 leading-[var(--leading-heading)]">Hand-Finished with Passion</h2>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Founded with a dedication to preserving the pristine elegance of gemstones, AVELINE Fine Jewelry is a bridge between nature&apos;s raw beauty and exceptional design. Every single facet is hand-set and hand-polished by our master artisans who spend hundreds of hours to bring out the fire in each stone.
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      We seek permanence. In a world of fast-moving trends, our jewelry is designed to be passed down through generations, holding memories and whispered promises of forever.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Three Pillars Section */}
            <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FAF9F6] border-y border-neutral-200/50">
              <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold">Brand Philosophy</span>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-neutral-900 mt-2">The Three Pillars of AVELINE</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-lg font-serif text-[var(--color-on-primary)] font-bold">I</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800">Ethical Sourcing</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                      We trace every gemstone from its origin to ensure conflict-free, responsible, and ethical mining practices.
                    </p>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-lg font-serif text-[var(--color-on-primary)] font-bold">II</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800">Masterful Cut</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                      Our master lapidaries cut and polish each gem to maximize its refractive index, creating signature brilliance.
                    </p>
                  </div>
                  <div className="bg-white p-8 md:p-10 border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-lg font-serif text-[var(--color-on-primary)] font-bold">III</div>
                    <h4 className="text-lg font-serif font-bold text-neutral-800">Timeless Heirloom</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                      Designed with balance and weight that stands the test of time, built to be passed down through generations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legacy Chronicles (Timeline) */}
            <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12">
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-bold">Our Legacy</span>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-neutral-900 mt-2">Chronicles of Splendor</h3>
                </div>
                <div className="max-w-5xl mx-auto space-y-8 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-neutral-200">

                  {/* 1924 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-0 md:pr-10 md:text-right">
                      <div className="bg-white p-6 md:p-8 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform hover:-translate-y-1 inline-block text-left w-full">
                        <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-primary-ink)]">1924</span>
                        <h4 className="text-base md:text-base font-serif font-bold text-neutral-800 mt-1">The First Atelier</h4>
                        <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                          Our founder opened the first small boutique in Paris, dedicating his life to creating high-jewelry using raw, uncut diamonds.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-[47%]" />
                  </div>

                  {/* 1968 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="hidden md:block w-[47%]" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-10">
                      <div className="bg-white p-6 md:p-8 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform hover:-translate-y-1 inline-block w-full">
                        <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-primary-ink)]">1968</span>
                        <h4 className="text-base md:text-base font-serif font-bold text-neutral-800 mt-1">Royal Appointment</h4>
                        <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                          The House of AVELINE received the prestigious appointment of supplying unique custom gems to royal families across Europe.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2002 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-0 md:pr-10 md:text-right">
                      <div className="bg-white p-6 md:p-8 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform hover:-translate-y-1 inline-block text-left w-full">
                        <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-primary-ink)]">2002</span>
                        <h4 className="text-base md:text-base font-serif font-bold text-neutral-800 mt-1">The Global Expansion</h4>
                        <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                          Opening of our flagship salon in New York and Tokyo, establishing our unique diamond cutting signature worldwide.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-[47%]" />
                  </div>

                  {/* 2026 */}
                  <div className="relative flex flex-col md:flex-row items-start md:justify-between">
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-white -translate-x-[7px] md:-translate-x-2 z-10" />
                    <div className="hidden md:block w-[47%]" />
                    <div className="w-full md:w-[47%] pl-10 md:pl-10">
                      <div className="bg-white p-6 md:p-8 border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform hover:-translate-y-1 inline-block w-full">
                        <span className="text-xl md:text-2xl font-serif font-bold text-[var(--color-primary-ink)]">2026</span>
                        <h4 className="text-base md:text-base font-serif font-bold text-neutral-800 mt-1">The House Heritage Redefined</h4>
                        <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                          Launching our ethical eternity campaign, ensuring all gemstones are sourced with net-zero carbon impact and blockchain tracking.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Pledge Box Section */}
            <section className="pb-24 px-6 md:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="bg-[#1C1C1A] border-t-2 border-t-[var(--color-primary)] border-x border-b border-neutral-800 p-10 md:p-16 text-center max-w-5xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <span className="text-xs tracking-[0.3em] text-[var(--color-primary)] font-bold uppercase block mb-3">Our Promise</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">The AVELINE Pledge</h3>
                  <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-light">
                    Every purchase is accompanied by a certificate of authenticity, a lifetime craftsmanship warranty,<br className="hidden md:block" /> and complimentary resizing and cleaning for the life of the piece.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Products Grid Content */
          <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
            <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {filteredProducts.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[var(--color-bg-secondary)]">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover scale-[1.06] group-hover:scale-[1.12] transition-transform duration-[2.5s] ease-out" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                        <button className="w-full py-4 bg-[var(--color-primary)] text-[var(--color-on-primary)] text-xs font-bold uppercase tracking-[0.15em] hover:bg-neutral-900 hover:text-white transition-colors rounded-none">
                          Request Appointment
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1 text-center">
                      <h4 className="text-sm md:text-base font-serif font-bold text-neutral-800 group-hover:text-[var(--color-primary-ink)] transition-colors leading-[var(--leading-heading)] truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-neutral-500 font-bold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function CategoryPage() {
  return (
    <React.Suspense fallback={null}>
      <CategoryContent />
    </React.Suspense>
  );
}
