/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        micro: {
          roxo: 'rgb(131, 23, 207)',
          grayDark: 'rgb(16, 16, 16)',
          roxoHover: 'rgb(143 21 136)',
          red: 'rgb(167, 19, 49, 1)',
          lightRed: 'rgb(239 122 122)',
          texto: 'rgb(181, 177, 177)',
        },
      },
    },
  },
  plugins: [],
};
