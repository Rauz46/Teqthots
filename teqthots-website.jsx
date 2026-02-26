import { useState, useEffect, useCallback } from "react";

// ── Fonts & Global Styles ─────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue:      #3B2FC9;
      --purple:    #8B2FC9;
      --teal:      #3ECDC8;
      --grad:      linear-gradient(135deg, #3B2FC9 0%, #8B2FC9 55%, #3ECDC8 100%);
      --grad2:     linear-gradient(90deg, #3B2FC9 0%, #8B2FC9 100%);
      --bg:        #F7F7FC;
      --white:     #FFFFFF;
      --ink:       #18182B;
      --ink2:      #45455E;
      --ink3:      #8E8EA8;
      --border:    #E3E3F0;
      --blue-soft: #EEF0FF;
      --teal-soft: #E6FAFA;
      --font-d:    'Caveat', cursive;
      --font-b:    'Plus Jakarta Sans', sans-serif;
      --radius:    14px;
      --shadow:    0 4px 24px rgba(59,47,201,0.09);
      --shadow-lg: 0 16px 48px rgba(59,47,201,0.14);
    }

    html { scroll-behavior: smooth; }
    body { background: var(--bg); color: var(--ink); font-family: var(--font-b); font-weight: 400; overflow-x: hidden; }
    ::selection { background: #C5B5FF; color: #18182B; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--purple); border-radius: 2px; }
    a { text-decoration: none; }
    button { cursor: pointer; font-family: var(--font-b); }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes floatA {
      0%,100% { transform: translateY(0px) rotate(-1deg); }
      50%      { transform: translateY(-18px) rotate(1deg); }
    }
    @keyframes floatB {
      0%,100% { transform: translateY(-4px) rotate(2deg); }
      50%      { transform: translateY(-22px) rotate(-1.5deg); }
    }
    @keyframes floatC {
      0%,100% { transform: translateY(-8px) rotate(0deg); }
      50%      { transform: translateY(-26px) rotate(1deg); }
    }
    @keyframes ticker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    @keyframes bubbleUp {
      0%   { opacity: 0; transform: translateY(10px) scale(0.9); }
      12%  { opacity: 1; transform: translateY(0) scale(1); }
      80%  { opacity: 1; transform: translateY(-55px) scale(1); }
      100% { opacity: 0; transform: translateY(-80px) scale(0.85); }
    }
    @keyframes pulseRing {
      0%   { transform: scale(0.85); opacity: 0.9; }
      100% { transform: scale(2.2);  opacity: 0; }
    }
    @keyframes gradShift {
      0%,100% { background-position: 0% 50%; }
      50%      { background-position: 100% 50%; }
    }

    .fade-up { animation: fadeUp 0.65s cubic-bezier(.22,.68,0,1.15) both; }
    .d1{animation-delay:.05s} .d2{animation-delay:.15s}
    .d3{animation-delay:.28s} .d4{animation-delay:.42s} .d5{animation-delay:.58s}
  `}</style>
);

// ── Logo ──────────────────────────────────────────────────────────────────────
const Logo = ({ size = 34 }) => (
  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="lgg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B2FC9"/>
          <stop offset="0.6" stopColor="#8B2FC9"/>
          <stop offset="1" stopColor="#3ECDC8"/>
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="url(#lgg)"/>
      <text x="4" y="27" fontFamily="serif" fontWeight="900" fontSize="20" fill="white" fontStyle="italic">TQ</text>
    </svg>
    <span style={{
      fontFamily:"var(--font-d)", fontWeight:700, fontSize:size*0.72,
      background:"linear-gradient(90deg,#3B2FC9,#8B2FC9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
    }}>Teq Thots</span>
  </div>
);

// ── Navbar ────────────────────────────────────────────────────────────────────
const Nav = ({ page, setPage, scrolled }) => (
  <nav style={{
    position:"fixed", top:0, left:0, right:0, zIndex:200, height:68,
    padding:"0 clamp(1.25rem,5vw,4rem)",
    display:"flex", alignItems:"center", justifyContent:"space-between",
    background: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "none",
    transition:"all 0.3s ease",
  }}>
    <button onClick={()=>setPage("home")} style={{background:"none",border:"none"}}><Logo size={30}/></button>
    <div style={{display:"flex",gap:"2rem",alignItems:"center"}}>
      {[["home","Home"],["about","About"],["videos","Videos"]].map(([id,label])=>(
        <button key={id} onClick={()=>setPage(id)} style={{
          background:"none",border:"none",
          fontFamily:"var(--font-b)",fontWeight:500,fontSize:14,
          color: page===id?"var(--blue)":"var(--ink2)",
          position:"relative",padding:"4px 0",transition:"color 0.2s",
        }}>
          {label}
          {page===id && <div style={{position:"absolute",bottom:-2,left:0,right:0,height:2,background:"var(--grad2)",borderRadius:2}}/>}
        </button>
      ))}
      <a href="https://www.youtube.com/@TeqThots" target="_blank" rel="noreferrer" style={{
        background:"var(--grad2)",color:"#fff",
        fontFamily:"var(--font-b)",fontWeight:600,fontSize:13,
        padding:"9px 20px",borderRadius:"100px",
        boxShadow:"0 4px 16px rgba(59,47,201,0.28)",display:"inline-block",
        transition:"box-shadow 0.2s,transform 0.2s",
      }}
        onMouseEnter={e=>{e.target.style.boxShadow="0 6px 24px rgba(59,47,201,0.44)";e.target.style.transform="translateY(-1px)"}}
        onMouseLeave={e=>{e.target.style.boxShadow="0 4px 16px rgba(59,47,201,0.28)";e.target.style.transform=""}}
      >▶ Watch Free</a>
    </div>
  </nav>
);

// ── Ticker ────────────────────────────────────────────────────────────────────
const Ticker = () => {
  const w = ["Real Tech · Real Thoughts ·","Founder-First ·","AI-Native ·","Igniting Tech Conversations ·","From Building to Believing ·","Battle-Tested Insights ·"];
  return (
    <div style={{overflow:"hidden",background:"var(--grad2)",padding:"9px 0"}}>
      <div style={{display:"flex",whiteSpace:"nowrap",animation:"ticker 22s linear infinite",width:"max-content"}}>
        {[...w,...w].map((t,i)=>(
          <span key={i} style={{fontFamily:"var(--font-b)",fontWeight:600,fontSize:12,color:"#fff",letterSpacing:"0.1em",textTransform:"uppercase",marginRight:"3rem"}}>{t}</span>
        ))}
      </div>
    </div>
  );
};

// ── Floating BG Chips ─────────────────────────────────────────────────────────
const FloatingChips = () => {
  const chips = ["AI","founder","pivot","iterate","ship","GTM","scale","product","mindset","venture","insight","build","learn","growth"];
  const anims = ["floatA","floatB","floatC"];
  const cols = [["var(--blue-soft)","rgba(59,47,201,0.12)","var(--blue)"],["var(--teal-soft)","rgba(62,205,200,0.2)","var(--teal)"],["#F3EEFF","rgba(139,47,201,0.12)","var(--purple)"]];
  return (
    <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
      {chips.map((chip,i)=>{
        const c = cols[i%3];
        return (
          <div key={i} style={{
            position:"absolute",
            left:`${6+(i*6.7)%88}%`,
            bottom:`${(i*12+8)%55}%`,
            background:c[0],border:`1px solid ${c[1]}`,
            borderRadius:"100px",padding:"5px 13px",
            fontFamily:"var(--font-b)",fontWeight:600,fontSize:11,color:c[2],
            animation:`${anims[i%3]} ${3.5+(i%4)*0.75}s ease-in-out infinite`,
            animationDelay:`${(i*0.33)%2.4}s`,
            opacity:0.72,
          }}>{chip}</div>
        );
      })}
    </div>
  );
};

// ── Antigravity AI Prompt ─────────────────────────────────────────────────────
const AntiGravityPrompt = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const [showResp, setShowResp] = useState(false);

  const suggestions = [
    "How do I validate my AI startup idea?",
    "What's the #1 mistake AI founders make?",
    "How do I find my first 10 customers?",
    "When should I raise funding?",
  ];

  const launchBubbles = (text) => {
    const words = text.split(" ").slice(0, 10);
    const batch = words.map((w, i) => ({ id: Date.now() + i, word: w, x: 15 + Math.random() * 65, delay: i * 0.13 }));
    setBubbles(batch);
    setTimeout(() => setBubbles([]), 4200);
  };

  const ask = async (q) => {
    const question = q || query;
    if (!question.trim()) return;
    setLoading(true);
    setShowResp(false);
    setResponse("");
    launchBubbles(question);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are a sharp, insightful advisor for tech entrepreneurs and AI founders — the voice behind TeqThots by Caimue. Give punchy, honest, battle-tested advice in 2-3 short paragraphs. No fluff. No corporate speak. Use direct founder language. Be inspiring but grounded in reality.",
          messages: [{ role: "user", content: question }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(c => c.text).join("") || "Couldn't connect right now.";
      setResponse(text);
      setShowResp(true);
    } catch {
      setResponse("Connection failed — try again.");
      setShowResp(true);
    }
    setLoading(false);
  };

  return (
    <section style={{ padding:"5rem clamp(1.25rem,6vw,5rem)", background:"var(--white)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
      <div style={{ textAlign:"center", marginBottom:"0.75rem" }}>
        <span style={{ fontFamily:"var(--font-b)", fontWeight:600, fontSize:12, color:"var(--purple)", letterSpacing:"0.12em", textTransform:"uppercase" }}>✦ Ask the AI Advisor</span>
      </div>
      <h2 style={{
        fontFamily:"var(--font-d)", fontWeight:700, fontSize:"clamp(2.2rem,5vw,4rem)",
        textAlign:"center", lineHeight:1.05,
        background:"var(--grad)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
        marginBottom:"0.5rem",
      }}>Your questions,{" "}
        <span style={{ fontStyle:"italic" }}>defying gravity.</span>
      </h2>
      <p style={{ textAlign:"center", fontFamily:"var(--font-b)", fontSize:15, color:"var(--ink3)", marginBottom:"2.75rem" }}>
        Powered by Claude Sonnet 4.6 — battle-tested founder intelligence, on demand.
      </p>

      <div style={{ maxWidth:700, margin:"0 auto", position:"relative" }}>
        {/* Escape bubbles */}
        <div style={{ position:"absolute", left:0, right:0, bottom:"100%", pointerEvents:"none", zIndex:10 }}>
          {bubbles.map(b => (
            <div key={b.id} style={{
              position:"absolute", left:`${b.x}%`,
              background:"var(--grad2)", color:"#fff",
              borderRadius:"100px", padding:"4px 13px",
              fontFamily:"var(--font-b)", fontWeight:600, fontSize:12,
              animation:"bubbleUp 3.2s ease forwards",
              animationDelay:`${b.delay}s`,
              opacity:0, whiteSpace:"nowrap",
              boxShadow:"0 4px 16px rgba(59,47,201,0.3)",
            }}>{b.word}</div>
          ))}
        </div>

        {/* Card */}
        <div style={{ background:"var(--bg)", borderRadius:20, border:"1.5px solid var(--border)", boxShadow:"var(--shadow-lg)", overflow:"hidden" }}>
          <div style={{ padding:"1.75rem" }}>
            {/* Input row */}
            <div style={{
              display:"flex", gap:"0.75rem",
              background:"var(--white)", borderRadius:12,
              border:"1.5px solid var(--border)", padding:"4px 4px 4px 16px",
            }}>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key==="Enter" && ask()}
                placeholder="Ask a founder question…"
                style={{
                  flex:1, background:"none", border:"none", outline:"none",
                  fontFamily:"var(--font-b)", fontSize:15, color:"var(--ink)", padding:"8px 0",
                }}
              />
              <button onClick={()=>ask()} disabled={loading} style={{
                background: loading?"var(--border)":"var(--grad2)",
                color:"#fff", border:"none",
                fontFamily:"var(--font-b)", fontWeight:600, fontSize:13,
                padding:"10px 20px", borderRadius:9,
                display:"flex", alignItems:"center", gap:6,
                transition:"transform 0.15s",
              }}
                onMouseEnter={e=>!loading&&(e.currentTarget.style.transform="scale(1.04)")}
                onMouseLeave={e=>e.currentTarget.style.transform=""}
              >
                {loading
                  ? <><div style={{width:13,height:13,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",animation:"spin 0.65s linear infinite"}}/> Thinking...</>
                  : "Launch ↑"
                }
              </button>
            </div>

            {/* Suggestion chips */}
            <div style={{ display:"flex", gap:"0.45rem", flexWrap:"wrap", marginTop:"0.85rem" }}>
              {suggestions.map((s,i)=>(
                <button key={i} onClick={()=>{ setQuery(s); ask(s); }} style={{
                  background:"var(--blue-soft)", color:"var(--blue)",
                  border:"1px solid rgba(59,47,201,0.12)",
                  fontFamily:"var(--font-b)", fontWeight:500, fontSize:12,
                  padding:"5px 13px", borderRadius:"100px",
                  transition:"background 0.18s, color 0.18s",
                }}
                  onMouseEnter={e=>{ e.target.style.background="var(--blue)"; e.target.style.color="#fff"; }}
                  onMouseLeave={e=>{ e.target.style.background="var(--blue-soft)"; e.target.style.color="var(--blue)"; }}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Response area */}
          {showResp && (
            <div style={{ padding:"1.5rem 1.75rem 1.75rem", borderTop:"1px solid var(--border)", animation:"fadeUp 0.45s ease both" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"0.85rem" }}>
                <div style={{ width:28,height:28,borderRadius:"50%",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14 }}>💡</div>
                <span style={{ fontFamily:"var(--font-b)", fontWeight:600, fontSize:13, color:"var(--purple)" }}>TeqThots AI Advisor</span>
              </div>
              <p style={{ fontFamily:"var(--font-b)", fontSize:14, color:"var(--ink2)", lineHeight:1.82, whiteSpace:"pre-wrap" }}>{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ── Video Card ────────────────────────────────────────────────────────────────
const VideoCard = ({ videoId, title, desc, tag, wide }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        background:"var(--white)", borderRadius:var_r(), overflow:"hidden",
        border:`1.5px solid ${hov?"var(--purple)":"var(--border)"}`,
        boxShadow: hov?"var(--shadow-lg)":"var(--shadow)",
        transform: hov?"translateY(-5px)":"none",
        transition:"all 0.25s ease", display:"flex", flexDirection:"column",
        gridColumn: wide?"span 2":"span 1",
      }}>
      <div style={{ position:"relative", paddingBottom: wide?"40%":"56.25%", height:0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title} allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none" }}
        />
      </div>
      <div style={{ padding:"1.25rem", flex:1 }}>
        {tag && <span style={{
          fontFamily:"var(--font-b)", fontWeight:600, fontSize:10,
          background:"var(--blue-soft)", color:"var(--blue)",
          borderRadius:"100px", padding:"3px 11px",
          letterSpacing:"0.07em", textTransform:"uppercase",
          display:"inline-block", marginBottom:"0.6rem",
        }}>{tag}</span>}
        <h3 style={{ fontFamily:"var(--font-d)", fontWeight:700, fontSize: wide?"1.5rem":"1.1rem", color:"var(--ink)", lineHeight:1.25, marginBottom:"0.5rem" }}>{title}</h3>
        {desc && <p style={{ fontFamily:"var(--font-b)", fontSize:13, color:"var(--ink3)", lineHeight:1.65 }}>{desc}</p>}
      </div>
    </div>
  );
};
const var_r = () => "var(--radius)";

// ── Studios ───────────────────────────────────────────────────────────────────
const Studios = () => {
  const items = [
    { name:"Caimue", tag:"AI Production House", icon:"🎬", c:"var(--blue)", s:"var(--blue-soft)", desc:"Where AI meets storytelling — content, short films, and digital experiences." },
    { name:"Prodeia", tag:"AI Product Studio", icon:"⚙️", c:"var(--purple)", s:"#F3EEFF", desc:"Intelligent SaaS products from ideation to scale, powered by AI." },
    { name:"Talentou", tag:"AI Talent Platform", icon:"🎯", c:"var(--teal)", s:"var(--teal-soft)", desc:"Redefining how teams find and hire exceptional talent with AI." },
    { name:"Ignitho", tag:"Digital Engineering", icon:"🚀", c:"#D4478A", s:"#FEF0F5", desc:"Full-stack digital transformation for the modern enterprise." },
  ];
  return (
    <section style={{ padding:"5rem clamp(1.25rem,6vw,5rem)", background:"var(--white)", borderTop:"1px solid var(--border)" }}>
      <div style={{ fontFamily:"var(--font-b)", fontSize:12, fontWeight:600, color:"var(--purple)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"0.6rem" }}>✦ The Ecosystem</div>
      <h2 style={{ fontFamily:"var(--font-d)", fontWeight:700, fontSize:"clamp(2rem,4vw,3rem)", color:"var(--ink)", marginBottom:"0.6rem" }}>
        Insights born from <span style={{ background:"var(--grad)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>real ventures.</span>
      </h2>
      <p style={{ fontFamily:"var(--font-b)", fontSize:15, color:"var(--ink3)", maxWidth:520, lineHeight:1.7, marginBottom:"2.5rem" }}>
        TeqThots is the voice of Caimue's ecosystem — four AI product companies that actually ship.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"1rem" }}>
        {items.map((s,i)=>(
          <div key={i} style={{ background:s.s, border:`1.5px solid ${s.c}20`, borderRadius:14, padding:"1.6rem", transition:"all 0.22s" }}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 8px 28px ${s.c}22`;e.currentTarget.style.transform="translateY(-4px)"}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform=""}}
          >
            <div style={{ fontSize:"1.75rem", marginBottom:"0.85rem" }}>{s.icon}</div>
            <div style={{ fontFamily:"var(--font-d)", fontWeight:700, fontSize:"1.2rem", color:"var(--ink)", marginBottom:3 }}>{s.name}</div>
            <div style={{ fontFamily:"var(--font-b)", fontSize:11, fontWeight:600, color:s.c, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"0.65rem" }}>{s.tag}</div>
            <p style={{ fontFamily:"var(--font-b)", fontSize:13, color:"var(--ink2)", lineHeight:1.65 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = ({ setPage }) => (
  <section style={{ minHeight:"100vh", position:"relative", overflow:"hidden", display:"flex", flexDirection:"column", justifyContent:"center", padding:"100px clamp(1.25rem,6vw,5rem) 3rem" }}>
    {/* BG blobs */}
    <div style={{ position:"absolute",top:"-15%",right:"-10%",width:"55vw",height:"55vw",borderRadius:"50%",background:"radial-gradient(circle,rgba(139,47,201,0.08) 0%,transparent 65%)",pointerEvents:"none" }}/>
    <div style={{ position:"absolute",bottom:"-5%",left:"-5%",width:"40vw",height:"40vw",borderRadius:"50%",background:"radial-gradient(circle,rgba(62,205,200,0.1) 0%,transparent 65%)",pointerEvents:"none" }}/>
    <FloatingChips />

    {/* Badge */}
    <div className="fade-up d1" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"var(--blue-soft)",border:"1px solid rgba(59,47,201,0.15)",borderRadius:"100px",padding:"7px 16px",width:"fit-content",marginBottom:"1.75rem" }}>
      <div style={{ width:7,height:7,borderRadius:"50%",background:"var(--purple)",position:"relative" }}>
        <div style={{ position:"absolute",inset:0,borderRadius:"50%",background:"var(--purple)",animation:"pulseRing 1.8s ease-out infinite" }}/>
      </div>
      <span style={{ fontFamily:"var(--font-b)",fontWeight:600,fontSize:12,color:"var(--blue)",letterSpacing:"0.07em",textTransform:"uppercase" }}>New Episodes · Every Week</span>
    </div>

    {/* H1 */}
    <h1 className="fade-up d2" style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"clamp(3.8rem,10vw,9.5rem)",lineHeight:0.9,maxWidth:860,marginBottom:"1.5rem" }}>
      Real Tech.{" "}
      <br/>
      <span style={{ background:"var(--grad)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200%",animation:"gradShift 4s ease infinite" }}>Real Thoughts.</span>
    </h1>

    {/* Sub */}
    <p className="fade-up d3" style={{ fontFamily:"var(--font-b)",fontWeight:400,fontSize:"clamp(1rem,1.8vw,1.2rem)",color:"var(--ink2)",maxWidth:520,lineHeight:1.75,marginBottom:"2.5rem" }}>
      Where innovation meets introspection — the destination for tech entrepreneurs who build, break, and believe.
    </p>

    {/* CTAs */}
    <div className="fade-up d4" style={{ display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"4rem" }}>
      <button onClick={()=>setPage("videos")} style={{
        background:"var(--grad2)",color:"#fff",border:"none",
        fontFamily:"var(--font-b)",fontWeight:700,fontSize:15,
        padding:"15px 36px",borderRadius:"100px",
        boxShadow:"0 8px 28px rgba(59,47,201,0.32)",
        transition:"all 0.2s",
      }}
        onMouseEnter={e=>{e.target.style.boxShadow="0 12px 36px rgba(59,47,201,0.48)";e.target.style.transform="translateY(-2px)"}}
        onMouseLeave={e=>{e.target.style.boxShadow="0 8px 28px rgba(59,47,201,0.32)";e.target.style.transform=""}}
      >▶ Watch Episodes</button>
      <button onClick={()=>setPage("about")} style={{
        background:"var(--white)",color:"var(--ink)",border:"1.5px solid var(--border)",
        fontFamily:"var(--font-b)",fontWeight:600,fontSize:15,
        padding:"15px 32px",borderRadius:"100px",
        boxShadow:"var(--shadow)",transition:"all 0.2s",
      }}
        onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--blue)";e.currentTarget.style.color="var(--blue)"}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--ink)"}}
      >Our Story →</button>
    </div>

    {/* Stats */}
    <div className="fade-up d5" style={{ display:"flex",gap:"3rem",flexWrap:"wrap",paddingTop:"2rem",borderTop:"1.5px solid var(--border)" }}>
      {[["4+","AI Ventures Built"],["100%","Founder-Led Content"],["∞","Lessons Shared"]].map(([v,l])=>(
        <div key={l}>
          <div style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"2.5rem",background:"var(--grad)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>{v}</div>
          <div style={{ fontFamily:"var(--font-b)",fontSize:13,color:"var(--ink3)",marginTop:2 }}>{l}</div>
        </div>
      ))}
    </div>
  </section>
);

