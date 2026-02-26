"use client";
import { useState, useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────
   VIDEO CARD COMPONENT (Internal)
   ───────────────────────────────────────────────────────── */
const VideoCard = ({ video, size }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setIsVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (cardRef.current) obs.observe(cardRef.current);
        return () => obs.disconnect();
    }, []);

    const heights: any = { large: "62%", medium: "56.25%", small: "52%" };
    const tagColors: any = {
        blue: { bg: "rgba(59,47,201,0.09)", color: "#3B2FC9", border: "rgba(59,47,201,0.15)" },
        teal: { bg: "rgba(62,205,200,0.1)", color: "#2BA8A4", border: "rgba(62,205,200,0.2)" },
        purple: { bg: "rgba(139,47,201,0.09)", color: "#8B2FC9", border: "rgba(139,47,201,0.15)" }
    };
    const tc = tagColors[video.tagColor] || tagColors.blue;
    const fontSizes: any = { large: "1.1rem", medium: "0.95rem", small: "0.85rem" };
    const paddings: any = { large: "1.25rem", medium: "1rem", small: "0.85rem" };

    return (
        <div
            ref={cardRef}
            className={isVisible ? "fade-up" : ""}
            style={{
                background: "white",
                borderRadius: "18px",
                overflow: "hidden",
                border: "1.5px solid #EEEAF8",
                boxShadow: "0 4px 20px rgba(59,47,201,0.06)",
                transition: "all 0.55s cubic-bezier(0.22, 0.68, 0, 1.15)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: video.delay || '0s'
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 40px rgba(59,47,201,0.14)";
                el.style.borderColor = "rgba(139,47,201,0.28)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(59,47,201,0.06)";
                el.style.borderColor = "#EEEAF8";
            }}
        >
            <div style={{ position: "relative", paddingBottom: heights[size], height: 0, overflow: "hidden", flexShrink: 0 }}>
                <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <div style={{
                    position: "absolute", bottom: "8px", right: "8px",
                    background: "rgba(0,0,0,0.7)", color: "white", fontSize: "11px", fontWeight: "600",
                    padding: "2px 8px", borderRadius: "4px", fontFamily: "Plus Jakarta Sans, sans-serif"
                }}>{video.duration}</div>
            </div>

            <div style={{ padding: paddings[size], flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                    <div style={{
                        fontSize: "10px", fontWeight: "600", letterSpacing: "0.07em", textTransform: "uppercase",
                        padding: "3px 10px", borderRadius: "100px", background: tc.bg, color: tc.color, border: `1px solid ${tc.border}`
                    }}>{video.tag}</div>
                    <div style={{ fontSize: "11px", fontWeight: "500", color: "#8E8EA8" }}>↑ {video.views} views</div>
                </div>
                <h3 style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: "700", color: "#18182B",
                    lineHeight: "1.3", fontSize: fontSizes[size]
                }}>{video.title}</h3>
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   VIDEOS PAGE COMPONENT
   ───────────────────────────────────────────────────────── */
export default function VideosPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Product Videos", "AI & Tech", "Brand Stories", "Trends"];

    const videos = [
        { id: 1, videoId: "dQw4w9WgXcQ", title: "Building AI Products from Zero to One", tag: "Product Videos", tagColor: "blue", duration: "12:34", views: "42K" },
        { id: 2, videoId: "dQw4w9WgXcQ", title: "Go-To-Market for AI Startups in 2025", tag: "AI & Tech", tagColor: "teal", duration: "18:21", views: "28K" },
        { id: 3, videoId: "dQw4w9WgXcQ", title: "The Founder Mindset: Failure as Fuel", tag: "Brand Stories", tagColor: "purple", duration: "09:47", views: "35K" },
        { id: 4, videoId: "dQw4w9WgXcQ", title: "AI Tools That Actually Moved the Needle", tag: "AI & Tech", tagColor: "teal", duration: "14:05", views: "19K" },
        { id: 5, videoId: "dQw4w9WgXcQ", title: "From Idea to Funded: The Real Story", tag: "Brand Stories", tagColor: "purple", duration: "22:10", views: "31K" },
        { id: 6, videoId: "dQw4w9WgXcQ", title: "What's Hot in SaaS Right Now", tag: "Trends", tagColor: "blue", duration: "11:58", views: "24K" },
        { id: 7, videoId: "dQw4w9WgXcQ", title: "Scaling a Team Without Losing Culture", tag: "Brand Stories", tagColor: "purple", duration: "16:33", views: "17K" },
        { id: 8, videoId: "dQw4w9WgXcQ", title: "AI in Production: What Breaks First", tag: "AI & Tech", tagColor: "teal", duration: "13:22", views: "22K" },
        { id: 9, videoId: "dQw4w9WgXcQ", title: "Pricing Your SaaS Product: What Works", tag: "Product Videos", tagColor: "blue", duration: "10:15", views: "38K" },
    ];

    const filteredVideos = activeFilter === "All" ? videos : videos.filter(v => v.tag === activeFilter);

    // Apply delays for staggered animation
    const processedVideos = filteredVideos.map((v, i) => {
        let delay = '0s';
        if (i < 3) delay = `${i * 0.15}s`;
        else if (i < 6) delay = `${0.2 + (i - 3) * 0.15}s`;
        else delay = `${0.35 + (i - 6) * 0.15}s`;
        return { ...v, delay };
    });

    return (
        <div style={{ background: "#F7F7FC", minHeight: "100vh", position: "relative" }}>
            <style>{`
                @media (max-width: 768px) {
                    .videos-hero-cols { grid-template-columns: 1fr !important; }
                    .videos-hero-stack { display: none !important; }
                    .creative-row { grid-template-columns: 1fr !important; }
                    .creative-row-wide { grid-template-columns: 1fr !important; }
                }
            `}</style>

            {/* SECTION 1 — HERO BANNER */}
            <section style={{
                background: "radial-gradient(ellipse at center, #2D1B8B 0%, #1E0A5C 40%, #0D0720 100%)",
                minHeight: "55vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center",
                padding: "120px clamp(1.25rem, 6vw, 5rem) 5rem"
            }}>
                <div style={{
                    position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
                    maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)"
                }} />

                <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,47,201,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "35vw", height: "35vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(62,205,200,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />

                <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
                    <div className="videos-hero-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "3rem" }}>
                        <div>
                            <div style={{
                                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)",
                                borderRadius: "100px", padding: "7px 18px", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "12px", fontWeight: 600,
                                letterSpacing: "0.1em", textTransform: "uppercase", display: "inline-block", marginBottom: "1.25rem"
                            }}>✦ All Episodes</div>
                            <h1 style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: "800", fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                                lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: "1.25rem"
                            }}>
                                <div style={{ color: "white" }}>Every episode.</div>
                                <div style={{ background: "linear-gradient(90deg, #A78BFA, #3ECDC8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every lesson.</div>
                            </h1>
                            <p style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.55)",
                                maxWidth: "420px", lineHeight: 1.8, marginBottom: "2rem"
                            }}>Product demos. AI explainers. Founder stories. Tech trends. Corporate content. All of it, right here.</p>

                            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                {filters.map(f => (
                                    <div key={f} onClick={() => setActiveFilter(f)} style={{
                                        fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "12px", fontWeight: "600", letterSpacing: "0.05em",
                                        padding: "7px 18px", borderRadius: "100px", cursor: "pointer", transition: "all 0.2s",
                                        border: "1.5px solid rgba(255,255,255,0.2)",
                                        background: activeFilter === f ? "white" : "rgba(255,255,255,0.06)",
                                        color: activeFilter === f ? "#3B2FC9" : "rgba(255,255,255,0.55)",
                                        borderColor: activeFilter === f ? "white" : "rgba(255,255,255,0.2)",
                                        boxShadow: activeFilter === f ? "0 4px 16px rgba(255,255,255,0.2)" : "none"
                                    }}>{f}</div>
                                ))}
                            </div>
                        </div>

                        <div className="videos-hero-stack" style={{ position: "relative", height: "280px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ position: "absolute", transform: "rotate(6deg) translateX(30px) translateY(10px)", width: "85%", aspectRatio: "16/9", borderRadius: "16px", background: "rgba(167,139,250,0.15)", border: "1.5px solid rgba(167,139,250,0.2)" }} />
                            <div style={{ position: "absolute", transform: "rotate(3deg) translateX(14px) translateY(4px)", width: "90%", aspectRatio: "16/9", borderRadius: "16px", background: "rgba(167,139,250,0.2)", border: "1.5px solid rgba(167,139,250,0.3)" }} />
                            <div style={{ position: "relative", zIndex: 3, width: "92%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", background: "#0D0A2E", border: "1.5px solid rgba(167,139,250,0.4)", boxShadow: "0 16px 48px rgba(0,0,0,0.4)" }}>
                                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.85))", padding: "1.5rem 1rem 0.75rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ background: "rgba(167,139,250,0.3)", color: "#C4B5FD", fontSize: "10px", fontWeight: "600", padding: "3px 10px", borderRadius: "100px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Featured</div>
                                    <div style={{ background: "rgba(255,255,255,0.15)", color: "white", fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "4px" }}>4K</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — VIDEOS — WHITE BACKGROUND */}
            <section style={{ background: "#F7F7FC", padding: "6rem clamp(1.25rem, 6vw, 5rem)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(59,47,201,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>

                    {processedVideos.length >= 1 && activeFilter === "All" ? (
                        <>
                            {/* Row 1 — Spotlight Row */}
                            <div className="creative-row" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
                                <VideoCard video={processedVideos[0]} size="large" />
                                {processedVideos[1] && <VideoCard video={processedVideos[1]} size="small" />}
                                {processedVideos[2] && <VideoCard video={processedVideos[2]} size="small" />}
                            </div>
                            {/* Row 2 — Equal Row */}
                            {processedVideos.length >= 4 && (
                                <div className="creative-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "1.25rem" }}>
                                    <VideoCard video={processedVideos[3]} size="medium" />
                                    {processedVideos[4] && <VideoCard video={processedVideos[4]} size="medium" />}
                                    {processedVideos[5] && <VideoCard video={processedVideos[5]} size="medium" />}
                                </div>
                            )}
                            {/* Row 3 — Wide Row */}
                            {processedVideos.length >= 7 && (
                                <div className="creative-row-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
                                    <VideoCard video={processedVideos[6]} size="medium" />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                        {processedVideos[7] && <VideoCard video={processedVideos[7]} size="small" />}
                                        {processedVideos[8] && <VideoCard video={processedVideos[8]} size="small" />}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.25rem" }}>
                            {processedVideos.map(v => <VideoCard key={v.id} video={v} size="medium" />)}
                        </div>
                    )}

                    <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
                        <p style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "14px", color: "#8E8EA8", marginBottom: "1.25rem" }}>All episodes live on YouTube. New drops every week.</p>
                        <a href="https://www.youtube.com/@TeqThots" target="_blank" rel="noreferrer" style={{
                            display: "inline-block", background: "linear-gradient(90deg, #3B2FC9, #8B2FC9)", color: "white", border: "none",
                            fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: "700", fontSize: "15px", padding: "14px 40px", borderRadius: "100px",
                            boxShadow: "0 8px 28px rgba(59,47,201,0.32)", transition: "all 0.2s", textDecoration: "none"
                        }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.transform = "translateY(-2px)";
                                el.style.boxShadow = "0 14px 36px rgba(59,47,201,0.45)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.transform = "translateY(0)";
                                el.style.boxShadow = "0 8px 28px rgba(59,47,201,0.32)";
                            }}>▶ Open Full Channel</a>
                    </div>
                </div>
            </section>

        </div>
    );
}
