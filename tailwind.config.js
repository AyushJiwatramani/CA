/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "neutrals-6": "#e6e8ec",
        "neutrals-2": "#23262f",
        "primary-3": "#ff6838",
        "neutrals-5": "#b1b5c4",
        "neutrals-4": "#777e91",
        "primary-4": "#58bd7c",
        gray: {
          "100": "#1f2431",
          "200": "#1e1e1e",
          "300": "#111",
          "400": "rgba(17, 17, 17, 0.3)",
        },
        "shade-7-50": "#f8f8f9",
        lightgray: {
          "100": "#cccfd4",
          "200": "rgba(204, 207, 212, 0.09)",
        },
        "neutrals-3": "#353945",
        "neutrals-8": "#fcfcfd",
        crimson: {
          "100": "#ee1d52",
          "200": "#d71e28",
        },
        whitesmoke: "#f6f6f6",
        lightslategray: "#82899b",
        dimgray: {
          "100": "#666",
          "200": "rgba(102, 102, 102, 0.8)",
          "300": "rgba(102, 102, 102, 0.35)",
          "400": "rgba(102, 102, 102, 0.6)",
        },
        darkslategray: "#333",
        red: "#ee1b26",
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        "button-2": "'DM Sans'",
        "body-2-bold": "Poppins",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "71xl": "90px",
        "81xl": "100px",
        "3xs": "10px",
        "32xl": "51px",
        "13xl": "32px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      lg: "18px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
