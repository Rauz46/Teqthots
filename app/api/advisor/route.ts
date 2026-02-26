import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { question } = await req.json();
        if (!question?.trim()) {
            return NextResponse.json({ answer: "Please ask a question." }, { status: 400 });
        }

        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { answer: "AI Advisor is not configured yet. Add ANTHROPIC_API_KEY to your environment variables." },
                { status: 200 }
            );
        }

        const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
                "anthropic-version": "2023-06-01",
            },
            body: JSON.stringify({
                model: "claude-3-5-sonnet-20241022",
                max_tokens: 800,
                system:
                    "You are a sharp, insightful advisor for tech entrepreneurs and AI founders — the voice behind TeqThots by Caimue. Give punchy, honest, battle-tested advice in 2-3 short paragraphs. No fluff. No corporate speak. Use direct founder language. Be inspiring but grounded in reality.",
                messages: [{ role: "user", content: question }],
            }),
        });

        const data = await res.json();
        const answer =
            data.content?.map((c: { text: string }) => c.text).join("") ??
            "Couldn't get a response right now.";

        return NextResponse.json({ answer });
    } catch (err) {
        console.error("Advisor API error:", err);
        return NextResponse.json({ answer: "Connection failed — try again." }, { status: 500 });
    }
}
