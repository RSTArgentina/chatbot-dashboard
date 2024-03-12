/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#E8C92B",
          secondary: "#7C3AED",
          accent: "#342CE8",
          neutral: "#3A3A45",
          "base-100": "#FAFAFA",
          "base-200": "#FFF7CE",
          info: "#00e4ff",
          success: "#00aa68",
          warning: "#d28400",
          error: "#f83f51",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
