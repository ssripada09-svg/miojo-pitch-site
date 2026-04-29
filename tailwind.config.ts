import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cream surfaces — primary editorial ground
        cream: {
          50: "#FAF7F0",
          100: "#F5F1E8",
          200: "#EFE9D9",
          300: "#E5DCC4",
        },
        // Forest greens — primary ink, hierarchy
        forest: {
          DEFAULT: "#2D3A2D",
          900: "#1F2C20",
          700: "#324135",
          500: "#4D5C4F",
          400: "#7A8A7C",
          300: "#A6B3A8",
        },
        // Muted gold — premium CTA / metallic accent
        gold: {
          50: "#F5E9CD",
          100: "#EBD8AD",
          200: "#DEC487",
          300: "#D2B16C",
          400: "#C4A45F",
          500: "#A88848",
          600: "#876B36",
        },
        // Terracotta / rust — secondary warmth
        terracotta: {
          400: "#D87358",
          500: "#C15A3B",
          600: "#A14A30",
          700: "#8B4C3A",
        },
        // Olive — tertiary depth
        olive: {
          400: "#828246",
          500: "#6B6B3D",
          600: "#535330",
        },
        // Warm sand — inset bands, timelines
        sand: {
          100: "#F2E4D2",
          200: "#E8C9B0",
          300: "#D8B395",
        },
        // Warm charcoal — focused dark zones
        char: {
          DEFAULT: "#6B6259",
          800: "#3F3A35",
          900: "#2A2622",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        shell: "1200px",
        prose: "68ch",
      },
      letterSpacing: {
        eyebrow: "0.16em",
      },
      fontSize: {
        eyebrow: ["0.72rem", { lineHeight: "1rem", letterSpacing: "0.16em" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pan": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-2%, 1.2%, 0)" },
        },
        "beam-drift": {
          "0%, 100%": { opacity: "0.25", transform: "translate3d(0,0,0)" },
          "50%": { opacity: "0.45", transform: "translate3d(3%, -1%, 0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.12)" },
        },
        "beacon-sweep": {
          "0%, 100%": { opacity: "0", transform: "translateX(-40%) skewX(-18deg)" },
          "20%": { opacity: "0.55" },
          "60%": { opacity: "0.55" },
          "100%": { opacity: "0", transform: "translateX(140%) skewX(-18deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.2, 0.85, 0.35, 1) both",
        "soft-pan": "soft-pan 22s ease-in-out infinite",
        "beam-drift": "beam-drift 18s ease-in-out infinite",
        "soft-pulse": "soft-pulse 3.2s ease-in-out infinite",
        "beacon-sweep": "beacon-sweep 14s cubic-bezier(0.7, 0, 0.3, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
