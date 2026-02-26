"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, TrendingUp, Users, Lightbulb } from "lucide-react";

const pillars = [
    {
        icon: Cpu,
        title: "AI Product Building",
        desc: "Hands-on frameworks from founders who've shipped real AI products.",
        color: "#a5b4fc",
        glow: "rgba(165,180,252,0.06)",
        bg: "rgba(165,180,252,0.08)",
        border: "rgba(165,180,252,0.18)",
    },
    {
        icon: Users,
        title: "Founder Stories",
        desc: "Unfiltered conversations about pivots, failures, and breakthroughs.",
        color: "#c4b5fd",
        glow: "rgba(196,181,253,0.06)",
        bg: "rgba(196,181,253,0.08)",
        border: "rgba(196,181,253,0.18)",
    },
    {
        icon: TrendingUp,
        title: "SalesTech & Growth",
        desc: "Battle-tested GTM strategies from operators who've scaled to millions.",
        color: "#5eead4",
        glow: "rgba(94,234,212,0.06)",
        bg: "rgba(94,234,212,0.08)",
        border: "rgba(94,234,212,0.18)",
    },
    {
        icon: Lightbulb,
        title: "Innovation & Future",
        desc: "How the best companies build culture and stay ahead of disruption.",
        color: "#a5b4fc",
        glow: "rgba(165,180,252,0.06)",
        bg: "rgba(165,180,252,0.08)",
        border: "rgba(165,180,252,0.18)",
    },
];

export default function HomeDestination() {
    return (
        <section style={{ background: "#110820", padding: "5rem clamp(1.5rem,7vw,6rem) 7rem", position: "relative" }}>
            {/* Background mesh glow */}
            <div style={{ position: "absolute", bottom: "-10%", left: "50%", width: "60vw", height: "40vw", transform: "translateX(-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,47,201,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Heading row */}
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
                    <div className="flex-1">
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "6px 16px", marginBottom: "1.25rem" }}>
                            <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                                ✦ The Platform
                            </span>
                        </div>
                        <h2 style={{ fontFamily: "var(--font-jakarta)", fontWeight: 800, fontSize: "clamp(2.5rem,5vw,4rem)", color: "#fff", lineHeight: 1, marginBottom: 0 }}>
                            Everything for<br />
                            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #c4b5fd 50%, #5eead4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Tech Entrepreneurs
                            </span>
                        </h2>
                    </div>
                    <div className="flex-1 lg:pt-12">
                        <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "1.75rem", maxWidth: 480 }}>
                            TeqThots isn't just content — it's founder-led intelligence. Every episode features battle-tested insights from the arena.
                        </p>
                        <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 15, color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: 4, transition: "border-color 0.2s" }}>
                            Explore Our Path <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Pillars grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8, boxShadow: `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${pillar.border}` }}
                            className="rounded-3xl p-8 cursor-pointer transition-all duration-300 group"
                            style={{
                                background: `linear-gradient(145deg, ${pillar.bg}, rgba(255,255,255,0.03))`,
                                border: `1px solid ${pillar.border}`,
                                backdropFilter: "blur(20px)",
                                boxShadow: `0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)`,
                            }}
                        >
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                                style={{ background: `${pillar.bg}`, border: `1px solid ${pillar.border}`, color: pillar.color }}>
                                <pillar.icon size={22} />
                            </div>
                            <h3 style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: "0.75rem" }}>
                                {pillar.title}
                            </h3>
                            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
