"use client";
import { motion } from "framer-motion";
import GlowOrb from "@/components/GlowOrb";

export default function AboutHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24" style={{
            background: "radial-gradient(ellipse at center, #311b52 0%, #120a21 70%)"
        }}>
            {/* Background Orbs */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
                <div style={{
                    position: "absolute", top: "-20%", left: "-10%", width: "50vw", height: "50vw",
                    background: "radial-gradient(circle, rgba(139,47,201,0.2) 0%, transparent 70%)",
                    filter: "blur(100px)",
                }} />
            </div>

            {/* Dotted overlay (With Vignette) */}
            <div style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 1,
            }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-teal shadow-[0_0_8px_#2CC2BD]" />
                        <span className="text-slate-300 text-xs font-body uppercase tracking-[0.2em]">Our Story</span>
                    </motion.div>

                    <h1 className="font-body font-extrabold text-white leading-[1.05] mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-[clamp(3rem,8vw,6rem)]"
                        >
                            From Building
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                            className="text-[clamp(3rem,8vw,6rem)] bg-gradient-to-r from-brand-navy via-brand-purple to-brand-teal bg-clip-text text-transparent"
                        >
                            to Believing.
                        </motion.div>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-slate-300 text-xl font-body leading-relaxed max-w-2xl"
                    >
                        TeqThots is powered by lived experience — the trials, pivots, and breakthroughs of creating real AI product companies. We share the wins, missteps, and mindsets that define successful tech ventures.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
