import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // ---- Upward brand palette (matched to the logo) ----
        navy: {
          DEFAULT: "#0A2540", // primary navy / dark teal-black
          900: "#061A2E",
          800: "#0A2540",
          700: "#11365A",
          600: "#1B4870",
        },
        sage: {
          // accent green / teal from the logo arrow + "U"
          DEFAULT: "#4DA6A0",
          50: "#EFF8F7",
          100: "#D9EFED",
          200: "#B0DEDA",
          300: "#86CDC7",
          400: "#65CFCA",
          500: "#55B4AE",
          600: "#4DA6A0",
          700: "#3C817C",
          800: "#2B5C5D",
          900: "#1F4344",
        },
        ink: "#1A1F25",
        offwhite: "#F8F9FA",

        // shadcn/ui token bridge -> brand
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      height: {
        13: "3.25rem",
        18: "4.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "sage-gradient": "linear-gradient(135deg, #55B4AE 0%, #4DA6A0 50%, #2B5C5D 100%)",
        "navy-gradient": "linear-gradient(160deg, #0A2540 0%, #061A2E 100%)",
        "navy-sage": "linear-gradient(135deg, #0A2540 0%, #11365A 55%, #2B5C5D 100%)",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(10, 37, 64, 0.12)",
        card: "0 12px 40px -16px rgba(10, 37, 64, 0.18)",
        lift: "0 24px 60px -24px rgba(10, 37, 64, 0.28)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
