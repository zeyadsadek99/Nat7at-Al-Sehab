/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    // './node_modules/@my-company/tailwind-components/**/*.js',
  ],
  theme: {

    colors: {
      border: "#7C8089",
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      primaryOpacity: 'var(--color-primary-opacity)',
      primaryOpacity4: 'var(--color-primary-opacity4)',
      primaryOpacity30: 'var(--color-primary-opacity30)',
      text: "#000000",
      sub: "#7C8089",
      footer: "#E3E7EE",
      textsub: "#303030",
      bordersub: "#D4D9E3",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red


    },
    screens: {
      'xs': '425px',

      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // '3xl': '1600px',

    },
    minHeight: {
      '3/4': '75%',
    },
    maxWidth: {
      '3/4': '75%',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        // sm: '1rem',
        // lg: '1rem',
        // xl: '1rem',
        // '2xl': '4rem',
      },
    },
    fontFamily: {
      switzer: ['Switzer', 'sans-serif'],
      din: ['Din', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      // alumni: ['Alumni', 'sans-serif'],
    },
    opacity: {
 
      "0": "0",
      "2": ".2",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "60": ".6",
      "70": ".7",
      "80": ".8",
      "90": ".9",
      "100": "1",
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
    },

    extend: {
      boxShadow: {
        'custom-shadow': '0 4px 50px 0px rgba(0, 0, 0, 0.6)',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #1E3A81 0%, #0E45D0 73.5%)',
        'custom-gradient1': 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)',
      },
      keyframes: {
        accordionUp: {
          "0%": { height: "var(--radix-accordion-content-height)" },
          "100%": { height: "0" },
        },
        accordionDown: {
          "0%": { height: "0" },
          "100%": { height: "var(--radix-accordion-content-height)" },
        },
      },
      animation: {
        "accordion-up": "accordionUp 0.3s ease-out",
        "accordion-down": "accordionDown 0.3s ease-out",
      },
      transitionProperty: {
        "font-weight": "font-weight",
      },
    },
  },
  plugins: [],
};



