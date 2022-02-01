module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ["./app/**/*.{jsx,tsx}"],
  // content: ["./app/**/*.{jsx,tsx}"],
  // safelist: [
  //   'alma',
  //   'arthur',
  //   'catinthehat',
  //   'catinthehatDark'

  // ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ["'Montserrat', sans-serif"]
      },
      // colors: {
      //   'alma': '#f57f20',
      //   'arthur': '#7cd267',
      //   'catinthehat': '#4e9dc5',
      //   'catinthehatDark': '#fed02c',
      //   'clifford': '#81aa36',
      //   'curiousgeorge': '#e9193e',
      //   'curiousgeorgeDark': '#fff100',
      //   'cyberchase': '#85248f',
      //   'cyberchaseDark': '#8077b6',
      //   'danieltiger': '#c5010c',
      //   'danieltigerDark': '#fed53f',
      //   'dinosaurtrain': '#0090cc',
      //   'donkeyhodie': '#0368d9',
      //   'donkeyhodieDark': '#efbb00',
      //   'elinor': '#a571bc',
      //   'elinorDark': '#b1c57b',
      //   'heroelementary': '#f38b00',
      //   'heroelementaryDark': '#ea9a00',
      //   'letsgoluna': '#c604d9',
      //   'letsgolunaDark': '#8dc4eb',
      //   'marthaspeaks': '#93cf55',
      //   'mollyofdenali': '#dd6384',
      //   'naturecat': '#eb2923',
      //   'oddsquad': '#6f3186',
      //   'oddsquadDark': '#fccc07',
      //   'peg+cat': '#2a267b',
      //   'peg+catDark': '#2686a9',
      //   'pinkalicious': '#d54094',
      //   'pinkaliciousDark': '#347b6a',
      //   'readyjetgo': '#2c0266',
      //   'readyjetgoDark': '#b6d8fe',
      //   'sesamestreet': '#00ab67',
      //   'sid': '#00bdf5',
      //   'splash': '#207794',
      //   'splashDark': '#e6d01a',
      //   'superwhy': '#0019a9',
      //   'superwhyDark': '#b4fc7a',
      //   'wildkratts': '#2bba3c',
      //   'wordgirl': '#60b1cf',
      //   'wordgirlDark': '#8fc9e1',
      //   'xavier': '#3264a9',
      //   'xavierDark': '#cf4b4f',
      //   }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
