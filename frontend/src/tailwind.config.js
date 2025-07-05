// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // required for Vite + React
  ],
  theme: {
    extend: {
      animation: {
        fadeInOut: 'fadeInOut 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '50%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
