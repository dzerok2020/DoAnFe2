/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        118: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
      },
      padding: {
        "33/100": "0.33rem",
      },
      fontSize: {
        x: ".5rem",
      },
      flexBasis: {
        "1/20": "5%",
        "7/100": "7%",
        "1/10": "10%",
        "25/2": "12.5%",
        "3/20": "15%",
        "3/10": "30%",
        "7/10": "70%",
        "17/20": "85%",
        "9/10": "90%",
        "93/100": "93%",
      },
      backgroundImage: {
        "background-Home":
          "url('https://cdn.wolvesville.com/backgrounds/wolvesville_large_day.wide@3x.png')",
        "background-Play":
          "url('https://www.wolvesville.com/static/media/background_tile_standard.55b691c5.png')",
        "background-Play-User":
          "url('https://cdn.wolvesville.com/backgrounds/wolvesville_small_day@3x.png')",
      },
      spacing: {
        "2.5": "0.55rem",
        "9": "2.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "100": "25rem",
        "1/35": "calc(33.333333% - 1rem)",
      },
      inset: {
        "2.5": "0.65rem",
        "3.5": "0.85rem",
        "4.5": "1.15rem",
        "5.5": "1.35rem",
        "10": "2.5rem",
        "15": "3.75rem",
        "18": "4.5rem",
      },
    },
  },
  plugins: [],
};
