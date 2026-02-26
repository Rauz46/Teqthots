// ADD AFTER: <FeaturedWork /> in HomePage
"use client";
import { useState, useEffect, useRef } from 'react';

const f = 'Plus Jakarta Sans, sans-serif';

const STEPS = [
    {
        num: '01', title: 'Brief Intelligence',
        label: 'STRATEGY · AUDIENCE · GOALS',
        logs: [
            '[00:00:01] Analysing brand tone and positioning...',
            '[00:00:02] Mapping target audience segments...',
            '[00:00:03] Content strategy matrix: COMPLETE ✓',
        ],
        output: 'Content Strategy Doc · 3 Audience Profiles',
        tags: ['Strategy', 'AI-Powered', 'Brand-Fit'],
        pct: '20%',
    },
    {
        num: '02', title: 'Script Generation',
        label: 'COPY · RETENTION · VOICE',
        logs: [
            '[00:00:04] Loading brand voice model...',
            '[00:00:05] Generating script variants (x3)...',
            '[00:00:06] Retention optimisation: APPLIED ✓',
        ],
        output: 'Final Script · 847 words · 94% retention score',
        tags: ['Script', 'Optimised', 'On-Brand'],
        pct: '40%',
    },
    {
        num: '03', title: 'Smart Production',
        label: 'SCHEDULING · SHOT PLAN · ASSETS',
        logs: [
            '[00:00:07] Building shot list from script...',
            '[00:00:08] Scheduling production timeline...',
            '[00:00:09] Asset checklist generated: READY ✓',
        ],
        output: '28-shot list · 2-day production schedule',
        tags: ['Production', 'Scheduled', 'AI-Planned'],
        pct: '60%',
    },
    {
        num: '04', title: 'Edit & Optimise',
        label: 'CUTS · PACING · QUALITY',
        logs: [
            '[00:00:10] Running AI cut analysis...',
            '[00:00:11] Pacing score: 94/100',
            '[00:00:12] Quality check: PASSED ✓',
        ],
        output: 'Final cut · 2m 34s · 4K export ready',
        tags: ['Edited', '4K', 'Quality-Checked'],
        pct: '80%',
    },
    {
        num: '05', title: 'Publish Intelligence',
        label: 'SEO · THUMBNAILS · TIMING',
        logs: [
            '[00:00:13] Generating 8 thumbnail variants...',
            '[00:00:14] Optimal post time: Tuesday 10AM',
            '[00:00:15] SEO tags injected: LIVE ✓',
        ],
        output: '8 thumbnails · SEO optimised · Scheduled',
        tags: ['Published', 'SEO', 'Max-Reach'],
        pct: '100%',
    },
];

