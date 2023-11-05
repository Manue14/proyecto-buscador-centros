/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./assets/react/controllers/*.jsx"],
  theme: {
    extend: {},
    colors: {
      'xuntaNaranja': '#fcac50',
      'xuntaGris': '#edeff5',
      'xuntaAzulOscuro': '#18619d',
      'xuntaAzulClaro': '#d0dcec',
      'rojoAlerta': '#fa8072'
    }
  },
  plugins: [],
}