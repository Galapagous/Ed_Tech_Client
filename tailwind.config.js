/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary_700: 'crimson',
        primary_100: '#000a19',
        primary_200: '#191919',
        primary_300: '#0c0c0c',
        secondary_100: '#aea7a3',
        secondary_200: '#525254',
      },
      borderColor: {
        primary_700: '#0d1b2a',
      },
      colors: {
        primary_100: '#9460fa',
      },
    },
  },
  plugins: [],
};
