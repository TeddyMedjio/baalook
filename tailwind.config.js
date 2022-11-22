/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./img/hero.png')",
        "bg-pattern": "url('./img/background.png')",
        "hero-dashboard": "url('./img/dashboard.png')",
        "bg-fonction": "url('./img/fonction.png')",
      },
      colors: {
        colorGray: "hsl(216, 12%, 84%)",
        colorNav: "hsl(220, 9%, 46%)",
        brightBrown: "hsl(26, 69%, 41%)",
        brightBrownSupLight: "hsl(25, 100%, 86%)",
        darkBlue: "hsl(220, 59%, 29%)",
        brightBlue: "hsl(220, 75%, 40%)",
        veryLightBlue: "hsl(217, 93%, 72%)",
        brightGreen: "hsl(184, 80%, 44%)",
        colorGreen: "hsl(161, 94%, 30%)",
        darkGreen: "hsl(163, 94%, 24%)",
        lightGreen: "hsl(154, 61%, 92%)",
        lightBlue: "hsl(192, 91%, 36%)",
      },
    },
  },
  plugins: [],
};
