"use client";

import { TemplateWrapper } from "@/components/TemplateWrapper";
import { Footer, Newsletter } from "./src/components/Footer";
import { Hero } from "./src/components/Hero";
import { Navbar } from "./src/components/Navbar";
import { BrandSection, ProductGrid } from "./src/components/ProductGrid";
import theme from "./theme.json";

export default function FashionPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <Hero />
      <ProductGrid />
      <BrandSection />
      <Newsletter />
      <Footer />
    </TemplateWrapper>
  );
}
