/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '50': '50px',
        '10': '10px',
        '100': '100px',
      },
      height: {
        '50': '50px',
        '100': '100px',
        '10': '10px',
      },
      borderWidth: {
        '10': '10px',
        '0.1em': '.1em',
      },
      rotate: {
        '-30': '-30deg',
        '30': '30deg',
        '60': '60deg',
      },
      transformOrigin: {
        'left-bottom': 'left bottom',
        'right-bottom': 'right bottom',
      },
      inset: {
        '-30': '-30px',
        '0': '0',
        '10': '10px',
        '90': '90px',
      },
    },
  },
  variants: {},
  plugins: [],
}