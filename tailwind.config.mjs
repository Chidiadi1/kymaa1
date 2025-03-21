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
          strong: '#242424',
          light: '#666666',
          extraLight: '#d2d2d2'
        },
        blue: {
          strong: '#00244e',
          light: '#0678ff',
          extraLight: '#93c5fd'
        },
        white: {
          normal: '#ffffff',
          strong: '#f0f0f0',
          light: '#a1a1aa'
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
