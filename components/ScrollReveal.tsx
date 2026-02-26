"use client";
import { useRef, ReactNode } from "react";
import { motion, useInView, Transition } from "framer-motion";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
}

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    direction = "up",
}: ScrollRevealProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const initial = {
        opacity: 0,
        y: direction === "up" ? 50 : 0,
        x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    };

    const animate = inView
        ? { opacity: 1, y: 0, x: 0 }
        : initial;

    const transition: Transition = {
        duration: 0.7,
        delay,
        ease: "easeOut",
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            {children}
        </motion.div>
    );
}
