"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer style={{
            background: "#ffffff",
            padding: "1.25rem clamp(1.5rem, 8vw, 6rem)",
            borderTop: "1px solid #f0f0f0"
        }}>
            <div style={{
                maxWidth: "1400px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem"
            }}>
                {/* Top Row: Logo, Nav, Socials */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1.5rem"
                }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="TeqThots"
                                width={110}
                                height={34}
                                style={{ objectFit: "contain" }}
                            />
                        </Link>
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5rem",
                        flexWrap: "wrap"
                    }}>
                        <div style={{ display: "flex", gap: "2rem" }}>
                            {[["/about", "About"], ["/video", "Videos"], ["/contact", "Contact"]].map(([href, label]) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={(e) => {
                                        if (label === "About") e.preventDefault();
                                    }}
                                    style={{
                                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "#18182B",
                                        textDecoration: "none",
                                        transition: "color 0.2s",
                                        cursor: label === "About" ? "default" : "pointer"
                                    }}
                                    onMouseEnter={e => {
                                        if (label !== "About") (e.target as HTMLElement).style.color = "#3B2FC9";
                                    }}
                                    onMouseLeave={e => {
                                        if (label !== "About") (e.target as HTMLElement).style.color = "#18182B";
                                    }}
                                >{label}</Link>
                            ))}
                        </div>

                        <div style={{ display: "flex", gap: "10px" }}>
                            {[
                                { href: "https://www.youtube.com/@TeqThots", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg> },
                                { href: "https://instagram.com", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                                { href: "https://www.linkedin.com/company/teqthots", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "8px",
                                        background: "#f8f8fc",
                                        border: "1px solid #eee",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#8E8EA8",
                                        transition: "all 0.2s"
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.borderColor = "#3B2FC9";
                                        el.style.color = "#3B2FC9";
                                        el.style.background = "#fff";
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.borderColor = "#eee";
                                        el.style.color = "#8E8EA8";
                                        el.style.background = "#f8f8fc";
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Copyright & Legal */}
                <div style={{
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem"
                }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "12px", color: "#8E8EA8" }}>
                        © {new Date().getFullYear()} TeqThots. All rights reserved.
                    </span>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {["Privacy Policy", "Terms of Service"].map(label => (
                            <Link
                                key={label}
                                href="#"
                                style={{
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontSize: "12px",
                                    color: "#8E8EA8",
                                    textDecoration: "none"
                                }}
                            >{label}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
