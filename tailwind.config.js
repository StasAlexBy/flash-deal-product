/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./extensions/my-new-section/**/*.liquid",
    "./extensions/my-new-section/**/*.js",
    "./extensions/my-new-section/**/*.jsx"
  ],
  safelist: [
    'opacity-10',
    'opacity-20',
    'opacity-30',
    'opacity-40',
    'opacity-50',
    'opacity-60',
    'opacity-70',
    'opacity-80',
    'opacity-90'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

