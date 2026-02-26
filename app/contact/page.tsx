import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
    title: "Contact — TeqThots",
    description: "Get in touch with the TeqThots team — for guest appearances, partnerships, media inquiries, or just to say hello.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
