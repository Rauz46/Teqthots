"use client";
import React from "react";
import { motion } from "framer-motion";

const CARDS = [
    { id: 1, color: "#3B2FC9" },
    { id: 2, color: "#8B2FC9" },
    { id: 3, color: "#5eead4" },
    { id: 4, color: "#a5b4fc" },
    { id: 5, color: "#c4b5fd" },
    { id: 6, color: "#3B2FC9" },
    { id: 7, color: "#8B2FC9" },
    { id: 8, color: "#5eead4" },
];

export default function HeroCarousel() {
    // Duplicate cards for infinite loop
    const displayCards = [...CARDS, ...CARDS, ...CARDS];

    return (
        <div style={{
            width: "100%",
            overflow: "hidden",
            padding: "6rem 0 10rem",
            position: "relative",
            perspective: "1200px",
            marginTop: "-2rem"
        }}>
            {/* Arched Track */}
            <motion.div
                animate={{
                    x: ["0%", "-33.33%"]
                }}
                transition={{
                    duration: 35,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{
                    display: "flex",
                    gap: "2.5rem",
                    width: "fit-content",
                    padding: "0 2rem",
                    transformStyle: "preserve-3d",
                }}
            >
                {displayCards.map((card, idx) => {
                    // Simple logic to create a subtle "arc" by rotating cards slightly
                    // and offsetting them vertically. Since it's a marquee, we just
                    // alternate or use a wave pattern for a "dynamic" look.
                    const rotation = (idx % 2 === 0) ? 2 : -2;
                    const yOffset = (idx % 3 === 0) ? 15 : (idx % 3 === 1) ? 0 : -15;

                    return (
                        <div
                            key={`${card.id}-${idx}`}
                            style={{
                                width: "230px",
                                height: "380px",
                                borderRadius: "32px",
                                background: `linear-gradient(180deg, ${card.color} 0%, rgba(255,255,255,0.05) 100%)`,
                                border: "1px solid rgba(255,255,255,0.15)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                padding: "2rem",
                                position: "relative",
                                overflow: "hidden",
                                flexShrink: 0,
                                boxShadow: `0 20px 40px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.1)`,
                                transform: `rotateZ(${rotation}deg) translateY(${yOffset}px)`,
                                transition: "all 0.5s ease",
                            }}
                        >
                            {/* Inner Shine */}
                            <div style={{
                                position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%",
                                background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
                                pointerEvents: "none"
                            }} />

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{
                                    width: 32, height: 32,
                                    borderRadius: "12px",
                                    background: "rgba(255,255,255,0.2)",
                                    marginBottom: "0.75rem",
                                    backdropFilter: "blur(8px)"
                                }} />
                                <div style={{ width: "70%", height: 10, borderRadius: 5, background: "rgba(255,255,255,0.2)", marginBottom: "0.5rem" }} />
                                <div style={{ width: "45%", height: 10, borderRadius: 5, background: "rgba(255,255,255,0.12)" }} />
                            </div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Stylized Floating Squiggle Text (similar to reference) */}
            <div style={{
                position: "absolute",
                top: "15%",
                right: "12%",
                transform: "rotate(12deg)",
                fontFamily: "var(--font-caveat, 'Caveat', cursive)",
                fontSize: "1.5rem",
                color: "#c4b5fd",
                opacity: 0.8,
                zIndex: 10,
                pointerEvents: "none",
            }}>
                <div style={{ marginBottom: "-0.5rem" }}>Elevate</div>
                <div>your brand</div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)" }}>
                    <path d="M5 5C5 5 15 25 35 35" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            {/* Fades for smooth edges */}
            <div style={{
                position: "absolute", inset: "0 auto", left: 0, width: "20%",
                background: "linear-gradient(to right, #120a21 10%, transparent)", zIndex: 5, pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute", inset: "0 0 0 auto", width: "20%",
                background: "linear-gradient(to left, #120a21 10%, transparent)", zIndex: 5, pointerEvents: "none"
            }} />
        </div>
    );
}
