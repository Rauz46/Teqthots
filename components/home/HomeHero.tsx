// REPLACE ONLY: HeroStyles + Hero component
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";
import { Mail, Youtube, Linkedin, Send, CheckCircle, ArrowRight, Play, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Scribble Components
   ───────────────────────────────────────────────────────── */
const ScribbleCircle = () => (
    <motion.svg
        viewBox="0 0 200 60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
            position: "absolute",
            width: "120%",
            height: "140%",
            top: "-20%",
            left: "-10%",
            zIndex: -1,
            pointerEvents: "none",
        }}
    >
        <motion.path
            d="M 5 30 Q 5 5 100 5 Q 195 5 195 30 Q 195 55 100 55 Q 5 55 5 30"
            fill="none"
            stroke="url(#scribbleGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                    pathLength: 1,
                    opacity: 0.6,
                    transition: { duration: 1.5, ease: "easeInOut", delay: 1.2 }
                }
            }}
        />
        <defs>
            <linearGradient id="scribbleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B2FC9" />
                <stop offset="100%" stopColor="#3ECDC8" />
            </linearGradient>
        </defs>
    </motion.svg>
);



/* ─────────────────────────────────────────────────────────
   HeroStyles — scoped font + keyframes, isolated to hero
   ───────────────────────────────────────────────────────── */
export function HeroStyles() {
    return (
        <style>{`
      @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');

      .hero-heading {
        font-family: 'Clash Display', sans-serif !important;
        font-weight: 700;
      }

      /* ── fade up (used for eyebrow + headline lines) ── */
      @keyframes heroFadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0);    }
      }
      .hero-fade-up-0  { animation: heroFadeUp 0.6s ease both; }
      .hero-fade-up-15 { animation: heroFadeUp 0.6s ease 0.15s both; }
      .hero-fade-up-35 { animation: heroFadeUp 0.6s ease 0.35s both; }
      .hero-fade-in-15 { animation: heroFadeIn 1s ease 1.5s both; }

      @keyframes heroFadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }

      /* ── bridge halves animation ── */
      @keyframes bridgeLeft {
        from { opacity: 0; transform: translateX(-120px); }
        to   { opacity: 1; transform: translateX(0);      }
      }
      @keyframes bridgeRight {
        from { opacity: 0; transform: translateX(120px); }
        to   { opacity: 1; transform: translateX(0);     }
      }
      @keyframes bridgeGlow {
        0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
        40%  { opacity: 1; transform: translate(-50%, -50%) scale(1);   }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }
      }

      .hero-bridge-left  { animation: bridgeLeft  0.7s ease-out both; }
      .hero-bridge-right { animation: bridgeRight 0.7s ease-out both; }
      .hero-bridge-glow  { animation: bridgeGlow  0.45s ease-out both; }

    `}</style>
    );
}

/* ─────────────────────────────────────────────────────────
   Background word chips
   ───────────────────────────────────────────────────────── */
const CHIPS = [
    { word: "SaaS", left: "7%", top: "18%", color: "#a78bfa", bg: "rgba(139,92,246,0.12)", float: "floatA", dur: "6s", delay: "0s" },
    { word: "AI", left: "82%", top: "11%", color: "#5eead4", bg: "rgba(62,205,200,0.12)", float: "floatB", dur: "7.5s", delay: "1.2s" },
    { word: "Trends", left: "89%", top: "54%", color: "#a78bfa", bg: "rgba(139,92,246,0.1)", float: "floatC", dur: "8s", delay: "0.5s" },
    { word: "Corporate", left: "4%", top: "63%", color: "#c4b5fd", bg: "rgba(167,139,250,0.1)", float: "floatA", dur: "6.5s", delay: "1.8s" },
    { word: "Product", left: "80%", top: "79%", color: "#5eead4", bg: "rgba(62,205,200,0.1)", float: "floatB", dur: "7s", delay: "0.8s" },
    { word: "Videos", left: "10%", top: "80%", color: "#a78bfa", bg: "rgba(139,92,246,0.12)", float: "floatC", dur: "5.5s", delay: "1.5s" },
    { word: "Knowledge", left: "46%", top: "89%", color: "#c4b5fd", bg: "rgba(167,139,250,0.1)", float: "floatA", dur: "9s", delay: "0.3s" },
];

/* ─────────────────────────────────────────────────────────
   Hero component
   ───────────────────────────────────────────────────────── */
