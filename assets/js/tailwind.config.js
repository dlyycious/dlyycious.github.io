tailwind.config = {
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00f5ff",
        "neon-purple": "#bf00ff",
        "neon-green": "#39ff14",
        "dark-bg": "#0a0a0a",
        "dark-card": "#1a1a1a",
        "dark-border": "#333333",
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        "pulse-glow": {
          from: { boxShadow: "0 0 20px #00f5ff" },
          to: { boxShadow: "0 0 40px #00f5ff, 0 0 60px #00f5ff" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { textShadow: "0 0 10px #00f5ff" },
          to: { textShadow: "0 0 20px #00f5ff, 0 0 30px #00f5ff" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
};
