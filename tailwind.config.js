module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ["./app/**/*.{jsx,tsx}"],
  content: ["./app/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mont': ["'Montserrat', sans-serif"],
        'open': ["'Open Sans', sans-serif"]
      },
    },
  }
}
