import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import WhatWeMake from "@/components/home/WhatWeMake";
import Ticker from "@/components/Ticker";
import AIPrompt from "@/components/AIPrompt";
import HomeDestination from "@/components/home/HomeDestination";
import HomeFeatured from "@/components/home/HomeFeatured";
import HomeCTA from "@/components/home/HomeCTA";
import FeaturedWork from "@/components/home/FeaturedWork";
import AIProcess from "@/components/home/AIProcess";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "TeqThots — Real Tech. Real Thoughts.",
  description: "Where innovation meets introspection — the destination for tech entrepreneurs.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatWeMake />
      <FeaturedWork />
      <AIProcess />
      <CTASection />
    </>
  );
}
