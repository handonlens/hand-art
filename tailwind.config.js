/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cinema: {
          black: "#050506",
          charcoal: "#0d0d10",
          red: "#ff2d2d",
          crimson: "#8a0f1a",
        },
      },
      fontFamily: {
        display: ["'Poppins'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 60px -15px rgba(0, 0, 0, 0.7)",
        glow: "0 0 60px rgba(255, 45, 45, 0.35)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(1.15)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 10s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
