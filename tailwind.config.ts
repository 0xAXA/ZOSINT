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
        void: "#02000a",
        "z-glow": "#00FFEE",
        "z-pulse": "#DA00FF",
        "data-breached": "#FF4545",
        "text-primary": "#F0F0F0",
        "text-muted": "#888899",
      },
      backgroundColor: {
        void: "#02000a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 3s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(0, 255, 238, 0.5)",
          },
          "50%": {
            opacity: "0.7",
            boxShadow: "0 0 40px rgba(0, 255, 238, 0.8)",
          },
        },
        scanline: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
