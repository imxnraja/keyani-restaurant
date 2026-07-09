/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT:"#E8630A", light:"#FF7A1F", dark:"#C2500A", glow:"rgba(232,99,10,0.25)" },
        bg: { DEFAULT:"#0A0A0A", 2:"#111111", 3:"#161616", card:"#1A1A1A", hover:"#1F1F1F" },
      },
      fontFamily: {
        display: ["'Playfair Display'","serif"],
        body: ["'Plus Jakarta Sans'","sans-serif"],
      },
      boxShadow: {
        "orange-sm":"0 4px 16px rgba(232,99,10,0.2)",
        "orange-md":"0 8px 32px rgba(232,99,10,0.28)",
        "orange-lg":"0 16px 56px rgba(232,99,10,0.35)",
        "dark":"0 20px 60px rgba(0,0,0,0.6)",
        "card":"0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
