"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Headphones, ArrowRight } from "lucide-react";
import React, { useState } from "react";

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationDrawer({ isOpen, onClose }: ReservationDrawerProps) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [audioGuide, setAudioGuide] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#F9F6F0] z-[101] shadow-2xl flex flex-col text-[#0F0F0F]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-black/10">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-black/40 block mb-1">Vatican Museum</span>
                <h2 className="text-2xl font-serif">Quick Reservation</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={24} className="text-black/60" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-10">
              
              {/* Date Selection */}
              <div>
                <h3 className="text-sm uppercase font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Calendar size={16} /> Select Date
                </h3>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-4 bg-transparent border border-black/20 focus:border-black outline-none transition-colors font-sans"
                />
              </div>

              {/* Guests Selection */}
              <div>
                <h3 className="text-sm uppercase font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Users size={16} /> Number of Guests
                </h3>
                <div className="flex items-center border border-black/20 w-fit">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} className="px-4 py-3 hover:bg-black/5">-</button>
                  <span className="px-6 py-3 border-x border-black/20 font-medium">{guests}</span>
                  <button onClick={() => setGuests(guests + 1)} className="px-4 py-3 hover:bg-black/5">+</button>
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h3 className="text-sm uppercase font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Headphones size={16} /> Add-ons
                </h3>
                <label className="flex items-center gap-4 p-4 border border-black/20 cursor-pointer hover:bg-black/5 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={audioGuide}
                    onChange={(e) => setAudioGuide(e.target.checked)}
                    className="w-5 h-5 accent-black" 
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">Audio Guide (English)</span>
                    <span className="text-xs text-black/60">+ €8.00 per person</span>
                  </div>
                </label>
              </div>

              {/* Summary */}
              <div className="mt-auto pt-8 border-t border-black/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase tracking-widest text-black/60">Total Estimated</span>
                  <span className="text-2xl font-serif">€{guests * 20 + (audioGuide ? guests * 8 : 0)}.00</span>
                </div>
                <button className="w-full py-5 bg-[#0F0F0F] text-[#F9F6F0] text-xs uppercase font-bold tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black/80 transition-colors">
                  Confirm Booking <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
