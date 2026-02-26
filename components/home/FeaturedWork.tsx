// ADD AFTER: <WhatWeMake /> in HomePage
"use client";
import { useState, useEffect, useRef } from 'react';

/* ─── Film-strip card data ─── */
const STRIP = [
    { tag: 'AI Explainer', title: 'Making AI Make Sense', tagBg: 'rgba(62,205,200,0.1)', tagColor: '#2BA8A4', tagBorder: 'rgba(62,205,200,0.2)' },
    { tag: 'Brand Story', title: 'Behind the Build', tagBg: 'rgba(139,47,201,0.08)', tagColor: '#8B2FC9', tagBorder: 'rgba(139,47,201,0.15)' },
    { tag: 'Tech Trends', title: "What's Hot in SaaS", tagBg: 'rgba(59,47,201,0.08)', tagColor: '#3B2FC9', tagBorder: 'rgba(59,47,201,0.15)' },
    { tag: 'Feature Launch', title: 'The Drop', tagBg: 'linear-gradient(90deg, rgba(59,47,201,0.1), rgba(62,205,200,0.1))', tagColor: '#6B5ED4', tagBorder: 'rgba(99,82,210,0.2)' },
];

const f = 'Plus Jakarta Sans, sans-serif';

export default function FeaturedWork() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const stripRef = useRef<HTMLDivElement>(null);
    const [linkHover, setLinkHover] = useState(false);
    const [stripHovers, setStripHovers] = useState<Record<number, boolean>>({});

    /* drag-to-scroll state */
    const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

    /* ── IntersectionObserver ── */
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    /* ── Drag scroll handlers ── */
    const onMouseDown = (e: React.MouseEvent) => {
        const el = stripRef.current;
        if (!el) return;
        dragState.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
        el.style.cursor = 'grabbing';
    };
    const onMouseLeaveStrip = () => {
        dragState.current.isDown = false;
        if (stripRef.current) stripRef.current.style.cursor = 'grab';
    };
    const onMouseUp = () => {
        dragState.current.isDown = false;
        if (stripRef.current) stripRef.current.style.cursor = 'grab';
    };
    const onMouseMoveStrip = (e: React.MouseEvent) => {
        if (!dragState.current.isDown || !stripRef.current) return;
        e.preventDefault();
        const x = e.pageX - stripRef.current.offsetLeft;
        const walk = (x - dragState.current.startX) * 1.5;
        stripRef.current.scrollLeft = dragState.current.scrollLeft - walk;
    };

    /* ── Fade helpers ── */
    const fade = (delay: string): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `all 0.6s cubic-bezier(0.22, 0.68, 0, 1.15) ${delay}`,
    });
    const fadeScale = (delay: string): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.96)',
        transition: `all 0.6s cubic-bezier(0.22, 0.68, 0, 1.15) ${delay}`,
    });
    const fadeIn = (delay: string): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s cubic-bezier(0.22, 0.68, 0, 1.15) ${delay}`,
    });

    /* shared iframe props */
    const iframeAllow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                padding: '7rem clamp(1.25rem, 6vw, 5rem)',
                background: '#F7F7FC',
                overflow: 'hidden',
            }}
        >
            {/* ═══ DOT OVERLAY ═══ */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                pointerEvents: 'none',
                backgroundImage: 'radial-gradient(circle, rgba(59,47,201,0.1) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
            }} />

            {/* ═══ CONTENT ═══ */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>

                {/* ── TOP SECTION ── */}
                <div style={fade('0s')}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(59,47,201,0.07)',
                        border: '1px solid rgba(59,47,201,0.14)',
                        color: '#3B2FC9',
                        borderRadius: '100px', padding: '7px 18px',
                        fontFamily: f, fontSize: '12px', fontWeight: 600,
                        letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                        marginBottom: '1.25rem',
                    }}>✦ Our Work</div>

                    <h2 style={{
                        fontFamily: f, fontWeight: 800,
                        fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                        lineHeight: 1.05, letterSpacing: '-0.02em',
                        marginBottom: '0.75rem',
                    }}>
                        <span style={{ color: '#18182B' }}>Don't take our word for it. </span>
                        <span style={{
                            background: 'linear-gradient(90deg, #8B2FC9, #3ECDC8)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>Watch it.</span>
                    </h2>

                    <p style={{
                        fontFamily: f, fontSize: '1rem',
                        color: '#8E8EA8', marginBottom: '4rem',
                    }}>Real brands. Real briefs. Real results.</p>
                </div>

                {/* ── CINEMA SPOTLIGHT ── */}
                <div style={{
                    position: 'relative',
                    marginBottom: '5rem',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    minHeight: '500px',
                }}>
                    {/* Ambient glow */}
                    <div style={{
                        position: 'absolute',
                        width: '70%', height: '80%',
                        borderRadius: '50%',
                        background: 'radial-gradient(ellipse, rgba(139,47,201,0.18) 0%, rgba(62,205,200,0.1) 50%, transparent 75%)',
                        filter: 'blur(48px)',
                        zIndex: 0, pointerEvents: 'none',
                        animation: 'ambientPulse 4s ease-in-out infinite',
                    }} />

                    {/* Hero video card */}
                    <div style={{
                        ...fadeScale('0.2s'),
                        position: 'relative', zIndex: 2,
                        width: 'min(680px, 100%)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 0 0 1px rgba(139,47,201,0.15), 0 32px 80px rgba(59,47,201,0.22), 0 0 120px rgba(139,47,201,0.1)',
                        background: '#0D0A2E',
                    }}>
                        {/* NOW PLAYING bar */}
                        <div style={{
                            background: '#0D0A2E',
                            padding: '0.75rem 1.25rem',
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{
                                    width: '8px', height: '8px', borderRadius: '50%',
                                    background: '#FF4444', marginRight: '8px',
                                    animation: 'blink 1.5s ease infinite',
                                }} />
                                <span style={{
                                    fontFamily: f, fontSize: '11px', fontWeight: 700,
                                    letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)',
                                }}>NOW PLAYING</span>
                            </div>
                            <span style={{
                                background: 'rgba(255,255,255,0.1)',
                                color: '#fff', fontFamily: f, fontSize: '10px', fontWeight: 700,
                                padding: '2px 8px', borderRadius: '4px',
                                letterSpacing: '0.08em',
                            }}>4K</span>
                        </div>

                        {/* Embed */}
                        <div style={{ position: 'relative', paddingBottom: '52%', height: 0 }}>
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                                title="TeqThots Featured Work"
                                allowFullScreen
                                allow={iframeAllow}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                            />
                        </div>

                        {/* Bottom meta */}
                        <div style={{
                            background: '#0D0A2E',
                            padding: '1rem 1.25rem',
                            display: 'flex', alignItems: 'center', gap: '1rem',
                        }}>
                            <span style={{
                                background: 'rgba(139,47,201,0.25)',
                                color: '#C4B5FD',
                                border: '1px solid rgba(139,47,201,0.3)',
                                fontFamily: f, fontSize: '10px', fontWeight: 600,
                                letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                                padding: '3px 10px', borderRadius: '100px',
                            }}>Product Demo</span>
                            <span style={{
                                fontFamily: f, fontWeight: 700,
                                fontSize: '0.95rem', color: '#fff',
                            }}>Your Product's Best First Impression</span>
                        </div>
                    </div>

                    {/* ── FLOATING STAT CARDS ── */}
                    {/* Stat 1 — top left */}
                    <div className="fw-stat-card" style={{
                        ...fadeIn('0.35s'),
                        position: 'absolute', zIndex: 3,
                        top: '10%', left: '-2%',
                        background: '#fff', borderRadius: '16px',
                        padding: '0.85rem 1.1rem',
                        boxShadow: '0 8px 32px rgba(59,47,201,0.14)',
                        border: '1.5px solid #E8E4FF',
                        minWidth: '130px',
                        animation: 'floatA 3.5s ease-in-out infinite',
                    }}>
                        <div style={{
                            fontFamily: f, fontWeight: 800, fontSize: '1.4rem',
                            background: 'linear-gradient(90deg, #3B2FC9, #8B2FC9)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>42K+</div>
                        <div style={{ fontFamily: f, fontSize: '11px', color: '#8E8EA8', fontWeight: 500 }}>views avg.</div>
                    </div>

                    {/* Stat 2 — right */}
                    <div className="fw-stat-card" style={{
                        ...fadeIn('0.45s'),
                        position: 'absolute', zIndex: 3,
                        top: '30%', right: '-3%',
                        background: '#fff', borderRadius: '16px',
                        padding: '0.85rem 1.1rem',
                        boxShadow: '0 8px 32px rgba(59,47,201,0.14)',
                        border: '1.5px solid #E8E4FF',
                        minWidth: '130px',
                        animation: 'floatB 4s ease-in-out infinite',
                        animationDelay: '0.5s',
                    }}>
                        <div style={{
                            fontFamily: f, fontWeight: 800, fontSize: '1.4rem',
                            background: 'linear-gradient(90deg, #3B2FC9, #8B2FC9)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>5+</div>
                        <div style={{ fontFamily: f, fontSize: '11px', color: '#8E8EA8', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3ECDC8', display: 'inline-block', marginRight: '4px' }} />
                            brand collabs
                        </div>
                    </div>

                    {/* Stat 3 — bottom left */}
                    <div className="fw-stat-card" style={{
                        ...fadeIn('0.55s'),
                        position: 'absolute', zIndex: 3,
                        bottom: '8%', left: '-1%',
                        background: '#fff', borderRadius: '16px',
                        padding: '0.85rem 1.1rem',
                        boxShadow: '0 8px 32px rgba(59,47,201,0.14)',
                        border: '1.5px solid #E8E4FF',
                        minWidth: '130px',
                        animation: 'floatC 3.8s ease-in-out infinite',
                        animationDelay: '1s',
                    }}>
                        <div style={{
                            fontFamily: f, fontWeight: 800, fontSize: '1.4rem',
                            background: 'linear-gradient(90deg, #3B2FC9, #8B2FC9)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>100%</div>
                        <div style={{ fontFamily: f, fontSize: '11px', color: '#8E8EA8', fontWeight: 500 }}>founder-made</div>
                    </div>
                </div>

                {/* ── FILM STRIP ── */}
                <div style={fade('0.5s')}>
                    <div style={{
                        fontFamily: f, fontWeight: 600, fontSize: '13px',
                        color: '#8E8EA8', letterSpacing: '0.04em',
                        marginBottom: '1rem',
                    }}>More from the studio →</div>

                    <div
                        ref={stripRef}
                        onMouseDown={onMouseDown}
                        onMouseLeave={onMouseLeaveStrip}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMoveStrip}
                        className="fw-strip"
                        style={{
                            display: 'flex', gap: '1rem',
                            overflowX: 'auto',
                            paddingBottom: '1rem',
                            cursor: 'grab',
                        }}
                    >
                        {STRIP.map((card, i) => {
                            const isHov = stripHovers[i] || false;
                            const isGradBg = card.tagBg.includes('gradient');
                            return (
                                <div
                                    key={i}
                                    onMouseEnter={() => setStripHovers(p => ({ ...p, [i]: true }))}
                                    onMouseLeave={() => setStripHovers(p => ({ ...p, [i]: false }))}
                                    style={{
                                        flexShrink: 0,
                                        width: '280px',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '1.5px solid #E8E4FF',
                                        background: '#FAFAFA',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        transform: isHov ? 'translateY(-3px)' : 'translateY(0)',
                                        boxShadow: isHov
                                            ? '0 12px 32px rgba(59,47,201,0.12)'
                                            : '0 2px 8px rgba(59,47,201,0.04)',
                                    }}
                                >
                                    {/* Embed */}
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                                            title={card.title}
                                            allowFullScreen
                                            allow={iframeAllow}
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                        />
                                    </div>
                                    {/* Meta */}
                                    <div style={{ padding: '0.85rem 1rem' }}>
                                        <span style={{
                                            ...(isGradBg ? { backgroundImage: card.tagBg } : { background: card.tagBg }),
                                            color: card.tagColor,
                                            border: `1px solid ${card.tagBorder}`,
                                            fontFamily: f, fontSize: '10px', fontWeight: 600,
                                            letterSpacing: '0.07em', textTransform: 'uppercase' as const,
                                            padding: '3px 10px', borderRadius: '100px',
                                            display: 'inline-block', marginBottom: '0.4rem',
                                        }}>{card.tag}</span>
                                        <div style={{
                                            fontFamily: f, fontSize: '0.9rem', fontWeight: 700, color: '#18182B',
                                        }}>{card.title}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── BOTTOM LINK ── */}
                <div style={{ marginTop: '2.5rem', textAlign: 'center' as const }}>
                    <a
                        href="https://www.youtube.com/@TeqThots"
                        target="_blank" rel="noreferrer"
                        onMouseEnter={() => setLinkHover(true)}
                        onMouseLeave={() => setLinkHover(false)}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            fontFamily: f, fontWeight: 600, fontSize: '15px',
                            color: linkHover ? '#8B2FC9' : '#3B2FC9',
                            textDecoration: 'none',
                            borderBottom: `2px solid ${linkHover ? 'rgba(139,47,201,0.5)' : 'rgba(59,47,201,0.2)'}`,
                            paddingBottom: '2px',
                            transition: 'color 0.2s, border-color 0.2s',
                        }}
                    >
                        See everything on YouTube
                        <span style={{
                            display: 'inline-block',
                            transform: linkHover ? 'translateX(5px)' : 'translateX(0)',
                            transition: 'transform 0.2s',
                        }}>→</span>
                    </a>
                </div>
            </div>

            {/* ═══ SCOPED STYLES ═══ */}
            <style>{`
                @keyframes ambientPulse {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                .fw-strip::-webkit-scrollbar { display: none; }
                .fw-strip { scrollbar-width: none; }
                @media (max-width: 768px) {
                    .fw-stat-card { display: none !important; }
                }
            `}</style>
        </section>
    );
}
