/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#F97316",
          light:   "#FB923C",
          dark:    "#EA580C",
          glow:    "rgba(249,115,22,0.30)",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light:   "#E8CC6A",
          glow:    "rgba(212,175,55,0.20)",
        },
        bg: {
          DEFAULT: "#0F0B08",   /* warm near-black — not cold blue-black */
          2:       "#150E0A",
          3:       "#1C1209",
          card:    "#231609",   /* rich deep amber-brown card */
          hover:   "#2A1C0C",
        },
      },
      fontFamily: {
        display:   ["'Playfair Display'", "serif"],
        serif:     ["'Cormorant Garamond'", "serif"],
        body:      ["'Manrope'", "sans-serif"],
        sans:      ["'Manrope'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        "orange-sm":  "0 4px 20px rgba(249,115,22,0.28)",
        "orange-md":  "0 8px 40px rgba(249,115,22,0.35)",
        "orange-lg":  "0 16px 64px rgba(249,115,22,0.42)",
        "gold-sm":    "0 4px 20px rgba(212,175,55,0.22)",
        "dark":       "0 24px 80px rgba(0,0,0,0.65)",
        "card":       "0 8px 32px rgba(0,0,0,0.50)",
      },
      backgroundImage: {
        "warm-radial": "radial-gradient(ellipse at top, rgba(249,115,22,0.18) 0%, transparent 65%)",
      },
    },
  },
  plugins: [],
};
