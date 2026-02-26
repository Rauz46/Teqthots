import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-caveat)", "Caveat", "cursive"],
        body: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brand: {
          navy: "#101C84",
          purple: "#82157A",
          teal: "#24898B",
          blue: "#3B2FC9",
          indigo: "#8B2FC9",
          amber: "#3ECDC8",
        },
        surface: {
          dark: "#0A0A0F",
          "dark-2": "#111118",
          light: "#F8F7FF",
        },
        ink: "#18182B",
        ink2: "#45455E",
        ink3: "#8E8EA8",
        border: "#E3E3F0",
        "blue-soft": "#EEF0FF",
        "teal-soft": "#E6FAFA",
        bg: "#F7F7FC",
      },
      backgroundImage: {
        "grad": "linear-gradient(135deg, #3B2FC9 0%, #8B2FC9 55%, #3ECDC8 100%)",
        "grad2": "linear-gradient(90deg, #3B2FC9 0%, #8B2FC9 100%)",
        "mesh-light": "radial-gradient(ellipse at 20% 50%, rgba(139,47,201,0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(62,205,200,0.06) 0%, transparent 60%)",
        "mesh-blue": "radial-gradient(ellipse at 30% 40%, rgba(59,47,201,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(62,205,200,0.10) 0%, transparent 60%)",
      },
      boxShadow: {
        brand: "0 4px 24px rgba(59,47,201,0.09)",
        "brand-lg": "0 16px 48px rgba(59,47,201,0.14)",
      },
      borderRadius: {
        brand: "14px",
      },
      animation: {
        gradShift: "gradShift 4s ease infinite",
        ticker: "ticker 22s linear infinite",
        float: "floatA 3.5s ease-in-out infinite",
        pulseRing: "pulseRing 1.8s ease-out infinite",
        bubbleUp: "bubbleUp 3.2s ease forwards",
        spin: "spin 0.65s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
