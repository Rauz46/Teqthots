"use client";
import { motion } from "framer-motion";
import { BookOpen, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GlowOrb from "@/components/GlowOrb";

const pillars = [
    {
        icon: BookOpen,
        badge: "Real Founders",
        title: "Real Founders. Real Stories.",
        desc: "Every episode of TeqThots comes from founders who&apos;ve been in the arena — building products, facing markets, learning from failures, and celebrating wins. This isn&apos;t theory. It&apos;s practice.",
        accentBg: "from-brand-purple/5 to-brand-navy/5",
        iconBg: "bg-brand-purple/10 text-brand-purple",
        border: "border-brand-purple/10",
    },
    {
        icon: Zap,
        badge: "Insights",
        title: "Insights That Matter.",
        desc: "We cut through the noise to deliver what actually works. Whether it&apos;s AI product development, go-to-market strategy, or founder mindset — every piece of content is battle-tested.",
        accentBg: "from-brand-teal/5 to-brand-purple/5",
        iconBg: "bg-brand-teal/10 text-brand-teal",
        border: "border-brand-teal/10",
    },
];

export default function AboutMission() {
    return (
        <section className="relative py-28 overflow-hidden" style={{ background: "#110820" }}>
            <GlowOrb color="navy" size="lg" className="top-10 left-10 opacity-20" />
            <GlowOrb color="purple" size="md" className="bottom-10 right-10 opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <ScrollReveal className="text-center mb-16">
                    <span className="tag bg-white/5 text-slate-400 border border-white/10 mb-4">Mission</span>
                    <h2 className="font-body font-extrabold text-white text-[clamp(2rem,4vw,3.5rem)] mt-3">
                        Why We Do This
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -4 }}
                            className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden group`}
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${p.iconBg} mb-8 shadow-inner`}>
                                <p.icon size={26} />
                            </div>

                            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-3 block">
                                {p.badge}
                            </span>
                            <h3 className="font-body font-bold text-white text-2xl mb-4 mt-2">{p.title}</h3>
                            <p
                                className="text-slate-400 font-body leading-relaxed text-lg"
                                dangerouslySetInnerHTML={{ __html: p.desc }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
