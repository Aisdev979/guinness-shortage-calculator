/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      color: {
        text: 'hsl(247, 75%, 5%)',
        background: 'hsl(240, 60%, 99%)',
        primary: 'hsl(243, 68%, 48%)',
        secondary: 'hsl(243, 100%, 93%)',
        accent: 'hsl(242, 100%, 62%)'
      }
    },
  },
  plugins: [],
}

