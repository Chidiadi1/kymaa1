/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          strong: '#242424',
          light: '#666666'
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
    },
  },
  plugins: [],
};
