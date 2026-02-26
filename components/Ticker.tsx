"use client";

const WORDS = [
    "Real Tech · Real Thoughts ·",
    "Founder-First ·",
    "AI-Native ·",
    "Igniting Tech Conversations ·",
    "From Building to Believing ·",
    "Battle-Tested Insights ·",
];

export default function Ticker() {
    const repeated = [...WORDS, ...WORDS, ...WORDS];
    return (
        <div className="overflow-hidden py-3" style={{ background: "#120a21", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
            <div className="ticker-track">
                {repeated.map((text, i) => (
                    <span
                        key={i}
                        className="font-body font-semibold text-[10px] text-white/50 uppercase tracking-[0.2em] mr-16"
                    >
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
}
