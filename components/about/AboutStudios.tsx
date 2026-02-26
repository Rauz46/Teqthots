"use client";
import { motion } from "framer-motion";
import GlowOrb from "@/components/GlowOrb";
import ScrollReveal from "@/components/ScrollReveal";

const BAR_HEIGHTS = [10, 24, 16, 30, 12, 28, 20, 14, 32, 18, 22, 36, 10, 26, 14, 18, 28, 12, 20, 16];

export default function AboutStudios() {
    return (
        <section className="relative py-28 overflow-hidden" style={{ background: "#0d0b21" }}>
            <GlowOrb color="purple" size="lg" className="top-10 left-10 opacity-20" />
            <GlowOrb color="teal" size="md" className="bottom-10 right-10 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <ScrollReveal direction="left">
                        <span className="tag bg-white/5 text-slate-400 border border-white/10 mb-4">The Studio</span>
                        <h2 className="font-body font-extrabold text-white text-[clamp(2rem,4vw,3.5rem)] leading-tight mt-3 mb-6">
                            The Studios Behind<br />
                            <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">the Stories</span>
                        </h2>
                        <p className="text-slate-400 font-body leading-relaxed text-lg mb-8 max-w-lg">
                            Every episode is crafted in a professional studio environment, ensuring the highest quality audio and visual experience for our audience. Because great content deserves great production.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { stat: "4K", label: "Video Quality" },
                                { stat: "Studio", label: "Grade Audio" },
                                { stat: "Weekly", label: "New Episodes" },
                                { stat: "Global", label: "Distribution" },
                            ].map(({ stat, label }) => (
                                <div key={label} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                    <div className="font-display font-bold text-white text-2xl mb-1">{stat}</div>
                                    <div className="text-slate-400 text-sm font-body uppercase tracking-wider">{label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Visual */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="relative">
                            {/* Studio visual — abstract art */}
                            <div className="relative aspect-square max-w-sm mx-auto">
                                {/* Main panel */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-purple-900/20" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-8">
                                        <div className="text-7xl drop-shadow-2xl">🎬</div>
                                        <div className="text-center">
                                            <div className="font-body font-bold text-white text-xl">Studio Setup</div>
                                            <div className="text-slate-400 text-sm font-body mt-2">Professional Grade Production</div>
                                        </div>
                                        {/* Fake audio waveform */}
                                        <div className="flex items-center gap-1.5 h-12">
                                            {BAR_HEIGHTS.map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-2 rounded-full"
                                                    style={{ background: i < 14 ? "#a78bfa" : "rgba(255,255,255,0.1)", height: h }}
                                                    animate={{ height: [h * 0.4, h, h * 0.6, h] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                                {/* Floating badge */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                                        <span className="text-xs font-body font-bold text-white tracking-[0.15em]">LIVE REC</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