// ── Featured Episodes (Home) ──────────────────────────────────────────────────
// ⚠️ Replace videoId strings with real TeqThots YouTube video IDs
const FeaturedEpisodes = ({ setPage }) => {
  const eps = [
    { videoId:"dQw4w9WgXcQ", title:"Building AI Products from Zero to One", desc:"The raw, honest story of launching an AI venture with no playbook — just grit and iteration.", tag:"Founder Story", wide:true },
    { videoId:"dQw4w9WgXcQ", title:"Go-To-Market for AI Startups", desc:"What actually moves enterprise buyers in 2025.", tag:"Strategy" },
    { videoId:"dQw4w9WgXcQ", title:"The Founder Mindset: Failure as Fuel", desc:"How the best tech founders process loss and keep shipping.", tag:"Mindset" },
  ];
  return (
    <section style={{ padding:"5rem clamp(1.25rem,6vw,5rem)" }}>
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"2.5rem",flexWrap:"wrap",gap:"1rem" }}>
        <div>
          <div style={{ fontFamily:"var(--font-b)",fontSize:12,fontWeight:600,color:"var(--purple)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.6rem" }}>✦ Featured Episodes</div>
          <h2 style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"clamp(2rem,5vw,3.5rem)",color:"var(--ink)",lineHeight:1 }}>
            Dive into the{" "}
            <span style={{ background:"var(--grad)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>frontlines.</span>
          </h2>
        </div>
        <button onClick={()=>setPage("videos")} style={{
          background:"none",color:"var(--blue)",border:"1.5px solid var(--blue)",
          fontFamily:"var(--font-b)",fontWeight:600,fontSize:13,
          padding:"9px 22px",borderRadius:"100px",transition:"all 0.2s",
        }}
          onMouseEnter={e=>{e.target.style.background="var(--blue)";e.target.style.color="#fff"}}
          onMouseLeave={e=>{e.target.style.background="none";e.target.style.color="var(--blue)"}}
        >All Episodes →</button>
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.25rem" }}>
        {eps.map((ep,i)=><VideoCard key={i} {...ep}/>)}
      </div>
    </section>
  );
};

