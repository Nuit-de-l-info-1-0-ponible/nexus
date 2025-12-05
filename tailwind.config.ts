import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                nexus: {
                    dark: "#0f172a", // Noir profond
                    cyan: "#06b6d4", // Cyan futuriste
                    purple: "#8b5cf6", // Violet néon
                    light: "#e2e8f0", // Gris clair
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                glow: {
                    "0%": { boxShadow: "0 0 5px #06b6d4" },
                    "100%": { boxShadow: "0 0 20px #8b5cf6, 0 0 10px #06b6d4" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
