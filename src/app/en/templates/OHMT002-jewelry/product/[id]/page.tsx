"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { ArrowLeft, ShoppingBag, Calendar, Sparkles, Shield, Heart } from "lucide-react";

const PRODUCTS_EN = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: "$4,250",
    img: "/templates/OHMT002-jewelry/jewelry-ring.png",
    category: "engagement",
    desc: "A timeless diamond solitaire ring crafted with the house's signature master craftsmanship. The 6-prong platinum setting maximizes the diamond's natural brilliance and fire.",
    specs: { carat: "1.5ct", gemstone: "Round Brilliant Diamond", metal: "Platinum 950", clarity: "VVS1" }
  },
  {
    id: 2,
    name: "Rose Gold Infinity Band",
    price: "$3,400",
    img: "/templates/OHMT002-jewelry/infinity-band.png",
    category: "engagement",
    desc: "An elegant rose gold eternity band ring symbolizing eternity. Micro-paved full-cut diamonds wrap around the finger to radiate continuous sparkle.",
    specs: { carat: "0.8ct", gemstone: "Full-Cut Diamonds", metal: "18K Rose Gold", clarity: "VS2" }
  },
  {
    id: 3,
    name: "Emerald-Cut Halo Ring",
    price: "$6,800",
    img: "/templates/OHMT002-jewelry/emerald-cut-ring.png",
    category: "engagement",
    desc: "A captivating art-deco inspired white gold ring featuring a prominent emerald-cut center diamond framed by a brilliant round diamond halo.",
    specs: { carat: "2.0ct", gemstone: "Emerald-Cut Diamond", metal: "Platinum 950", clarity: "VVS2" }
  },
  {
    id: 4,
    name: "Radiant Pearl Pendant",
    price: "$1,850",
    img: "/templates/OHMT002-jewelry/jewelry-pendant.png",
    category: "collections",
    desc: "An exquisite South Sea pearl drop pendant necklace, suspended from a delicate gold chain and topped with shimmering accent diamonds.",
    specs: { gemstone: "South Sea Pearl & Diamonds", metal: "18K Yellow Gold", clarity: "Natural High Lustre" }
  },
  {
    id: 5,
    name: "Classic Tennis Necklace",
    price: "$15,500",
    img: "/templates/OHMT002-jewelry/tennis-necklace.png",
    category: "high-jewelry",
    desc: "A signature statement tennis necklace crafted from the highest atelier. Flawless brilliant-cut diamonds are seamlessly linked in 18K white gold.",
    specs: { carat: "3.5ct Total", gemstone: "Round Cut Diamonds", metal: "18K White Gold", clarity: "VVS1" }
  },
  {
    id: 6,
    name: "Tiffany-Blue Sapphire Bangle",
    price: "$12,200",
    img: "/templates/OHMT002-jewelry/bangle-item.png",
    category: "high-jewelry",
    desc: "An exceptional haute joaillerie bangle bracelet featuring half-set bright blue sapphires and marquise cut diamonds on a polished platinum band.",
    specs: { gemstone: "Blue Sapphires & Diamonds", metal: "Platinum 950", clarity: "Eye-Clean" }
  },
  {
    id: 7,
    name: "Gold Link Chain Bracelet",
    price: "$2,950",
    img: "/templates/OHMT002-jewelry/gold-link-bracelet.png",
    category: "high-jewelry",
    desc: "A bold chain link bracelet meticulously hand-finished by master smiths. Bring out the eternal dignity of 18K yellow gold on your wrist.",
    specs: { gemstone: "Pure Yellow Gold Links", metal: "18K Yellow Gold", clarity: "Polished Satin Finish" }
  },
  {
    id: 8,
    name: "Diamond Stud Earrings",
    price: "$1,250",
    img: "/templates/OHMT002-jewelry/diamond-studs.png",
    category: "collections",
    desc: "Classic 4-prong diamond stud earrings designed for everyday luxury. Cut to perfect proportions to exhibit unparalleled light dispersion.",
    specs: { carat: "0.5ct Each", gemstone: "Round Diamonds", metal: "18K White Gold", clarity: "VS1" }
  },
  {
    id: 9,
    name: "Pearl Drop Earrings",
    price: "$980",
    img: "/templates/OHMT002-jewelry/pearl-drop-earrings.png",
    category: "collections",
    desc: "A graceful pair of drop earrings featuring high-lustre Akoya sea pearls elegantly suspended from fine gold chains.",
    specs: { gemstone: "Akoya Sea Pearls", metal: "18K Yellow Gold", clarity: "AAAA Mirror Lustre" }
  },
  {
    id: 10,
    name: "Emerald Chandelier Earrings",
    price: "$18,900",
    img: "/templates/OHMT002-jewelry/emerald-chandelier.png",
    category: "high-jewelry",
    desc: "Stunning chandelier-style drop earrings inspired by Victorian heritage. Deep green emeralds dangle majestically to frame the face with light.",
    specs: { carat: "4.2ct Total", gemstone: "Deep Forest Emeralds", metal: "18K White Gold", clarity: "VVS2" }
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id || "1");
  const product = PRODUCTS_EN.find(p => p.id === id) || PRODUCTS_EN[0];

  const [bookingModal, setBookingModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your private salon appointment on ${formData.date} has been requested.`);
    setBookingModal(false);
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-[#FAF8F5] text-neutral-900 font-sans selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)] pb-20">
        <Navbar />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-28 md:pt-36">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.2em] mb-8 hover:opacity-75 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Collection
          </button>

          {/* Sticky Split Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">

            {/* Left: Sticky Image Gallery */}
            <div className="md:sticky md:top-28 w-full aspect-[4/5] bg-white border border-neutral-900/10 overflow-hidden relative shadow-sm">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-6 left-6 text-[0.62rem] font-bold uppercase tracking-[0.3em] bg-[var(--color-primary)] text-[var(--color-on-primary)] px-3 py-1.5">
                {product.category}
              </span>
            </div>

            {/* Right: Scrolling Detail Panel */}
            <div className="flex flex-col">
              <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h1)] leading-[var(--leading-heading)] mb-4 font-bold tracking-tight">
                {product.name}
              </h1>

              <div className="text-[1.3rem] font-medium tracking-tight mb-8 text-[#C5A880]">
                {product.price}
              </div>

              <div className="border-t border-b border-neutral-900/10 py-6 mb-8">
                <p className="text-[0.98rem] leading-relaxed text-neutral-700 mb-6 font-normal">
                  {product.desc}
                </p>
                <div className="flex items-center gap-2 text-[0.8rem] text-[#C5A880] uppercase tracking-[0.15em] font-bold">
                  <Sparkles className="w-4 h-4" /> Conflict-Free Ethical Sourcing Guarantee
                </div>
              </div>

              {/* Gemstone Specifications */}
              <div className="mb-8">
                <h3 className="text-[0.8rem] uppercase tracking-[0.2em] font-bold mb-4">Specifications</h3>
                <div className="text-[0.9rem]">
                  <div className="flex items-center justify-between py-4 border-b border-neutral-900/10">
                    <span className="text-neutral-500 text-[0.75rem] uppercase tracking-[0.1em]">Gemstone</span>
                    <span className="font-medium">{product.specs.gemstone}</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-neutral-900/10">
                    <span className="text-neutral-500 text-[0.75rem] uppercase tracking-[0.1em]">Metal Type</span>
                    <span className="font-medium">{product.specs.metal}</span>
                  </div>
                  {product.specs.carat && (
                    <div className="flex items-center justify-between py-4 border-b border-neutral-900/10">
                      <span className="text-neutral-500 text-[0.75rem] uppercase tracking-[0.1em]">Carat Weight</span>
                      <span className="font-medium">{product.specs.carat}</span>
                    </div>
                  )}
                  {product.specs.clarity && (
                    <div className="flex items-center justify-between py-4 border-b border-neutral-900/10">
                      <span className="text-neutral-500 text-[0.75rem] uppercase tracking-[0.1em]">Clarity Grade</span>
                      <span className="font-medium">{product.specs.clarity}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <button
                    onClick={() => alert("Added to cart successfully.")}
                    className="flex-1 bg-[var(--color-primary)] text-[var(--color-on-primary)] py-4 text-[0.85rem] uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-primary-hover)] transition-colors flex items-center justify-center gap-3"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-14 border border-neutral-900/20 flex items-center justify-center transition-colors ${isLiked ? "bg-red-50/50 border-red-200 text-red-500" : "hover:bg-neutral-900/5"}`}
                  >
                    <svg className="w-5 h-5 text-red-500" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <button
                  onClick={() => setBookingModal(true)}
                  className="w-full border border-neutral-900 py-4 text-[0.85rem] uppercase tracking-[0.2em] font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all flex items-center justify-center gap-3"
                >
                  <Calendar className="w-4 h-4" /> Book Salon Appointment
                </button>
              </div>

              {/* Premium Guarantee Badges */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-neutral-900/10 pt-8">
                <div className="flex gap-3 items-start">
                  <Shield className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-1">Lifetime Warranty</h4>
                    <p className="text-[0.72rem] text-neutral-600 leading-relaxed">Each piece is backed by a full warranty card and rigid inspection.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Sparkles className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-1">Maison Packaging</h4>
                    <p className="text-[0.72rem] text-neutral-600 leading-relaxed">Delivered in our signature forest green leather Maison casing.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Private Salon Appointment Booking Modal */}
        {bookingModal && (
          <div className="fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-md flex items-center justify-center p-6">
            <div className="bg-[#FAF8F5] border border-neutral-900/20 max-w-[480px] w-full p-8 shadow-2xl relative">
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.8rem] font-bold mb-4 tracking-tight">Private Salon Booking</h2>
              <p className="text-[0.85rem] text-neutral-600 mb-6 leading-relaxed">
                Experience private 1:1 specialist curation at our exclusive offline salon.
              </p>

              <form onSubmit={handleBooking} className="flex flex-col gap-4">
                <div>
                  <label className="text-[0.68rem] uppercase tracking-[0.15em] font-bold block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-neutral-900/15 px-4 py-2.5 text-[0.9rem] focus:outline-none focus:border-[var(--color-primary-ink)]"
                  />
                </div>
                <div>
                  <label className="text-[0.68rem] uppercase tracking-[0.15em] font-bold block mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-neutral-900/15 px-4 py-2.5 text-[0.9rem] focus:outline-none focus:border-[var(--color-primary-ink)]"
                  />
                </div>
                <div>
                  <label className="text-[0.68rem] uppercase tracking-[0.15em] font-bold block mb-1">Desired Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-neutral-900/15 px-4 py-2.5 text-[0.9rem] focus:outline-none focus:border-[var(--color-primary-ink)]"
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setBookingModal(false)}
                    className="flex-1 border border-neutral-900/20 py-3 text-[0.8rem] uppercase tracking-[0.15em] font-bold hover:bg-neutral-900/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[var(--color-primary)] text-[var(--color-on-primary)] py-3 text-[0.8rem] uppercase tracking-[0.15em] font-bold hover:bg-[var(--color-primary-hover)] transition-colors"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
