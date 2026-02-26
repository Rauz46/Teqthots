"use client";
import { Play, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoCardProps {
    title: string;
    category: string;
    duration?: string;
    description?: string;
    gradient?: string;
    index?: number;
}

const categoryColors: Record<string, string> = {
    "AI Product Building": "bg-brand-purple/10 text-brand-purple",
    "Founder Stories": "bg-brand-navy/10 text-brand-navy",
    "SalesTech": "bg-brand-teal/10 text-brand-teal",
    "HRTech": "bg-brand-purple/10 text-brand-purple",
    "InnovationTech": "bg-brand-navy/10 text-brand-navy",
};

const gradients = [
    "from-brand-navy via-brand-purple to-brand-teal",
    "from-brand-purple via-brand-navy to-brand-purple",
    "from-brand-teal via-brand-purple to-brand-navy",
    "from-brand-navy via-brand-teal to-brand-purple",
    "from-brand-purple via-brand-teal to-brand-navy",
    "from-brand-teal via-brand-navy to-brand-purple",
];

export default function VideoCard({
    title,
    category,
    duration = "12:34",
    description,
    index = 0,
}: VideoCardProps) {
    const grad = gradients[index % gradients.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-300 cursor-pointer"
        >
            {/* Thumbnail */}
            <div className={cn("relative h-48 bg-gradient-to-br overflow-hidden", grad)}>
                {/* Abstract shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                    <div className="absolute bottom-2 left-2 w-16 h-16 rounded-full bg-white/15 blur-lg" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/10" />
                </div>
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:bg-white/40 transition-all duration-300"
                    >
                        <Play size={20} className="text-white fill-white ml-1" />
                    </motion.div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    <Clock size={10} />
                    {duration}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                    <span
                        className={cn(
                            "tag text-xs font-semibold",
                            categoryColors[category] ?? "bg-slate-100 text-slate-600"
                        )}
                    >
                        {category}
                    </span>
                </div>
                <h3 className="font-display font-bold text-surface-dark text-base leading-snug mb-2 group-hover:text-brand-purple transition-colors duration-200">
                    {title}
                </h3>
                {description && (
                    <p className="text-slate-500 text-sm font-body leading-relaxed line-clamp-2">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
