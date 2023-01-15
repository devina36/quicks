/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2f80ed',
        'primary-gray': '#4f4f4f',
        'primary-light': '#828282',
        'primary-very-light': '#e0e0e0',
        'ind-org': '#F8B76B',
        'ind-blue': '#8785FF',
        'ind-red': '#eb5757',
        'ind-yellow': '#f2c94c',
        'chat-org': '#fceed3',
        'chat-accent-org': '#e5a443',
        'chat-prl': '#eedcff',
        'chat-accent-prl': '#9b51e0',
        'chat-green': '#d2f2ea',
        'chat-accent-green': '#43b78d',
        'stcr-gray': '#e9f3ff',
        'stcr-org': '#fdcfa4',
        'stcr-light-org': 'f9e9c3',
        'stcr-cyan': '#afebdb',
        'stcr-green': '#cbf1c2',
        'stcr-prl': '#cfcef9',
        'stcr-red': '#f9e0fd',
        myWhite: '#f2f2f2',
      },
      fontFamily: {
        lato: ['Lato, sans-serif'],
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
};
