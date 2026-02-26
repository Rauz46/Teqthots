"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlowOrb from "@/components/GlowOrb";

export default function AboutCTA() {
    return (
        <section className="relative py-32 overflow-hidden" style={{ background: "#0d0b21" }}>
            <GlowOrb color="navy" size="lg" className="-bottom-20 -left-20 opacity-20" />
            <GlowOrb color="purple" size="md" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="font-body font-extrabold text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-8">
                        Ready to Learn from<br />
                        <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">Real Experience?</span>
                    </h2>
                    <p className="text-slate-400 font-body leading-relaxed text-xl mb-12 max-w-2xl mx-auto">
                        Dive into episodes from founders who&apos;ve built what others only talk about. No fluff. No theory. Pure signal.
                    </p>
                    <Link
                        href="/video"
                        className="group inline-flex items-center gap-4 bg-gradient-to-r from-brand-purple to-brand-teal text-white font-display font-bold px-10 py-5 rounded-full shadow-2xl shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:scale-[1.05] transition-all duration-300 text-lg"
                    >
                        Explore Episodes
                        <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
