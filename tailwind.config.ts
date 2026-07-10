import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        royal: {
          50: "#EFF4FF",
          100: "#DBE6FE",
          200: "#BFD3FE",
          300: "#93B4FD",
          400: "#608BFA",
          500: "#3B68F4",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        ink: {
          50: "#F5F6F7",
          100: "#E7E9EC",
          200: "#C9CED6",
          300: "#9AA3B2",
          400: "#6B7684",
          500: "#4B5563",
          600: "#374151",
          700: "#1F2937",
          800: "#151B26",
          900: "#0B0F17",
        },
        sky: {
          light: "#7DB8FF",
          DEFAULT: "#38BDF8",
        },
        surface: {
          light: "#FFFFFF",
          soft: "#F7F9FC",
          dark: "#0B0F17",
          darkSoft: "#111826",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(37,99,235,0.16) 0%, rgba(37,99,235,0) 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,15,23,0.04), 0 8px 24px -8px rgba(37,99,235,0.12)",
        "card-hover": "0 4px 8px rgba(11,15,23,0.06), 0 20px 40px -12px rgba(37,99,235,0.22)",
        glow: "0 0 0 1px rgba(37,99,235,0.15), 0 8px 30px rgba(37,99,235,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "orbit-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-1000" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "orbit-slow": "orbit-spin 60s linear infinite",
        "dash-flow": "dash-flow 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
