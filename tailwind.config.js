/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7777FB',
          DEFAULT: '#4A4AFA',
          dark: '#3636D6',
        },
        text: {
          darkest: '#1A1943',
          dark: '#5E5D85',
          DEFAULT: '#8E8DAC',
          light: '#C9CBD8',
        },
      },
    },
  },
  plugins: [],
};
