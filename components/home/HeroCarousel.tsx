"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const CARDS = [
    { id: 1, videoId: "L8ib0Y4VKYU", color: "#3B2FC9" },
    { id: 2, videoId: "uBzZAAjEySk", color: "#8B2FC9" },
    { id: 3, videoId: "PTcZeW620Sk", color: "#5eead4" },
    { id: 4, videoId: "L8ib0Y4VKYU", color: "#a5b4fc" },
    { id: 5, videoId: "uBzZAAjEySk", color: "#c4b5fd" },
    { id: 6, videoId: "PTcZeW620Sk", color: "#3B2FC9" },
];

export default function HeroCarousel() {
    // Duplicate cards for infinite loop
    const displayCards = [...CARDS, ...CARDS];

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
                    x: ["0%", "-50%"]
                }}
                transition={{
                    duration: 40,
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
                    const rotation = (idx % 2 === 0) ? 2 : -2;
                    const yOffset = (idx % 3 === 0) ? 15 : (idx % 3 === 1) ? 0 : -15;

                    return (
                        <div
                            key={`${card.id}-${idx}`}
                            style={{
                                width: "230px",
                                height: "380px",
                                borderRadius: "32px",
                                background: "#000",
                                border: "1px solid rgba(255,255,255,0.15)",
                                position: "relative",
                                overflow: "hidden",
                                flexShrink: 0,
                                boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
                                transform: `rotateZ(${rotation}deg) translateY(${yOffset}px)`,
                                transition: "all 0.5s ease",
                            }}
                        >
                            {/* YouTube Shorts Embed */}
                            <iframe
                                src={`https://www.youtube.com/embed/${card.videoId}?autoplay=1&mute=1&loop=1&playlist=${card.videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
                                style={{
                                    position: "absolute",
                                    top: "-10%",
                                    left: "-50%",
                                    width: "200%",
                                    height: "120%",
                                    border: "none",
                                    pointerEvents: "none",
                                }}
                                title={`Short ${card.videoId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />

                            {/* Protective Glass/Overlay */}
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                background: `linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)`,
                                zIndex: 1,
                                pointerEvents: "none"
                            }} />

                            {/* Card Content Overlay */}
                            <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem", zIndex: 2 }}>
                                <div style={{
                                    width: 28, height: 28,
                                    borderRadius: "8px",
                                    background: "rgba(255,255,255,0.2)",
                                    marginBottom: "0.5rem",
                                    backdropFilter: "blur(4px)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Play size={14} className="text-white fill-white" />
                                </div>
                                <div style={{ width: "60%", height: 6, borderRadius: 3, background: "rgba(255,255,255,0.3)", marginBottom: "0.4rem" }} />
                                <div style={{ width: "40%", height: 6, borderRadius: 3, background: "rgba(255,255,255,0.15)" }} />
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
