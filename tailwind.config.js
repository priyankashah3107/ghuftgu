/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'MainBg': '#011A74',
        'MainBgg': '#05013A',
        'white': '#FFFFFF',
         'gray': '#818C99',
      },
    },
  },
  plugins: [],
}

