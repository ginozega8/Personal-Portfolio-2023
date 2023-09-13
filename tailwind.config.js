/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(-15%)'},
          '50%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        'base-navy': '#0a192f',
        'shade-navy': '#0e2444',
        'accent-yellow': '#fff200',
        'text-blue': '#6F7CB2',
        'text-1-gray': '#CCD6F6',
        'text-soft-yellow': '#ECF671',
      },
    },
  },
  plugins: [],
}