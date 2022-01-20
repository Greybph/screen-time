module.exports = {
  mode: 'jit',
  purge: ["./app/**/*.{jsx,tsx}"],
  theme: {
    screens: {
      'xsm': '200px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
