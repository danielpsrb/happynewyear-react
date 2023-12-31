/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      color: {
        primary: '#eeeeee',
        accent: '#ffc639',
        secondary: '#393e46',
        dark: '#222831',
        aqua: '	#00FFFF',
        blue: '#4682B4',
        red: '#FF0000',
        tomato: '#FF6347',
        purple: '#663399',
        orange: '#FFA500',
        black: '#111',
        medium: '#0000CD',
        lightblue: '#4169E1',
        lavender: '#E6E6FA',
        lime: '#00FF00',
        darkgray: '#A9A9A9',
        gainsboro: '#DCDCDC'
      }
    }
  },
  plugins: [],
}