/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textPulse: {
          '0%, 100%': { color: '#2e1065' }, // Original color
          '50%': { color: '#60a5fa' }, // Pulsing color
        },
      },
      animation: {
        textPulse: 'textPulse 1.5s infinite',
      },
      screens: {
        'xs': '403px', // Custom breakpoint
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
