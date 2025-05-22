/* import { Italiana, Montserrat } from 'next/font/google'; */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class', 

  theme: {
    extend: {
      colors: {
        black: {
          strong: '#0b1c31',
          light: '#666666',
          extraLight: '#d3d3d3'
        },
        blue: {
          strong: '#00244e',
          light: '#045fd0'
        },
        white: {
          normal: '#ffffff',
          strong: '#f9f9f9'
        }
      },

      fontFamily: {
        montserrat: ['Montserrat', ...fontFamily.sans],
        italiana: ['Italiana', ...fontFamily.sans],
      },

      /* EDIT TAPE ANIMATION HERE */
      animation: {
        'tape-animation': 'tape-animation 1s linear infinite'
      },

      keyframes: {
        'tape-animation': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        }
      }
    },
  },
  plugins: [],
};
