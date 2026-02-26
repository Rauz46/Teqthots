"use client";
import { motion } from "framer-motion";
import { Youtube, Linkedin, ArrowRight } from "lucide-react";

export default function HomeCTA() {
    return (
        <section style={{ padding: "6rem clamp(1.5rem,7vw,6rem)", background: "#0d0b21" }}>
            <div className="relative overflow-hidden rounded-[2.5rem] text-center" style={{ background: "linear-gradient(135deg, #120d3d 0%, #08061c 100%)", padding: "6rem 3rem", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 40px 100px rgba(0,0,0,0.4)" }}>
                {/* Decorative glows */}
                <div style={{ position: "absolute", top: "-50%", right: "-20%", width: "70%", height: "150%", background: "radial-gradient(circle, rgba(139,47,201,0.08) 0%, transparent 70%)", transform: "rotate(15deg)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "-30%", left: "-10%", width: "50%", height: "100%", background: "radial-gradient(circle, rgba(62,205,200,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div className="relative z-10 max-w-2xl mx-auto">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "6px 16px", marginBottom: "1.75rem" }}>
                        <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                            ✦ Join the Platform
                        </span>
                    </div>

                    <h2 style={{ fontFamily: "var(--font-jakarta)", fontWeight: 800, fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "#fff", lineHeight: 1, marginBottom: "1.5rem" }}>
                        Ready to learn from<br />
                        <span style={{ background: "linear-gradient(135deg, #a5b4fc, #5eead4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            real experience?
                        </span>
                    </h2>

                    <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                        Every episode is a lesson learned, a mistake shared, or a breakthrough celebrated. Connect with us — it's where innovation thrives.
                    </p>

                    <div className="flex gap-4 justify-center flex-wrap">
                        <motion.a
                            href="https://www.youtube.com/@TeqThots"
                            target="_blank" rel="noreferrer"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#0c0a1a", fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 15, padding: "16px 36px", borderRadius: "100px", boxShadow: "0 10px 30px rgba(255,255,255,0.15)", transition: "all 0.2s" }}
                        >
                            <Youtube size={18} /> Subscribe on YouTube
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/company/teqthots"
                            target="_blank" rel="noreferrer"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 15, padding: "16px 32px", borderRadius: "100px", backdropFilter: "blur(12px)", transition: "all 0.2s" }}
                        >
                            <Linkedin size={18} /> LinkedIn ↗
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