export default function HomeHero() {
    const [bridgeActive, setBridgeActive] = useState(false);
    const [glowActive, setGlowActive] = useState(false);

    useEffect(() => {
        // Lines 1 + 2 take ~0.35s + 0.6s = ~0.95s → bridge starts at 0.8s delay
        const t1 = setTimeout(() => {
            setBridgeActive(true);
            // Glow fires at the end of the 0.7s slide (total ~1.5s from mount)
            const t2 = setTimeout(() => {
                setGlowActive(true);
                setTimeout(() => setGlowActive(false), 450);
            }, 700);
            return () => clearTimeout(t2);
        }, 800);
        return () => clearTimeout(t1);
    }, []);

    return (
        <>
            <HeroStyles />

            <section
                style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100vh",
                    padding: "8rem 0 4rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    background: "radial-gradient(ellipse at 50% 50%, #311b52 0%, #120a21 70%)",
                }}
            >
                {/* ── Background Orbs (Subtle) ── */}
                <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
                    <div style={{
                        position: "absolute", top: "-10%", right: "-5%", width: "60vw", height: "60vw",
                        background: "radial-gradient(circle, rgba(139,47,201,0.15) 0%, transparent 70%)",
                        filter: "blur(100px)",
                        animation: "floatA 12s ease-in-out infinite",
                    }} />
                    <div style={{
                        position: "absolute", bottom: "-15%", left: "-10%", width: "50vw", height: "50vw",
                        background: "radial-gradient(circle, rgba(62,205,200,0.1) 0%, transparent 70%)",
                        filter: "blur(100px)",
                        animation: "floatB 15s ease-in-out infinite",
                    }} />
                </div>

                {/* ── Dotted overlay (With Vignette) ── */}
                <div style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 1,
                }} />

                {/* ── Floating background chips ── */}
                {CHIPS.map(({ word, left, top, color, bg, float: f, dur, delay }) => (
                    <span key={word} style={{
                        position: "absolute", left, top,
                        fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                        fontWeight: 600, fontSize: "0.82rem",
                        color, background: bg,
                        border: `1px solid ${color}30`,
                        borderRadius: "100px",
                        padding: "4px 12px",
                        opacity: 0.7,
                        userSelect: "none",
                        pointerEvents: "none",
                        zIndex: 1,
                        animation: `${f} ${dur} ease-in-out ${delay} infinite`,
                    }}>
                        {word}
                    </span>
                ))}

                {/* ── Main content ── */}
                <div style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: 1200,
                    padding: "0 clamp(1.5rem, 5vw, 3rem)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}>

                    {/* Eyebrow badge */}
                    <div
                        className="hero-fade-up-0"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            background: "rgba(20, 10, 60, 0.72)",
                            border: "1px solid rgba(139,47,201,0.45)",
                            borderRadius: "100px",
                            padding: "6px 20px",
                            marginBottom: "2.25rem",
                            backdropFilter: "blur(12px)",
                            position: "relative",
                        }}
                    >
                        <span style={{
                            fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                            fontWeight: 600,
                            fontSize: "0.72rem",
                            color: "rgba(255,255,255,0.9)",
                            letterSpacing: "0.09em",
                            textTransform: "uppercase",
                        }}>
                            ✦ Where Brands Come to Go Viral
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="hero-heading"
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            margin: "0 0 2rem",
                            color: "#fff",
                            width: "100%",
                        }}
                    >
                        {/* Line 1 */}
                        <div className="hero-fade-up-15" style={{ display: "block" }}>
                            Big Ideas.
                        </div>

                        {/* Line 2 */}
                        <div className="hero-fade-up-35" style={{ display: "block" }}>
                            Small Attention Spans.
                        </div>

                        {/* Line 3 — bridge animation */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            gap: "0.3em",
                            /* keep invisible until bridge fires so there's no jump */
                            visibility: bridgeActive ? "visible" : "hidden",
                        }}>
                            {/* "We Bridge" — slides from left */}
                            <span
                                id="bridge-left"
                                className={bridgeActive ? "hero-bridge-left" : ""}
                                style={{ color: "#fff", display: "inline-block" }}
                            >
                                We Bridge
                            </span>

                            {/* Glow spark at join */}
                            {glowActive && (
                                <span
                                    className="hero-bridge-glow"
                                    style={{
                                        position: "absolute",
                                        left: "50%", top: "50%",
                                        width: 90, height: 90,
                                        borderRadius: "50%",
                                        background: "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(62,205,200,0.7) 30%, rgba(139,47,201,0.5) 60%, transparent 85%)",
                                        pointerEvents: "none",
                                        filter: "blur(4px)",
                                        zIndex: 10,
                                        boxShadow: "0 0 50px 10px rgba(62,205,200,0.4)",
                                    }}
                                />
                            )}

                            {/* "the Gap." — slides from right, gradient text */}
                            <span
                                id="bridge-right"
                                className={bridgeActive ? "hero-bridge-right" : ""}
                                style={{
                                    display: "inline-block",
                                    position: "relative",
                                    background: "linear-gradient(90deg, #8B2FC9, #3ECDC8)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                <ScribbleCircle />
                                the Gap.
                            </span>
                        </div>
                    </h1>

                    {/* Subtext */}
                    <p
                        className="hero-fade-in-15"
                        style={{
                            fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                            fontWeight: 300,
                            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                            color: "rgba(255,255,255,0.62)",
                            lineHeight: 1.85,
                            maxWidth: 820,
                            margin: "0 0 4rem",
                        }}
                    >
                        SaaS demos. AI explainers. Corporate storytelling. Product
                        launches. Knowledge drops. Trend breakdowns. If it&apos;s
                        tech — we film it, package it, and make people actually want
                        to watch it.
                    </p>
                    <div className="hero-fade-in-15" style={{ width: "100vw", maxWidth: "100vw" }}>
                        <HeroCarousel />
                    </div>
                </div>
            </section>
        </>
    );
}
