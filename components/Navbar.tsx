"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/video", label: "Videos" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav style={{
            position: "sticky", top: 0, left: 0, right: 0, zIndex: 200,
            height: 68, padding: "0 clamp(1.25rem,5vw,4rem)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
        }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                <Image
                    src="/logo.png"
                    alt="TeqThots"
                    width={130} height={40}
                    style={{ objectFit: "contain" }}
                    priority
                />
            </Link>

            {/* Desktop links */}
            <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden md:flex">
                {navLinks.map(({ href, label }) => {
                    const active = pathname === href;
                    return (
                        <Link key={href} href={href}
                            onClick={(e) => {
                                if (label === "About") e.preventDefault();
                            }}
                            style={{
                                fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 13,
                                color: active ? "var(--blue)" : "var(--ink2)",
                                letterSpacing: "0.02em",
                                position: "relative", padding: "4px 0", transition: "color 0.2s",
                                cursor: label === "About" ? "default" : "pointer",
                            }}>
                            {label}
                            {active && (
                                <span style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 2, background: "var(--grad2)", borderRadius: 2 }} />
                            )}
                        </Link>
                    );
                })}
                <Link href="/contact"
                    style={{
                        background: "var(--grad2)",
                        color: "#fff",
                        fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 13,
                        padding: "10px 24px", borderRadius: "100px",
                        boxShadow: "0 4px 16px rgba(59,47,201,0.22)",
                        display: "inline-flex", alignItems: "center",
                        transition: "all 0.2s",
                        textDecoration: "none"
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(59,47,201,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(59,47,201,0.22)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
                >
                    Contact
                </Link>
            </div>

            {/* Mobile toggle */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
                style={{ background: "none", border: "none", color: "var(--ink)", padding: 4 }}>
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{
                    position: "absolute", top: 68, left: 0, right: 0,
                    background: "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(24px)",
                    borderBottom: "1px solid var(--border)",
                    padding: "1rem 1.5rem 1.5rem",
                }}>
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href}
                            onClick={(e) => {
                                setMenuOpen(false);
                                if (label === "About") e.preventDefault();
                            }}
                            style={{ display: "block", fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 15, color: "var(--ink)", padding: "10px 0", borderBottom: "1px solid var(--border)", cursor: label === "About" ? "default" : "pointer" }}>
                            {label}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setMenuOpen(false)}
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: "1rem", background: "var(--grad2)", color: "#fff", fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 14, padding: "10px 22px", borderRadius: "100px", width: "100%", textDecoration: "none" }}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
