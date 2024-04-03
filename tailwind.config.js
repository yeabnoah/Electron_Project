/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["urbanist", "system-ui"],
        montserrat: ["montserrat", "sans-serif"],
        urbanist: ["urbanist", "sans-serif"],
        urbanistBold: ["urbanistBold", "sans-serif"],
        urbanistMd: ["urbanistMedium", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
