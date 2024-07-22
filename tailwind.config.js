/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenlanding: {
          50: "#f4fee7",
          100: "#e5fbcc",
          200: "#ccf79f",
          300: "#aaef67",
          400: "#8ae239",
          500: "#6ac81a",
          600: "#50a010",
          700: "#3e7a11",
          800: "#346014",
          900: "#2d5215",
          950: "#142d06",
        },
      },
    },
  },
  plugins: [],
};