export default function AIProcess() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    /* IntersectionObserver — start auto-advance only after entering viewport */
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    /* Auto-advance every 2.5s once visible */
    const startInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveStep(prev => (prev + 1) % STEPS.length);
        }, 2500);
    };

    useEffect(() => {
        if (!visible) return;
        startInterval();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    const handleStepClick = (i: number) => {
        setActiveStep(i);
        startInterval(); // reset timer
    };

    const s = STEPS[activeStep];

    /* fade helper */
    const fade = (delay: string): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}, transform 0.6s cubic-bezier(0.22,0.68,0,1.15) ${delay}`,
    });

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '7rem clamp(1.25rem, 6vw, 5rem)',
                background: 'linear-gradient(160deg, #EEF0FF 0%, #E8E0FF 50%, #F0EEFF 100%)',
            }}
        >
            {/* Inject keyframes + responsive grid */}
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.2; }
                }
                @keyframes logFadeIn {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .aiprocess-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 2rem;
                    align-items: start;
                    margin-bottom: 4rem;
                }
                @media (max-width: 900px) {
                    .aiprocess-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .aiprocess-terminal {
                        min-height: 320px !important;
                    }
                }
            `}</style>

            {/* Dot overlay */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                backgroundImage: 'radial-gradient(circle, rgba(107,70,193,0.12) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)',
            }} />

            {/* All content */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>

                {/* ── TOP SECTION ── */}
                <div style={{ ...fade('0s'), textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(107,70,193,0.1)',
                        border: '1px solid rgba(107,70,193,0.25)',
                        color: '#6B46C1',
                        borderRadius: '100px', padding: '7px 18px',
                        fontFamily: f, fontSize: '12px', fontWeight: 600,
                        letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                        marginBottom: '1.25rem',
                    }}>✦ AI-First Production</div>

                    <h2 style={{
                        fontFamily: f, fontWeight: 800,
                        fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                        lineHeight: 1.05, letterSpacing: '-0.02em',
                        marginBottom: '1rem', color: '#18182B',
                        textAlign: 'center',
                    }}>
                        We don't just make videos.<br />
                        <span style={{ color: '#18182B' }}>We make them </span>
                        <span style={{
                            background: 'linear-gradient(90deg, #A78BFA, #3ECDC8)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>smarter.</span>
                    </h2>

                    <p style={{
                        fontFamily: f, fontSize: '1rem',
                        color: 'rgba(24,24,43,0.55)',
                        maxWidth: '460px', margin: '0 auto 4rem auto',
                        lineHeight: 1.8, textAlign: 'center',
                    }}>
                        Every TeqThots production runs on AI from brief to publish.
                        Faster turnaround, sharper content, zero guesswork.
                    </p>
                </div>

                {/* ── MAIN 2-COL LAYOUT ── */}
                <div className="aiprocess-grid">

                    {/* ── LEFT COLUMN — STEP LIST ── */}
                    <div className="aiprocess-left" style={{
                        ...fade('0.2s'),
                        display: 'flex', flexDirection: 'column' as const, gap: '0.5rem',
                    }}>
                        {STEPS.map((step, i) => {
                            const active = i === activeStep;
                            return (
                                <div
                                    key={i}
                                    onClick={() => handleStepClick(i)}
                                    style={{
                                        padding: '1.25rem 1.5rem',
                                        borderRadius: '14px',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        border: `1.5px solid ${active ? 'rgba(107,70,193,0.35)' : 'rgba(107,70,193,0.12)'}`,
                                        background: active ? 'rgba(107,70,193,0.1)' : 'rgba(107,70,193,0.04)',
                                        boxShadow: active ? '0 4px 24px rgba(107,70,193,0.12)' : 'none',
                                    }}
                                >
                                    {/* Step number badge */}
                                    <div style={{
                                        width: '36px', height: '36px', flexShrink: 0,
                                        borderRadius: '8px',
                                        fontFamily: f, fontWeight: 800, fontSize: '0.85rem',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: active
                                            ? 'linear-gradient(135deg, #3B2FC9, #8B2FC9)'
                                            : 'rgba(107,70,193,0.08)',
                                        color: active ? '#fff' : 'rgba(107,70,193,0.4)',
                                        boxShadow: active ? '0 4px 16px rgba(139,47,201,0.4)' : 'none',
                                        transition: 'all 0.25s ease',
                                    }}>
                                        {step.num}
                                    </div>

                                    {/* Text */}
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            fontFamily: f, fontWeight: 700, fontSize: '0.95rem',
                                            color: active ? '#18182B' : 'rgba(24,24,43,0.4)',
                                            transition: 'color 0.25s',
                                        }}>{step.title}</div>
                                        <div style={{
                                            fontSize: '11px', letterSpacing: '0.06em',
                                            textTransform: 'uppercase' as const,
                                            color: active ? '#6B46C1' : 'rgba(107,70,193,0.3)',
                                            transition: 'color 0.25s',
                                            marginTop: '2px',
                                        }}>{step.label}</div>
                                    </div>

                                    {/* Status indicator */}
                                    <div style={{ marginLeft: 'auto' }}>
                                        {active ? (
                                            <div style={{
                                                display: 'flex', alignItems: 'center', gap: '4px',
                                                fontSize: '9px', fontWeight: 700,
                                                letterSpacing: '0.1em', color: '#3ECDC8',
                                            }}>
                                                <div style={{
                                                    width: '6px', height: '6px', borderRadius: '50%',
                                                    background: '#3ECDC8',
                                                    animation: 'blink 1s ease infinite',
                                                }} />
                                                RUNNING
                                            </div>
                                        ) : (
                                            <div style={{
                                                width: '8px', height: '8px', borderRadius: '50%',
                                                background: 'rgba(107,70,193,0.12)',
                                            }} />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ── RIGHT COLUMN — AI TERMINAL DASHBOARD ── */}
                    <div className="aiprocess-terminal" style={{
                        ...fade('0.3s'),
                        background: '#070514',
                        borderRadius: '20px',
                        border: '1px solid rgba(167,139,250,0.2)',
                        overflow: 'hidden',
                        boxShadow: '0 0 0 1px rgba(139,47,201,0.1), 0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                        transform: visible ? 'scale(1)' : 'scale(0.97)',
                        transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
                    }}>
                        {/* Terminal top bar */}
                        <div style={{
                            background: '#0E0A1E',
                            padding: '0.85rem 1.25rem',
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            {/* Traffic lights */}
                            <div style={{ display: 'flex', gap: '6px' }}>
                                {['#FF5F57', '#FFBD2E', '#28CA41'].map((c, i) => (
                                    <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                                ))}
                            </div>
                            {/* Tab label */}
                            <div style={{
                                fontFamily: 'monospace', fontSize: '11px',
                                color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em',
                            }}>teqthots_ai_pipeline.exe</div>
                            {/* Live indicator */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{
                                    width: '6px', height: '6px', borderRadius: '50%',
                                    background: '#3ECDC8',
                                    animation: 'blink 1s ease infinite',
                                }} />
                                <span style={{
                                    fontSize: '10px', fontWeight: 700,
                                    color: '#3ECDC8', letterSpacing: '0.1em',
                                }}>LIVE</span>
                            </div>
                        </div>

                        {/* Terminal body */}
                        <div style={{
                            padding: '1.5rem',
                            minHeight: '380px',
                            display: 'flex', flexDirection: 'column' as const, gap: '1rem',
                            fontFamily: "'Courier New', monospace",
                        }}>
                            {/* key forces remount → css animation plays again on step change */}
                            <div key={activeStep} style={{ animation: 'fadeUp 0.4s ease both', display: 'contents' }}>

                                {/* Section A — Process header */}
                                <div style={{ fontSize: '13px' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'› running: '}</span>
                                    <span style={{ color: '#A78BFA', fontWeight: 700 }}>{s.title}</span>
                                </div>

                                {/* Section B — Log lines */}
                                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.35rem' }}>
                                    {s.logs.map((line, i) => {
                                        const ts = line.match(/\[[\d:]+\]/)?.[0] ?? '';
                                        const msg = line.replace(/\[[\d:]+\]\s*/, '');
                                        return (
                                            <div key={i} style={{
                                                fontSize: '11px',
                                                opacity: 0,
                                                animation: 'logFadeIn 0.4s ease forwards',
                                                animationDelay: `${0.1 + i * 0.2}s`,
                                            }}>
                                                <span style={{ color: 'rgba(62,205,200,0.6)' }}>{ts} </span>
                                                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{msg}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Section C — Progress bar */}
                                <div style={{
                                    opacity: 0,
                                    animation: 'logFadeIn 0.4s ease forwards',
                                    animationDelay: '0.6s',
                                }}>
                                    <div style={{
                                        display: 'flex', justifyContent: 'space-between',
                                        marginBottom: '6px',
                                    }}>
                                        <span style={{
                                            fontSize: '10px', color: 'rgba(255,255,255,0.35)',
                                            letterSpacing: '0.1em',
                                        }}>PROCESSING</span>
                                        <span style={{
                                            fontSize: '10px', color: '#3ECDC8', fontWeight: 700,
                                        }}>{s.pct}</span>
                                    </div>
                                    <div style={{
                                        height: '4px', borderRadius: '2px',
                                        background: 'rgba(255,255,255,0.08)', overflow: 'hidden',
                                    }}>
                                        <div style={{
                                            height: '100%', borderRadius: '2px',
                                            background: 'linear-gradient(90deg, #3B2FC9, #8B2FC9, #3ECDC8)',
                                            width: s.pct,
                                            transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }} />
                                    </div>
                                </div>

                                {/* Section D — Output preview card */}
                                <div style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '10px',
                                    padding: '1rem',
                                    opacity: 0,
                                    animation: 'logFadeIn 0.4s ease forwards',
                                    animationDelay: '0.75s',
                                }}>
                                    <div style={{
                                        fontSize: '9px', fontWeight: 700,
                                        letterSpacing: '0.12em',
                                        color: 'rgba(255,255,255,0.25)',
                                        marginBottom: '0.5rem',
                                    }}>OUTPUT</div>

                                    <div style={{
                                        fontFamily: f, fontWeight: 600,
                                        fontSize: '0.82rem', color: '#fff', lineHeight: 1.5,
                                    }}>{s.output}</div>

                                    <div style={{
                                        display: 'flex', gap: '0.4rem', flexWrap: 'wrap' as const,
                                        marginTop: '0.5rem',
                                    }}>
                                        {s.tags.map((tag, i) => (
                                            <span key={i} style={{
                                                background: 'rgba(167,139,250,0.1)',
                                                border: '1px solid rgba(167,139,250,0.2)',
                                                color: '#C4B5FD',
                                                fontSize: '10px', fontWeight: 600,
                                                padding: '2px 8px', borderRadius: '100px',
                                                letterSpacing: '0.05em',
                                            }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* close terminal card div */}
                </div>
                {/* close aiprocess-grid */}

                {/* ── BOTTOM STATEMENT ── */}
                <div style={{
                    ...fade('0.4s'),
                    marginTop: '4rem',
                    padding: '2.5rem',
                    background: 'rgba(107,70,193,0.06)',
                    border: '1px solid rgba(107,70,193,0.15)',
                    borderRadius: '20px',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap' as const, gap: '1.5rem',
                }}>
                    {/* Left */}
                    <div>
                        <div style={{
                            fontFamily: f, fontWeight: 800,
                            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                            color: '#18182B', lineHeight: 1.2,
                        }}>
                            Content that used to take 3 weeks — done in 5 days.
                        </div>
                        <div style={{
                            fontStyle: 'italic', fontSize: '0.9rem',
                            color: 'rgba(24,24,43,0.45)', marginTop: '0.4rem',
                        }}>
                            Human creative direction. AI execution speed.
                        </div>
                    </div>

                    {/* Right — stats */}
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {[['60%', 'faster production'], ['5x', 'content output']].map(([num, label]) => (
                            <div key={label}>
                                <div style={{
                                    fontFamily: f, fontWeight: 800,
                                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                    background: 'linear-gradient(90deg, #A78BFA, #3ECDC8)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                    lineHeight: 1,
                                }}>{num}</div>
                                <div style={{
                                    fontSize: '12px',
                                    color: 'rgba(24, 24, 43, 0.45)',
                                    marginTop: '2px', fontFamily: f,
                                }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
