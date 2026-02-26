"use client";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
    color?: "navy" | "purple" | "teal" | "blue" | "indigo" | "amber" | "pink";
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    animate?: boolean;
}

const colorMap = {
    navy: "bg-brand-navy/80",
    purple: "bg-brand-purple/70",
    teal: "bg-brand-teal/70",
    blue: "bg-blue-400/30",
    indigo: "bg-indigo-500/30",
    amber: "bg-amber-400/25",
    pink: "bg-pink-400/25",
};

const sizeMap = {
    sm: "w-48 h-48",
    md: "w-72 h-72",
    lg: "w-96 h-96",
    xl: "w-[600px] h-[600px]",
};

export default function GlowOrb({
    color = "indigo",
    size = "lg",
    className,
    animate = true,
}: GlowOrbProps) {
    return (
        <div
            className={cn(
                "absolute rounded-full blur-3xl pointer-events-none",
                colorMap[color],
                sizeMap[size],
                animate && "animate-[orb-pulse_8s_ease-in-out_infinite]",
                className
            )}
            style={{
                WebkitBackdropFilter: "none",
            }}
        />
    );
}
