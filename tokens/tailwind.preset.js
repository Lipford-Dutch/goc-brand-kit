/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        goc: {
          bg: "#07090a",
          surface: "#0b0e10",
          text: "#f4f5f3",
          muted: "#afb4b6",
          subtle: "#8b9295",
          amber: "#e65f00",
          "amber-hover": "#ff7620",
          "amber-bright": "#ff8b3d",
          green: "#3ee6a2",
          paper: "#f4f5f3",
        },
      },
      fontFamily: {
        display: ["Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"],
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      letterSpacing: { brand: "0.23em" },
      maxWidth: { goc: "112rem" },
    },
  },
};
