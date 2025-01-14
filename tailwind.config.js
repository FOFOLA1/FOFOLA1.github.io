/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "bg1": "#0B022D",
        "bg2": "#200094",
        "bg3": "#000240",
        "bg4": "#280088",
        "purp": "#9f62f0"
      },
      fontFamily: {
        kode: ['Kode Mono', 'monospace'],
      }
    },
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}

