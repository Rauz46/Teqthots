"use client";
import DottedMap from 'dotted-map'
import { useState, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'

export default function CTASection() {

    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Build the map once
    const svgMap = useMemo(() => {
        const map = new DottedMap({ height: 100, grid: 'diagonal' })
        return map.getSVG({
            radius: 0.22,
            color: 'rgba(255,255,255,0.3)',
            shape: 'circle',
            backgroundColor: 'transparent'
        })
    }, [])

    const projectPoint = (lat: number, lng: number) => ({
        x: (lng + 180) * (800 / 360),
        y: (90 - lat) * (400 / 180),
    })

    const createCurvedPath = (start: { x: number, y: number }, end: { x: number, y: number }) => {
        const midX = (start.x + end.x) / 2
        const midY = Math.min(start.y, end.y) - 60
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
    }

    const locations = [
        { id: 'tampa', name: 'Tampa(HQ)', lat: 27.9506, lng: -82.4572 },
        { id: 'london', name: 'London', lat: 51.5074, lng: -0.1278 },
        { id: 'chennai', name: 'Chennai', lat: 13.0827, lng: 80.2707 },
    ]

    const tampa = projectPoint(locations[0].lat, locations[0].lng)
    const london = projectPoint(locations[1].lat, locations[1].lng)
    const chennai = projectPoint(locations[2].lat, locations[2].lng)

    const styles = {
        section: {
            position: 'relative' as const,
            overflow: 'hidden',
            minHeight: '320px',
            display: 'flex',
            alignItems: 'center',
            background: 'radial-gradient(ellipse at center, #311b52 0%, #120a21 70%)',
            padding: '2rem clamp(1.5rem, 8vw, 6rem)',
        },
        gridOverlay: {
            position: 'absolute' as const,
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none' as const,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
        },
        container: {
            position: 'relative' as const,
            zIndex: 2,
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row' as const,
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
        },
        textContent: {
            flex: '1',
            maxWidth: '650px',
            textAlign: 'left' as const,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.22, 0.68, 0, 1.15)',
        },
        eyebrow: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1rem',
        },
        recDot: {
            width: '8px',
            height: '8px',
            background: '#FF0000',
            borderRadius: '50%',
            boxShadow: '0 0 10px #FF0000',
            animation: 'blink 1.5s ease-in-out infinite',
        },
        recText: {
            color: 'rgba(255,255,255,0.5)',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
        },
        headline: {
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
        },
        button: {
            background: 'white',
            color: '#3B2FC9',
            border: 'none',
            padding: '0.75rem 1.75rem',
            borderRadius: '100px',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 700,
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        },
        mapSide: {
            flex: '1',
            position: 'relative' as const,
            height: '280px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 1s cubic-bezier(0.22, 0.68, 0, 1.15) 0.2s',
        },
        mapImg: {
            width: '100%',
            height: '100%',
            objectFit: 'contain' as const,
            objectPosition: 'center',
            pointerEvents: 'none' as const,
        },
        footerWrapper: {
            background: '#fff',
            padding: '1.25rem clamp(1.5rem, 8vw, 6rem)',
            borderTop: '1px solid #f0f0f0',
        },
        footerTop: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
        },
        footerLogo: {
            display: 'flex',
            alignItems: 'center',
        },
        footerNav: {
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
        },
        footerLink: {
            color: '#18182B',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: '"Plus Jakarta Sans", sans-serif',
        },
        socialIcon: {
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: '#f8f8fc',
            border: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8E8EA8',
            fontSize: '18px',
            transition: 'all 0.2s ease',
        },
    }

    return (
        <div id="cta-section-wrapper">
            <section ref={sectionRef} style={styles.section} id="cta-section">
                <style>
                    {`
            @import url('https://api.fontshare.com/v2/css?f[]=clash-display@700&display=swap');
            
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.3; }
            }
            @keyframes dashDraw {
              from { stroke-dashoffset: 300; }
              to   { stroke-dashoffset: 0; }
            }
            @keyframes pulse {
              0% { r: 3; opacity: 1; }
              100% { r: 12; opacity: 0; }
            }
            #cta-section .cta-button:hover {
              transform: translateY(-4px);
              box-shadow: 0 15px 40px rgba(0,0,0,0.3);
              background: #f8f8f8;
            }
            .social-icon:hover {
              background: #fff;
              border-color: #8B2FC9;
              color: #8B2FC9;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(139, 47, 201, 0.1);
            }
            @media (max-width: 1024px) {
              #cta-section {
                padding: 4rem 1.5rem;
              }
              #cta-section .container {
                flex-direction: column;
                text-align: center;
                gap: 3rem;
              }
              #cta-section .text-content {
                align-items: center;
                display: flex;
                flex-direction: column;
                max-width: 100%;
              }
              #cta-section .map-side {
                width: 100%;
                height: 300px;
              }
            }
          `}
                </style>

                {/* Grid Overlay */}
                <div style={styles.gridOverlay} />

                <div className="container" style={styles.container}>
                    {/* Left: Text */}
                    <div className="text-content" style={styles.textContent}>
                        <div style={styles.eyebrow}>
                            <div style={styles.recDot} />
                            <span style={styles.recText}>REC</span>
                        </div>

                        <h2 style={styles.headline}>
                            Let&apos;s make<br />
                            your tech<br />
                            unforgettable.
                        </h2>

                        <button className="cta-button" style={styles.button}>
                            Start a Conversation <span style={{ fontSize: '1.2em' }}>→</span>
                        </button>
                    </div>

                    {/* Right: Map */}
                    <div className="map-side" style={styles.mapSide}>
                        <img
                            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                            style={styles.mapImg}
                            alt="world map"
                            draggable={false}
                        />

                        <svg
                            viewBox="0 0 800 400"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <defs>
                                <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FF0000" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#FF0000" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#FF0000" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>

                            {/* Paths */}
                            {isVisible && (
                                <>
                                    <path
                                        d={createCurvedPath(tampa, london)}
                                        fill="none"
                                        stroke="url(#ctaGradient)"
                                        strokeWidth="2"
                                        strokeDasharray="6 4"
                                        style={{
                                            animation: 'dashDraw 2s ease forwards 0.5s',
                                            strokeDashoffset: 300,
                                        }}
                                    />
                                    <path
                                        d={createCurvedPath(london, chennai)}
                                        fill="none"
                                        stroke="url(#ctaGradient)"
                                        strokeWidth="2"
                                        strokeDasharray="6 4"
                                        style={{
                                            animation: 'dashDraw 2s ease forwards 1.2s',
                                            strokeDashoffset: 300,
                                        }}
                                    />
                                </>
                            )}

                            {/* Location Dots */}
                            {[tampa, london, chennai].map((point, i) => (
                                <g key={i}>
                                    <circle
                                        cx={point.x}
                                        cy={point.y}
                                        r="4"
                                        fill="#FF0000"
                                    />
                                    <circle
                                        cx={point.x}
                                        cy={point.y}
                                        fill="#FF0000"
                                        style={{
                                            animation: 'pulse 2s infinite',
                                        }}
                                    />
                                    <text
                                        x={point.x}
                                        y={point.y}
                                        dx="8"
                                        dy="4"
                                        style={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '14px',
                                            fill: 'white',
                                            fontWeight: 700,
                                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                        }}
                                    >
                                        {locations[i].name}
                                    </text>
                                </g>
                            ))}
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    )
}
