/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0f0f0f",
          800: "#1a1a1a",
          700: "#242424",
          600: "#2e2e2e",
          500: "#3a3a3a",
        },
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
      },
    },
  },
  plugins: [],
};
