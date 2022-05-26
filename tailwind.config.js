module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    colors: {
      'light': '#F7F3FF',
      'dark': '#2A272F',
      'primary': '#5E17EB',
      'accent': '#91F031',
      'secondary': '#D223EB',
    }
  },
  plugins: [],
}
