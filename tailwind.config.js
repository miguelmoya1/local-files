module.exports = {
  prefix: '',
  mode: 'jist',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '25rem',
        110: '27rem',
        120: '30rem',
        130: '32rem',
        140: '35rem',
        150: '37rem',
        160: '40rem',
        170: '42rem',
        180: '45rem',
      },
      width: {
        100: '25rem',
        110: '27rem',
        120: '30rem',
        130: '32rem',
        140: '35rem',
        150: '37rem',
        160: '40rem',
        170: '42rem',
        180: '45rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};