import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutStudios from "@/components/about/AboutStudios";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
    title: "About — TeqThots",
    description: "Powered by lived experience — the trials, pivots, and breakthroughs of creating real AI product companies.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutMission />
            <AboutStudios />
            <AboutCTA />
        </>
    );
}
