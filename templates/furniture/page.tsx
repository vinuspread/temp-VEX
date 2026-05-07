"use client";

import { TemplateWrapper } from "@/components/TemplateWrapper";

import { BrandStory } from "./src/components/BrandStory";
import { Features, Footer } from "./src/components/Footer";
import { Navbar } from "./src/components/Navbar";
import { Newsletter } from "./src/components/Newsletter";
import { ProductGrid } from "./src/components/SectionGrid";
import { Stats } from "./src/components/Stats";
import theme from "./src/lib/theme.json";

export default function FurniturePage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <div className="pt-24">
        <ProductGrid />
        <BrandStory />
        <Stats />
        <Newsletter />
        <Features />
        <Footer />
      </div>
    </TemplateWrapper>
  );
}
