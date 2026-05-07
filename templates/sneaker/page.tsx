"use client";

import { TemplateWrapper } from "@/components/TemplateWrapper";

import { Footer } from "./src/components/layout/Footer";
import { Header } from "./src/components/layout/Header";
import { Hero } from "./src/components/sections/Hero";
import { ProductGrid } from "./src/components/sections/ProductGrid";
import theme from "./theme.json";

export default function SneakerPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Header />
      <div className="pt-20">
        <Hero />
        <ProductGrid />
        <Footer />
      </div>
    </TemplateWrapper>
  );
}
