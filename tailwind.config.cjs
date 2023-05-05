/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefinRegular: ["JosefinSansRegular", "sans-serif"],
        josefinBold: ["JosefinSansBold", "sans-serif"],
        JosefinSansSemiBold: ["JosefinSansSemiBold", "sans-serif"],
        NunitoSansRegular: ["NunitoSansRegular", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
