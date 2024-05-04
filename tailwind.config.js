/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#36454F",
      secondary: "#5F9EA0",
      accent: "#C19A6B",
      background: "#F0EDE5",
      complementary: "#AD6D68",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        "custom-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "custom-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        astronaut:
          "custom-float 10s infinite ease-in-out, custom-spin 20s infinite linear",
        "astronaut-fast":
          "custom-float 3s infinite ease-in-out, custom-spin 5s infinite linear",
      },
    },
  },
  plugins: [],
};
