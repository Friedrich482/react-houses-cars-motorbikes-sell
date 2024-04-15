/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-white": " rgb(241, 241, 241)",
        "default-black": "hsl(240 10% 3.9%);",
      },
    },
  },
  plugins: [],
};
