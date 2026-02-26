// ADD AFTER: <Hero /> in HomePage
"use client";
import { useState, useEffect, useRef } from 'react';

export default function WhatWeMake() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const cardWrapper: React.CSSProperties = {
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "2rem",
        border: "1.5px solid #E8E4FF",
        boxShadow: "0 4px 24px rgba(59,47,201,0.06)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
        height: "100%",
    };

    const getCardAnim = (delay: string): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `0.6s cubic-bezier(0.22, 0.68, 0, 1.15) ${delay}`,
        height: "100%",
    });

    const iconBox: React.CSSProperties = {
        width: "44px",
        height: "44px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.4rem",
        position: "absolute",
        top: "1.75rem",
        right: "1.75rem",
    };

    const cardHeadline: React.CSSProperties = {
        fontFamily: "Plus Jakarta Sans, sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
        lineHeight: 1.1,
        marginBottom: "0.3rem",
    };

    const description: React.CSSProperties = {
        fontFamily: "Plus Jakarta Sans, sans-serif",
        fontSize: "0.88rem",
        color: "#6B6B85",
        lineHeight: 1.7,
        marginBottom: "1.5rem",
    };

    const tileLabel: React.CSSProperties = {
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: "white",
    };

    return (
        <section
            ref={sectionRef}
            style={{
                position: "relative",
                padding: "7rem clamp(1.25rem, 6vw, 5rem)",
                background: "#F0EEFF",
                overflow: "hidden",
            }}
        >
            {/* Subtle dot pattern overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(139,47,201,0.12) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                pointerEvents: "none",
                zIndex: 0,
            }} />

            <div style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "1200px",
                margin: "0 auto",
            }}>
                {/* TOP SECTION */}
                <div style={{ textAlign: "center" }}>
                    <div style={{
                        display: "inline-block",
                        background: "rgba(139,47,201,0.08)",
                        border: "1px solid rgba(139,47,201,0.18)",
                        color: "#8B2FC9",
                        borderRadius: "100px",
                        padding: "7px 18px",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "1.25rem",
                    }}>
                        ✦ Three Ways We Show Up For Your Brand
                    </div>

                    <h2 style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(2.2rem, 5vw, 4rem)",
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                        marginBottom: "1rem",
                        textAlign: "center"
                    }}>
                        <span style={{ color: "#18182B", display: "block" }}>Every format your brand</span>
                        <span style={{
                            display: "block",
                            background: "linear-gradient(90deg, #3B2FC9, #8B2FC9, #3ECDC8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>will ever need.</span>
                    </h2>

                    <p style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                        color: "#8E8EA8",
                        maxWidth: "520px",
                        margin: "0 auto 4.5rem auto",
                        lineHeight: 1.8,
                    }}>
                        Product Videos. Knowledge & Trends. Brand Stories.
                        One studio that does all three — and makes each one look
                        like it cost ten times more than it did.
                    </p>
                </div>

                {/* 3 CARDS */}
                <div className="what-we-make-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1.5rem",
                }}>
                    {/* CARD 1: Product Videos */}
                    <div style={getCardAnim("0s")}>
                        <div
                            style={cardWrapper}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 16px 48px rgba(59,47,201,0.13)";
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.borderColor = "rgba(139,47,201,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(59,47,201,0.06)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "#E8E4FF";
                            }}
                        >
                            <div style={{ ...iconBox, background: "linear-gradient(135deg, #F0EEFF, #E4DCFF)" }}>🎬</div>
                            <div>
                                <h3 style={cardHeadline}>
                                    <span style={{ color: "#18182B" }}>Your Product.</span><br />
                                    <span style={{ color: "#8B2FC9" }}>Centre Stage.</span>
                                </h3>
                                <p style={description}>
                                    We turn what your product does into content that makes people want it. High-impact demos built to convert.
                                </p>
                                {/* Visual area */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                    <div style={{ display: "flex", gap: "0.6rem" }}>
                                        <div style={{ flex: 1, height: "100px", borderRadius: "12px", background: "linear-gradient(135deg, #3B2FC9, #6B21C8)", display: "flex", alignItems: "flex-end", padding: "0.75rem" }}>
                                            <span style={tileLabel}>DEMOS</span>
                                        </div>
                                        <div style={{ flex: 1, height: "100px", borderRadius: "12px", background: "linear-gradient(135deg, #3ECDC8, #2BA8A4)", display: "flex", alignItems: "flex-end", padding: "0.75rem" }}>
                                            <span style={tileLabel}>LAUNCHES</span>
                                        </div>
                                    </div>
                                    <div style={{ height: "64px", borderRadius: "12px", background: "#0D0A2E", display: "flex", alignItems: "center", padding: "0 1rem" }}>
                                        <span style={{ ...tileLabel, fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.75)" }}>THE TEQTHOTS CUT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Knowledge & Trends */}
                    <div style={getCardAnim("0.15s")}>
                        <div
                            style={cardWrapper}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 16px 48px rgba(59,47,201,0.13)";
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.borderColor = "rgba(139,47,201,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(59,47,201,0.06)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "#E8E4FF";
                            }}
                        >
                            <div style={{ ...iconBox, background: "linear-gradient(135deg, #FFF8E6, #FDEFC3)" }}>🤖</div>
                            <div>
                                <h3 style={cardHeadline}>
                                    <span style={{ color: "#18182B" }}>Be the Brand</span><br />
                                    <span style={{ color: "#8B2FC9" }}>That Knows.</span>
                                </h3>
                                <p style={description}>
                                    Educate while you sell. We make you the most informed and trusted voice in your space.
                                </p>
                                {/* Visual area */}
                                <div style={{ display: "flex", gap: "0.6rem" }}>
                                    <div style={{ flex: 1, height: "100px", borderRadius: "12px", background: "transparent", border: "1.5px dashed rgba(139,47,201,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ ...tileLabel, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(139,47,201,0.45)" }}>AI / SAAS</span>
                                    </div>
                                    <div style={{ flex: 1, height: "100px", borderRadius: "12px", background: "linear-gradient(135deg, #6B2FC9, #3ECDC8)", display: "flex", alignItems: "flex-end", padding: "0.75rem" }}>
                                        <span style={tileLabel}>TRENDS</span>
                                    </div>
                                </div>
                                {/* Tag pills */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
                                    {["SaaS", "Explainer", "Insights"].map(pill => (
                                        <div key={pill} style={{
                                            background: "rgba(59,47,201,0.07)",
                                            border: "1px solid rgba(59,47,201,0.14)",
                                            color: "#3B2FC9",
                                            fontSize: "10px",
                                            fontWeight: 500,
                                            padding: "3px 10px",
                                            borderRadius: "100px",
                                        }}>
                                            {pill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: Brand Stories */}
                    <div style={getCardAnim("0.3s")}>
                        <div
                            style={cardWrapper}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 16px 48px rgba(59,47,201,0.13)";
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.borderColor = "rgba(139,47,201,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(59,47,201,0.06)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "#E8E4FF";
                            }}
                        >
                            <div style={{ ...iconBox, background: "linear-gradient(135deg, #E8FFF8, #C8F5EC)" }}>🎙️</div>
                            <div>
                                <h3 style={cardHeadline}>
                                    <span style={{ color: "#18182B" }}>The Story</span><br />
                                    <span style={{ color: "#8B2FC9" }}>Behind the Build.</span>
                                </h3>
                                <p style={description}>
                                    People buy from people. We tell founder journeys and culture stories that stick.
                                </p>
                                {/* Thumbnail grid */}
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} style={{ height: "64px", borderRadius: "10px", background: "#EEEAF8" }} />
                                    ))}
                                    <div style={{
                                        height: "64px",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg, #3B2FC9, #8B2FC9)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                        <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "white" }}>+14</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .what-we-make-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
