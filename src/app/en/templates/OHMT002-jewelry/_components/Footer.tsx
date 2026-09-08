// src/app/templates/OHMT002-jewelry/-internal/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] text-neutral-800 py-12 md:py-24 px-6 md:px-12 border-t border-neutral-200/50 selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-16 lg:gap-24">

        {/* Newsletter / Brand Statement */}
        <div className="col-span-2 space-y-6">
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-900">Join the Maison World</h4>
          <p className="text-sm font-normal text-neutral-500 leading-[var(--leading-body)] max-w-sm normal-case">
            Receive exclusive invitations to atelier exhibitions, early access to new collections, and curated insights into the world of luxury fine jewelry.
          </p>
          <div className="flex border-b border-neutral-300 pb-3 max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-none outline-none w-full text-xs text-neutral-800 placeholder-neutral-400 font-normal"
            />
            <Button variant="ghost" className="text-xs font-medium uppercase tracking-[0.1em]">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Column 1 - Client Services */}
        <div className="space-y-6">
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Client Service</h4>
          <ul className="space-y-3 text-xs font-normal text-neutral-600">
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Order Tracking</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Boutique Appointment</Link></li>
          </ul>
        </div>

        {/* Column 2 - Legal & Philosophy */}
        <div className="space-y-6">
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Legal & Privacy</h4>
          <ul className="space-y-3 text-xs font-normal text-neutral-600">
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Atelier Heritage</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Ethical Sourcing</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-neutral-200/30 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-neutral-500 uppercase tracking-widest">
        <span>© 2026 AVELINE.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