// ── CTA Banner ────────────────────────────────────────────────────────────────
const CTABanner = () => (
  <section style={{ padding:"5rem clamp(1.25rem,6vw,5rem)" }}>
    <div style={{
      background:"var(--grad)",borderRadius:20,padding:"4rem 3rem",
      position:"relative",overflow:"hidden",textAlign:"center",
    }}>
      <div style={{ position:"absolute",top:"-20%",right:"-5%",width:"40%",height:"140%",background:"rgba(255,255,255,0.06)",transform:"rotate(15deg)",borderRadius:"50%" }}/>
      <div style={{ fontFamily:"var(--font-b)",fontSize:12,fontWeight:600,color:"rgba(255,255,255,0.72)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"1rem" }}>✦ Join the Conversation</div>
      <h2 style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"clamp(2.2rem,5vw,4rem)",color:"#fff",lineHeight:1.05,maxWidth:560,margin:"0 auto 1.25rem" }}>
        Ready to learn from real experience?
      </h2>
      <p style={{ fontFamily:"var(--font-b)",fontSize:15,color:"rgba(255,255,255,0.82)",maxWidth:440,margin:"0 auto 2.25rem",lineHeight:1.7 }}>
        Every episode is a lesson learned, a mistake shared, or a win celebrated. Subscribe — it's free.
      </p>
      <div style={{ display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap" }}>
        <a href="https://www.youtube.com/@TeqThots" target="_blank" rel="noreferrer" style={{
          background:"#fff",color:"var(--blue)",
          fontFamily:"var(--font-b)",fontWeight:700,fontSize:14,
          padding:"13px 32px",borderRadius:"100px",
          boxShadow:"0 8px 24px rgba(0,0,0,0.15)",
        }}>▶ Subscribe on YouTube</a>
        <a href="https://www.linkedin.com/company/teqthots" target="_blank" rel="noreferrer" style={{
          background:"rgba(255,255,255,0.15)",color:"#fff",
          border:"1.5px solid rgba(255,255,255,0.4)",
          fontFamily:"var(--font-b)",fontWeight:600,fontSize:14,
          padding:"13px 28px",borderRadius:"100px",
        }}>Connect on LinkedIn ↗</a>
      </div>
    </div>
  </section>
);

// ── Footer ────────────────────────────────────────────────────────────────────
const Footer = ({ setPage }) => (
  <footer style={{ borderTop:"1px solid var(--border)",background:"var(--white)",padding:"3rem clamp(1.25rem,6vw,5rem)" }}>
    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"2rem",marginBottom:"2rem" }}>
      <div>
        <Logo size={28}/>
        <p style={{ fontFamily:"var(--font-b)",fontSize:13,color:"var(--ink3)",marginTop:"0.6rem",maxWidth:260,lineHeight:1.6 }}>
          Igniting Tech Conversations. Where innovation meets introspection.
        </p>
      </div>
      <div style={{ display:"flex",gap:"3rem",flexWrap:"wrap" }}>
        <div>
          <div style={{ fontFamily:"var(--font-b)",fontWeight:600,fontSize:12,color:"var(--ink3)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.75rem" }}>Navigate</div>
          {[["home","Home"],["about","About"],["videos","Videos"]].map(([id,label])=>(
            <button key={id} onClick={()=>setPage(id)} style={{
              display:"block",background:"none",border:"none",
              fontFamily:"var(--font-b)",fontSize:14,color:"var(--ink2)",marginBottom:"0.5rem",transition:"color 0.2s",
            }}
              onMouseEnter={e=>e.target.style.color="var(--blue)"}
              onMouseLeave={e=>e.target.style.color="var(--ink2)"}
            >{label}</button>
          ))}
        </div>
        <div>
          <div style={{ fontFamily:"var(--font-b)",fontWeight:600,fontSize:12,color:"var(--ink3)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.75rem" }}>Connect</div>
          {[["https://www.youtube.com/@TeqThots","YouTube ↗"],["https://www.linkedin.com/company/teqthots","LinkedIn ↗"]].map(([href,label])=>(
            <a key={href} href={href} target="_blank" rel="noreferrer" style={{
              display:"block",fontFamily:"var(--font-b)",fontSize:14,color:"var(--ink2)",marginBottom:"0.5rem",transition:"color 0.2s"
            }}
              onMouseEnter={e=>e.target.style.color="var(--purple)"}
              onMouseLeave={e=>e.target.style.color="var(--ink2)"}
            >{label}</a>
          ))}
        </div>
      </div>
    </div>
    <div style={{ borderTop:"1px solid var(--border)",paddingTop:"1.5rem",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem" }}>
      <span style={{ fontFamily:"var(--font-b)",fontSize:12,color:"var(--ink3)" }}>© 2025 TeqThots · A Caimue Production</span>
      <span style={{ fontFamily:"var(--font-b)",fontSize:12,color:"var(--ink3)" }}>Real Tech. Real Thoughts.</span>
    </div>
  </footer>
);

// ── Page: About ───────────────────────────────────────────────────────────────
const AboutPage = () => (
  <div style={{ paddingTop:120 }}>
    <div style={{ padding:"4rem clamp(1.25rem,6vw,5rem) 0" }}>
      <div style={{ fontFamily:"var(--font-b)",fontSize:12,fontWeight:600,color:"var(--purple)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.75rem" }}>✦ About</div>
      <h1 style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"clamp(3rem,9vw,8rem)",lineHeight:0.92,marginBottom:"2rem" }}>
        From Building<br/>
        <span style={{ background:"var(--grad)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>to Believing.</span>
      </h1>
      <p style={{ fontFamily:"var(--font-b)",fontSize:"1.1rem",color:"var(--ink2)",maxWidth:600,lineHeight:1.8,marginBottom:"3rem" }}>
        TeqThots is powered by lived experience — the trials, pivots, and breakthroughs of creating real AI product companies. We share the wins, missteps, and mindsets that define successful tech ventures.
      </p>

      {/* Wide embed – replace videoId */}
      <div style={{ background:"var(--white)",borderRadius:16,border:"1px solid var(--border)",overflow:"hidden",boxShadow:"var(--shadow-lg)",marginBottom:"4rem" }}>
        <div style={{ padding:"1.5rem 1.75rem",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:12 }}>
          <div style={{ width:10,height:10,borderRadius:"50%",background:"var(--purple)" }}/>
          <span style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"1.3rem",color:"var(--ink)" }}>Watch Our Journey</span>
        </div>
        <div style={{ position:"relative",paddingBottom:"44%",height:0 }}>
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="TeqThots Story" allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none" }}/>
        </div>
      </div>

      {/* Values grid */}
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"1rem",marginBottom:"4rem" }}>
        {[
          ["⚡","Real Founders","Every episode from founders who've been in the arena — not theorists."],
          ["🎯","Battle-Tested","We cut through noise. Only content earned through actual experience."],
          ["🤖","AI-Native","Born from Caimue's AI ecosystem — AI-first lens on every challenge."],
          ["🌍","Global View","From emerging markets to Silicon Valley — crossing borders and assumptions."],
        ].map(([icon,title,desc])=>(
          <div key={title} style={{ background:"var(--white)",border:"1.5px solid var(--border)",borderRadius:14,padding:"1.75rem",transition:"all 0.22s" }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--purple)";e.currentTarget.style.boxShadow="var(--shadow-lg)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.boxShadow=""}}
          >
            <div style={{ fontSize:"1.75rem",marginBottom:"0.85rem" }}>{icon}</div>
            <h3 style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"1.2rem",color:"var(--ink)",marginBottom:"0.5rem" }}>{title}</h3>
            <p style={{ fontFamily:"var(--font-b)",fontSize:13,color:"var(--ink3)",lineHeight:1.65 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
    <AntiGravityPrompt/>
    <Studios/>
  </div>
);

// ── Page: Videos ──────────────────────────────────────────────────────────────
const VideosPage = () => {
  const [filter, setFilter] = useState("All");
  const tags = ["All","Founder Story","Strategy","Mindset","AI Trends","Deep Dive"];

  // ⚠️ Replace all videoId values with real TeqThots YouTube video IDs
  const all = [
    { videoId:"dQw4w9WgXcQ", title:"Building AI Products from Zero to One", desc:"The raw story of launching an AI venture with no playbook.", tag:"Founder Story" },
    { videoId:"dQw4w9WgXcQ", title:"Go-To-Market for AI Startups in 2025", desc:"What actually works selling AI to enterprise buyers.", tag:"Strategy" },
    { videoId:"dQw4w9WgXcQ", title:"The Founder Mindset: Failure as Fuel", desc:"How the best founders process losses and keep building.", tag:"Mindset" },
    { videoId:"dQw4w9WgXcQ", title:"AI Tools That Actually Moved the Needle", desc:"Our honest review of what we use daily.", tag:"AI Trends" },
    { videoId:"dQw4w9WgXcQ", title:"From Idea to Funded: The Real Story", desc:"Inside the messy, non-linear path to raising your first round.", tag:"Founder Story" },
    { videoId:"dQw4w9WgXcQ", title:"Scaling a Team Without Losing Culture", desc:"Hiring and culture lessons nobody talks about.", tag:"Deep Dive" },
    { videoId:"dQw4w9WgXcQ", title:"AI in Production: What Breaks First", desc:"Painful, expensive lessons of shipping AI features.", tag:"AI Trends" },
    { videoId:"dQw4w9WgXcQ", title:"Pricing Your AI Product", desc:"Usage, seats, outcomes — what the market accepts.", tag:"Strategy" },
    { videoId:"dQw4w9WgXcQ", title:"Founder Burnout: Signals & Recovery", desc:"Sustaining yourself for the long game.", tag:"Mindset" },
  ];

  const filtered = filter==="All"?all:all.filter(v=>v.tag===filter);

  return (
    <div style={{ paddingTop:120 }}>
      <div style={{ padding:"4rem clamp(1.25rem,6vw,5rem) 6rem" }}>
        <div style={{ fontFamily:"var(--font-b)",fontSize:12,fontWeight:600,color:"var(--purple)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.75rem" }}>✦ All Episodes</div>
        <h1 style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"clamp(2.5rem,7vw,6rem)",lineHeight:0.95,marginBottom:"2.5rem" }}>
          Every episode,<br/>
          <span style={{ background:"var(--grad)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>every lesson.</span>
        </h1>

        {/* Filter pills */}
        <div style={{ display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"2.5rem" }}>
          {tags.map(t=>(
            <button key={t} onClick={()=>setFilter(t)} style={{
              background: t===filter?"var(--grad2)":"var(--white)",
              color: t===filter?"#fff":"var(--ink2)",
              border:`1.5px solid ${t===filter?"transparent":"var(--border)"}`,
              fontFamily:"var(--font-b)",fontWeight:500,fontSize:13,
              padding:"7px 18px",borderRadius:"100px",transition:"all 0.2s",
              boxShadow: t===filter?"0 4px 16px rgba(59,47,201,0.25)":"none",
            }}>{t}</button>
          ))}
        </div>

        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1.25rem",marginBottom:"4rem" }}>
          {filtered.map((ep,i)=><VideoCard key={i} {...ep}/>)}
        </div>

        <div style={{ textAlign:"center",padding:"3rem",background:"var(--white)",borderRadius:16,border:"1px solid var(--border)" }}>
          <h3 style={{ fontFamily:"var(--font-d)",fontWeight:700,fontSize:"1.75rem",color:"var(--ink)",marginBottom:"0.5rem" }}>More dropping every week.</h3>
          <p style={{ fontFamily:"var(--font-b)",fontSize:14,color:"var(--ink3)",marginBottom:"1.5rem" }}>Subscribe so you never miss a lesson.</p>
          <a href="https://www.youtube.com/@TeqThots" target="_blank" rel="noreferrer" style={{
            display:"inline-block",
            background:"var(--grad2)",color:"#fff",
            fontFamily:"var(--font-b)",fontWeight:700,fontSize:15,
            padding:"14px 36px",borderRadius:"100px",
            boxShadow:"0 8px 24px rgba(59,47,201,0.3)",
          }}>▶ Open Full Channel</a>
        </div>
      </div>
    </div>
  );
};

// ── Root ──────────────────────────────────────────────────────────────────────
export default function TeqThotsApp() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  const navigate = useCallback((p)=>{ setPage(p); window.scrollTo({top:0,behavior:"smooth"}); },[]);

  return (
    <>
      <GlobalStyles/>
      <Nav page={page} setPage={navigate} scrolled={scrolled}/>
      <main>
        {page==="home"   && <><Hero setPage={navigate}/><Ticker/><AntiGravityPrompt/><FeaturedEpisodes setPage={navigate}/><Studios/><CTABanner/></>}
        {page==="about"  && <AboutPage/>}
        {page==="videos" && <VideosPage/>}
      </main>
      <Footer setPage={navigate}/>
    </>
  );
}
