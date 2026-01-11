module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#003366',
        'brand-charcoal': '#36454F',
        'brand-gold': '#FFC900',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
