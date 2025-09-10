/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#232323",
        accent: "#703bf7",
        textPrimary: "#f7f7f7",
        textSecondary: "#b099ef",
        cardBorder: "#555964"
      },
      fontFamily: {
        urbanist: ["Urbanist"],
      },
    },
  },
  plugins: [],
};
