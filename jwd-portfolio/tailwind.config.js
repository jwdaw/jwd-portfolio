/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0a0a0a",
          800: "#141414",
          700: "#1e1e1e",
          600: "#2a2a2a",
          500: "#3a3a3a",
        },
        accent: {
          DEFAULT: "#ffffff",
          light: "#e5e5e5",
          dark: "#d4d4d4",
        },
      },
    },
  },
  plugins: [],
};
