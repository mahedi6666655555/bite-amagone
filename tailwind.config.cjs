/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            mm: "#1c2b35",

            mahedi: "#2a414f",

            accent: "#1FB2A5",

            neutral: "##95A0A7",

            "base-100": "#2A303C",

            info: "#3ABFF8",

            success: "#36D399",

            warning: "#FBBD23",

            error: "#F87272",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
