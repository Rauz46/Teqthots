import type { Metadata } from "next";
import VideoPageClient from "@/components/video/VideoPageClient";

export const metadata: Metadata = {
    title: "Videos — TeqThots",
    description: "Watch. Learn. Build Smarter. Episodes from founders who've built real AI products and companies.",
};

export default function VideoPage() {
    return <VideoPageClient />;
}
