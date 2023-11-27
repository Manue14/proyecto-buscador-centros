/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./assets/react/controllers/*.jsx"],
  theme: {
    extend: {
      colors: {
        ...colors,
        'xuntaNaranja': {
          50: '#fee7cd',
          100: '#fdcf9b',
          200: '#fdb768',
          300: '#fca036',
          400: '#fc972c',
          500: '#fb8004',
          600: '#c96603',
          700: '#b05903',
          800: '#974d02',
          900: '#643302',
          950: '#321a01'
        },
        'xuntaAzul': {
          50: '#d3e7f8',
          100: '#bddcf5',
          200: '#a7d0f1',
          300: '#91c4ee',
          400: '#65ace7',
          500: '#3895e0',
          600: '#1f7bc7',
          700: '#18609a',
          800: '#11446e',
          900: '#0e3758',
          950: '#0a2942'
        },
        'xuntaGris': {
          50: '#edeff5',
          100: '#cfd4e3',
          200: '#c0c6d8',
          300: '#b3b9cc',
          400: '#989fb3',
          500: '#808699',
          600: '#666c7f',
          700: '#4f5463',
          800: '#444855',
          900: '#393c47',
          950: '#2d3039'
        },
        'xuntaRojo': {
          50: '#fdd3ce',
          100: '#fcbcb5',
          200: '#fba69d',
          300: '#fb9489',
          400: '#fa8072',
          500: '#f84a3a',
          600: '#f73322',
          700: '#dd1a08',
          800: '#c51707',
          900: '#ac1406',
          950: '#7b0e04'
        }
      },
      animation: {
        'spin-once-down': 'spin-once-down 0.2s linear forwards',
        'spin-once-up': 'spin-once-up 0.2s linear forwards'
      },
      keyframes: {
        'spin-once-down': {
          '0%' : { transform: 'rotate(0deg)' },
          '100%' : { transform: 'rotate(-90deg)' },
        },
        'spin-once-up': {
          '0%' : { transform: 'rotate(-90deg)' },
          '100%' : { transform: 'rotate(0deg)' },
        }
      }
    },
    colors: {

    }
  },
  plugins: [],
}