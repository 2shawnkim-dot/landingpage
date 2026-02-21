import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "Georgia",
          "serif",
        ],
      },
      colors: {
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F7F5",
          dark: "#0A0A0A",
        },
        ink: {
          DEFAULT: "#111111",
          secondary: "#555555",
          muted: "#999999",
          faint: "#CCCCCC",
        },
        rule: {
          DEFAULT: "#E5E5E3",
          dark: "#2A2A2A",
        },
      },
      fontSize: {
        hero: ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "600" }],
        headline: ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
        subhead: ["clamp(1rem, 2vw, 1.25rem)", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 8rem)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
