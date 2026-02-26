"use client";
import { motion } from "framer-motion";
import { Youtube, ArrowRight, Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const featured = [
    {
        title: "Building Your First AI Product: From Idea to Market in 90 Days",
        category: "AI Product Building",
        duration: "18:42",
        description: "A step-by-step breakdown from a founder who shipped three AI products in one year.",
        color: "#a5b4fc",
    },
    {
        title: "From $0 to $2M ARR: The Founder Playbook",
        category: "Founder Stories",
        duration: "24:15",
        description: "The real story behind scaling a SaaS from zero without VC funding.",
        color: "#c4b5fd",
    },
    {
        title: "The SalesTech Stack That 10x'd Our Pipeline",
        category: "SalesTech",
        duration: "14:08",
        description: "Which tools, sequences, and mindsets drove explosive sales growth.",
        color: "#5eead4",
    },
];

export default function HomeFeatured() {
    return (
        <section
            style={{ padding: "6rem clamp(1.5rem,7vw,6rem)", background: "#0d0b21" }}
        >
            {/* Background elements */}
            <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,47,201,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div className="max-w-7xl mx-auto px-6 relative z-1">
                <div className="flex items-end justify-between mb-20 flex-wrap gap-8">
                    <ScrollReveal>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "6px 16px", marginBottom: "1.25rem" }}>
                            <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", textTransform: "uppercase" }}>✦ Featured Episodes</span>
                        </div>
                        <h2 style={{ fontFamily: "var(--font-jakarta)", fontWeight: 800, fontSize: "clamp(2.5rem,5vw,4rem)", color: "#fff", lineHeight: 1 }}>
                            Dive into the<br />
                            <span style={{ background: "linear-gradient(135deg, #a5b4fc, #5eead4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>frontlines.</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <a
                            href="https://www.youtube.com/@TeqThots"
                            target="_blank" rel="noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#08061c", fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: "100px", transition: "all 0.2s" }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(255,255,255,0.2)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                        >
                            All Episodes <ArrowRight size={16} />
                        </a>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featured.map((ep, i) => (
                        <motion.div
                            key={ep.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={{ y: -10 }}
                            className="rounded-3xl overflow-hidden cursor-pointer group"
                            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", boxShadow: "0 20px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)" }}
                        >
                            {/* Thumbnail Area */}
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[#12102e] flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/10">
                                        <Play size={20} className="text-white fill-white ml-1" />
                                    </div>
                                    {/* Abstract glow */}
                                    <div style={{ position: "absolute", top: "-20%", right: "-20%", width: "100px", height: "100px", borderRadius: "50%", background: ep.color, opacity: 0.1, filter: "blur(40px)" }} />
                                </div>
                                <span className="absolute bottom-4 right-4 text-white text-[10px] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full font-bold">
                                    {ep.duration}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="p-7">
                                <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: "100px", background: "rgba(255,255,255,0.05)", border: `1px solid ${ep.color}30`, marginBottom: "1.25rem" }}>
                                    <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 10, color: ep.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{ep.category}</span>
                                </div>
                                <h3 style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: "1.2rem", color: "#fff", lineHeight: 1.3, marginBottom: "0.75rem" }}>{ep.title}</h3>
                                <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{ep.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
