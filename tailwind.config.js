/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',     // 👈 This is the container width
        '2xl': '1320px',
        '3xl': '1500px',
        // 👇 Add max-width variants here
        'max-sm': { max: '575px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '991px' },
        'max-xl': { max: '1199px' },
        'max-2xl': { max: '1399px' },
        'max-3xl': { max: '1599px' },
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#063e79',
        secondary: '#101010',
        darkBlack: '#000000',
        darkGray: '#595959',
      },
    },
  },
  plugins: [],
};