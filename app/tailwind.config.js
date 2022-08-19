/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        md: '48em',
        lg: '75em',
        xl: '90em',
      },
    },
  },
  plugins: [],
};
