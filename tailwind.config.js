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
      colors: {
        'base-navy': '#0a192f',
        'accent-yellow': '#fff200',
        'text-blue': '#6F7CB2',
        'text-1-gray': '#CCD6F6',
        'text-soft-yellow': '#ECF671',
      },
    },
  },
  plugins: [],
}