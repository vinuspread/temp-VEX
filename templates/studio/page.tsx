"use client";
import React from "react";
import { Hero } from '@/components/studio/sections/Hero';
import { InspirationSection } from '@/components/studio/sections/InspirationSection';
import { ProjectGrid } from '@/components/studio/sections/ProjectGrid';
import { TeamSection } from '@/components/studio/sections/TeamSection';
import { NewsSection } from '@/components/studio/sections/NewsSection';
import { LeadSection } from '@/components/studio/sections/LeadSection';
import { Header } from '@/components/studio/layout/Header';
import { Footer } from '@/components/studio/layout/Footer';
import theme from "./theme.json";
import { TemplateWrapper } from "@/components/TemplateWrapper";

export default function StudioHome() {
    return (
        <TemplateWrapper theme={theme}>
            <main className="min-h-screen font-sans">
                <Header />
                <Hero />
                <InspirationSection />
                <ProjectGrid />
                <TeamSection />
                <NewsSection />
                <LeadSection />
                <Footer />
            </main>
        </TemplateWrapper>
    );
}
