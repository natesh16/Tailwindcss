/** @type {import('lightbgtailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    colors:{
      'white':'#fff',
      'black':'#000',      
      'dark':'#0B2447',
      'linedark':'#19376D',
      'minligth':'#576CBC',
      'light':'#A5D7E8',
      'red':'#C70039',
      'orange':'#F94C10',
      'lightblue':'6528F7',
      'lightbg':'#C8FFE0',
      'pink':'#FF0060',
      'blue':'#0079FF',
      'green':'#00DFA2',
      'yellow':'#F6FA70',
      'purple':'#DD58D6'
    },
      fontFamily:{
      'popins':['Poppins', 'sans-serif'],
      'tilt':['Tilt Prism', 'cursive'],
      'tinos':[ 'Tinos', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

