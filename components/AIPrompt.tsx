"use client";
import { useState } from "react";
import { Sparkles, Send } from "lucide-react";

const SUGGESTIONS = [
    "How do I validate my AI startup idea?",
    "What's the #1 mistake AI founders make?",
    "How do I find my first 10 customers?",
];

interface Bubble { id: number; word: string; x: number; delay: number; }

export default function AIPrompt() {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [bubbles, setBubbles] = useState<Bubble[]>([]);
    const [showResp, setShowResp] = useState(false);

    const launchBubbles = (text: string) => {
        const words = text.split(" ").slice(0, 8);
        const batch: Bubble[] = words.map((w, i) => ({
            id: Date.now() + i, word: w,
            x: 10 + Math.random() * 80,
            delay: i * 0.1,
        }));
        setBubbles(batch);
        setTimeout(() => setBubbles([]), 4000);
    };

    const ask = async (q?: string) => {
        const question = q ?? query;
        if (!question.trim()) return;
        setLoading(true);
        setShowResp(false);
        setResponse("");
        launchBubbles(question);
        try {
            const res = await fetch("/api/advisor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question }),
            });
            const data = await res.json();
            setResponse(data.answer || "Couldn't connect right now.");
            setShowResp(true);
        } catch {
            setResponse("Connection failed — try again.");
            setShowResp(true);
        }
        setLoading(false);
    };

    return (
        <section style={{ padding: "4rem clamp(1.5rem,7vw,6rem) 6rem", background: "#120a21", position: "relative", overflow: "hidden" }}>
            {/* Background glows */}
            <div style={{ position: "absolute", top: "20%", left: "10%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,47,201,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "10%", right: "15%", width: "35vw", height: "35vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(62,205,200,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: "3.5rem" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", padding: "6px 16px", marginBottom: "1.25rem" }}>
                    <Sparkles size={14} style={{ color: "#c4b5fd" }} />
                    <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                        AI Advisor
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "var(--font-caveat)", fontWeight: 700, fontSize: "clamp(2.5rem,6vw,4.5rem)",
                    lineHeight: 1, color: "#fff", marginBottom: "0.75rem",
                }}>
                    Your questions, <span style={{ background: "linear-gradient(135deg, #a5b4fc, #5eead4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>defying gravity.</span>
                </h2>
                <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 500, margin: "0 auto" }}>
                    Powered by Claude — founder intelligence on demand.
                </p>
            </div>

            {/* AI Advisor Interaction */}
            <div style={{ maxWidth: 750, margin: "0 auto", position: "relative" }}>
                {/* Escape bubbles */}
                <div style={{ position: "absolute", left: 0, right: 0, bottom: "110%", pointerEvents: "none", zIndex: 10 }}>
                    {bubbles.map(b => (
                        <div key={b.id} className="ai-bubble" style={{ left: `${b.x}%`, animationDelay: `${b.delay}s`, fontFamily: "var(--font-jakarta)", color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.05)" }}>
                            {b.word}
                        </div>
                    ))}
                </div>

                <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(24px)", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", padding: "2rem" }}>
                    {/* Input Area */}
                    <div style={{ display: "flex", gap: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", padding: "6px 6px 6px 20px", alignItems: "center" }}>
                        <input
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && ask()}
                            placeholder="Ask about building AI startups..."
                            style={{ flex: 1, background: "none", border: "none", outline: "none", fontFamily: "var(--font-jakarta)", fontSize: 16, color: "#fff", padding: "10px 0" }}
                        />
                        <button
                            onClick={() => ask()}
                            disabled={loading}
                            style={{
                                background: loading ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.95)",
                                color: loading ? "rgba(255,255,255,0.3)" : "#0c0a1a", border: "none",
                                fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 13,
                                padding: "12px 24px", borderRadius: 12,
                                display: "flex", alignItems: "center", gap: 8,
                                transition: "all 0.2s", cursor: loading ? "not-allowed" : "pointer",
                            }}
                        >
                            {loading ? "Processing..." : <><Send size={15} /> Launch</>}
                        </button>
                    </div>

                    {/* Suggestions */}
                    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
                        {SUGGESTIONS.map((s, i) => (
                            <button key={i} onClick={() => { setQuery(s); ask(s); }}
                                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-jakarta)", fontSize: 12, padding: "7px 15px", borderRadius: "100px", transition: "all 0.2s", cursor: "pointer" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                            >{s}</button>
                        ))}
                    </div>

                    {/* Response Area */}
                    {showResp && (
                        <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)", animation: "fadeUp 0.5s ease both" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #a5b4fc, #5eead4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🤖</div>
                                <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 14, color: "#fff" }}>TeqThots Advisor</span>
                            </div>
                            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{response}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
