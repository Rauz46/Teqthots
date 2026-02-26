"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Youtube, Linkedin, Send, CheckCircle, MapPin, Building2, Globe } from "lucide-react";
import CTASection from "../home/CTASection";

export default function ContactPageClient() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setTimeout(() => setSubmitted(true), 400);
    }

    // Light-mode input styles
    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "12px 16px",
        borderRadius: 14,
        outline: "none",
        border: "1.5px solid #E8E4FF",
        background: "#FFFFFF",
        fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
        fontSize: 14,
        color: "#18182B",
        boxSizing: "border-box",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 8px rgba(59,47,201,0.04)",
    };

    const labelStyle: React.CSSProperties = {
        fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
        fontWeight: 600,
        fontSize: 13,
        color: "#6B6B85",
        marginBottom: 8,
        display: "block",
    };

    return (
        <>
            {/* Hero */}
            <section style={{
                background: "radial-gradient(ellipse at center, #311b52 0%, #120a21 70%)",
                minHeight: "50vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "8rem clamp(1.25rem,6vw,5rem) 5rem",
                overflow: "hidden",
                position: "relative",
            }}>
                {/* Dot overlay */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                }} />

                <motion.div
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                    style={{ maxWidth: 800, position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <span style={{
                        display: "inline-flex",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "100px",
                        padding: "5px 18px",
                        fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                        fontWeight: 600,
                        fontSize: 11,
                        color: "rgba(255,255,255,0.75)",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        marginBottom: "1.75rem",
                    }}>
                        Get in Touch
                    </span>
                    <h1 className="clash-heading" style={{
                        fontWeight: 700,
                        fontSize: "clamp(2.5rem,7vw,5.5rem)",
                        lineHeight: 1.05,
                        color: "#fff",
                        marginBottom: "1.5rem",
                        letterSpacing: "-0.02em"
                    }}>
                        Let&apos;s Build<br />
                        <span style={{
                            background: "linear-gradient(90deg, #8B2FC9, #3ECDC8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>Something Together</span>
                    </h1>
                    <p style={{
                        fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                        fontSize: 17,
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.75,
                        maxWidth: 580,
                    }}>
                        Interested in being a guest, partnering, or just want to say hello? We&apos;d love to hear from you.
                    </p>
                </motion.div>
            </section>

            {/* Form + Sidebar */}
            <section style={{
                background: "#F0EEFF",
                padding: "8rem clamp(1.25rem,8vw,5rem)",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Dotted Pattern Overlay */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(circle, rgba(139,47,201,0.12) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    pointerEvents: "none",
                    zIndex: 0,
                }} />

                <div
                    style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}
                    className="contact-grid"
                >
                    {/* Sidebar */}
                    <div style={{ paddingRight: "1rem" }}>
                        <h2 className="clash-heading" style={{
                            fontWeight: 700,
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            color: "#18182B",
                            marginBottom: "1.25rem",
                            lineHeight: 1.1,
                        }}>We&apos;d love to hear from you</h2>
                        <p style={{
                            fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                            fontSize: 16,
                            color: "#6B6B85",
                            lineHeight: 1.8,
                            marginBottom: "2.5rem",
                        }}>
                            Whether you&apos;re a founder, creator, or just someone passionate about tech — our inbox is always open.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {[
                                { icon: Mail, label: "Email Us", sub: "hello@teqthots.com", href: "mailto:hello@teqthots.com", color: "#8B2FC9", glowColor: "rgba(139,47,201,0.06)" },
                                { icon: Youtube, label: "YouTube", sub: "@teqthots", href: "https://www.youtube.com/@TeqThots", color: "#FF4B4B", glowColor: "rgba(255,75,75,0.06)" },
                                { icon: Linkedin, label: "LinkedIn", sub: "TeqThots Official", href: "https://www.linkedin.com/company/teqthots", color: "#3ECDC8", glowColor: "rgba(62,205,200,0.06)" },
                            ].map(({ icon: Icon, label, sub, href, color, glowColor }) => (
                                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 20,
                                        padding: "24px",
                                        background: "#FFFFFF",
                                        border: "1.5px solid #E8E4FF",
                                        borderRadius: 24,
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 12px rgba(59,47,201,0.04)"
                                    }}
                                    className="contact-sidebar-link"
                                >
                                    <div style={{
                                        width: 52, height: 52, borderRadius: 16,
                                        background: `${glowColor}`,
                                        border: `1.5px solid ${color}20`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color, flexShrink: 0,
                                    }}>
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <div style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)", fontWeight: 700, fontSize: 16, color: "#18182B" }}>{label}</div>
                                        <div style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)", fontSize: 13, color: "#8E8EA8", marginTop: 2 }}>{sub}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{
                        background: "#fff",
                        borderRadius: 32,
                        border: "1.5px solid #E8E4FF",
                        padding: "3.5rem",
                        boxShadow: "0 32px 64px rgba(59,47,201,0.08)",
                    }}>
                        {submitted ? (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem 0", textAlign: "center" }}>
                                <div style={{
                                    width: 80, height: 80, borderRadius: "50%",
                                    background: "#3ECDC812",
                                    border: "1px solid #3ECDC840",
                                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem",
                                }}>
                                    <CheckCircle size={40} style={{ color: "#3ECDC8" }} />
                                </div>
                                <h3 className="clash-heading" style={{ fontWeight: 700, fontSize: "1.75rem", color: "#18182B", marginBottom: "0.75rem" }}>Message Sent!</h3>
                                <p style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)", fontSize: 16, color: "#6B6B85" }}>We&apos;ll get back to you within 48 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="sm-grid">
                                    <div>
                                        <label style={labelStyle}>Name</label>
                                        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email</label>
                                        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                                    </div>
                                </div>
                                <div>
                                    <label style={labelStyle}>What&apos;s this about?</label>
                                    <div style={{ position: "relative" }}>
                                        <select name="subject" value={form.subject} onChange={handleChange} style={{
                                            ...inputStyle,
                                            appearance: "none",
                                            color: form.subject ? "#18182B" : "#8E8EA8"
                                        }}>
                                            <option value="">Select a topic</option>
                                            <option>Guest Appearance</option>
                                            <option>Sponsorship / Partnership</option>
                                            <option>Media Inquiry</option>
                                            <option>General Question</option>
                                            <option>Other</option>
                                        </select>
                                        <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", opacity: 0.5 }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#18182B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label style={labelStyle}>Message</label>
                                    <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                                        placeholder="Tell us about yourself and what you have in mind..."
                                        style={{ ...inputStyle, resize: "none", lineHeight: 1.8 }} />
                                </div>
                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                                    style={{
                                        display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
                                        background: "linear-gradient(90deg, #8B2FC9, #3ECDC8)",
                                        color: "#fff", border: "none", borderRadius: 16,
                                        padding: "20px", fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                                        fontWeight: 700, fontSize: 16, cursor: "pointer",
                                        boxShadow: "0 12px 32px rgba(139,47,201,0.3)",
                                        marginTop: "0.5rem"
                                    }}>
                                    <Send size={18} /> Send Message
                                </motion.button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section style={{
                background: "#fdfbff",
                padding: "8rem clamp(1.25rem,6vw,5rem)",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Subtle Grid Background */}
                <div style={{
                    position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none",
                    backgroundImage: `linear-gradient(#eeeaf8 1px, transparent 1px), linear-gradient(90deg, #eeeaf8 1px, transparent 1px)`,
                    backgroundSize: "32px 32px"
                }} />

                <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="clash-heading" style={{
                            fontWeight: 700,
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            color: "#18182B",
                            marginBottom: "1.25rem",
                            lineHeight: 1.1
                        }}>
                            Three Cities. <span style={{
                                background: "linear-gradient(90deg, #8B2FC9, #3ECDC8)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>One Vision.</span>
                        </h2>
                        <p style={{
                            fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', sans-serif)",
                            fontSize: 16,
                            color: "#6B6B85",
                            lineHeight: 1.7,
                            maxWidth: 540,
                            margin: "0 auto"
                        }}>
                            Global infrastructure supporting world-class digital narratives across continents.
                        </p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                        gap: "2.5rem"
                    }}>
                        {[
                            {
                                country: "US",
                                city: "Tampa",
                                sub: "United States",
                                address: "1211, Tech Blvd, #23,\nTampa, FL 33619",
                                status: "HEADQUARTERS",
                                icon: <Building2 size={54} />,
                                accent: "#8B2FC9"
                            },
                            {
                                country: "IN",
                                city: "Chennai",
                                sub: "India",
                                address: "6th Floor, Arihant Technopolis,\nChennai, TN 600096",
                                status: "PRODUCTION HUB",
                                icon: <MapPin size={54} />,
                                accent: "#3ECDC8"
                            },
                            {
                                country: "GB",
                                city: "London",
                                sub: "United Kingdom",
                                address: "SINC, 12-16 Addiscombe Road,\nCroydon, London CR0 0XT",
                                status: "CLIENT HUB",
                                icon: <Globe size={54} />,
                                accent: "#a78bfa"
                            }
                        ].map((loc, i) => (
                            <motion.div
                                key={loc.city}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="location-card"
                                style={{
                                    background: "#fff",
                                    padding: "3rem 2.5rem",
                                    borderRadius: 32,
                                    border: "1.5px solid #eeeaf8",
                                    boxShadow: "0 10px 40px rgba(139,47,201,0.04)",
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2.5rem" }}>
                                    <div style={{
                                        width: 100, height: 100, borderRadius: 24,
                                        background: `${loc.accent}08`,
                                        border: `1px solid ${loc.accent}15`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: loc.accent,
                                        transition: "transform 0.5s ease"
                                    }} className="location-icon">
                                        {loc.icon}
                                    </div>
                                    <span style={{
                                        fontSize: 10, fontWeight: 800, color: loc.accent,
                                        background: `${loc.accent}12`, border: `1px solid ${loc.accent}25`,
                                        padding: "4px 12px", borderRadius: 100, letterSpacing: "0.12em"
                                    }}>
                                        {loc.status}
                                    </span>
                                </div>

                                <div style={{ marginBottom: "1.5rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                                        <span style={{ fontSize: 13, fontWeight: 700, color: "#8E8EA8", letterSpacing: "0.08em" }}>{loc.country}</span>
                                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#eeeaf8" }} />
                                        <span style={{ fontSize: 13, fontWeight: 600, color: loc.accent }}>{loc.sub}</span>
                                    </div>
                                    <h3 className="clash-heading" style={{ fontSize: 42, fontWeight: 700, color: "#18182B" }}>{loc.city}</h3>
                                </div>

                                <div style={{
                                    fontFamily: "var(--font-jakarta)",
                                    fontSize: 15,
                                    color: "#6B6B85",
                                    lineHeight: 1.8,
                                    marginBottom: "2.5rem",
                                    whiteSpace: "pre-line",
                                    flex: 1
                                }}>
                                    {loc.address}
                                </div>

                                <div style={{
                                    paddingTop: "1.5rem",
                                    borderTop: "1px solid #f8f8fc",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12
                                }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px rgba(16,185,129,0.4)" }} />
                                    <span style={{ fontSize: 13, fontWeight: 700, color: "#18182B", letterSpacing: "0.02em" }}>Operational 24/7</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />

            <style>{`
                @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap');
                
                .clash-heading {
                    font-family: 'Clash Display', sans-serif !important;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.3fr;
                    gap: 5rem;
                    align-items: start;
                }

                .location-card:hover {
                    border-color: rgba(139,47,201,0.25);
                    box-shadow: 0 30px 60px rgba(139,47,201,0.08);
                    transform: translateY(-8px);
                }
                
                .location-card:hover .location-icon {
                    transform: scale(1.1) rotate(-5deg);
                }

                @media (max-width: 1024px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 4rem; }
                }

                @media (max-width: 560px) {
                    .sm-grid { grid-template-columns: 1fr !important; }
                    .location-card { padding: 2.5rem 1.75rem !important; }
                }

                input::placeholder, textarea::placeholder, select::placeholder {
                    color: #8E8EA8;
                }
                
                input:focus, textarea:focus, select:focus {
                    border-color: #8B2FC9 !important;
                    box-shadow: 0 0 0 4px rgba(139,47,201,0.1);
                    background: #fff !important;
                }
            `}</style>
        </>
    );
}
