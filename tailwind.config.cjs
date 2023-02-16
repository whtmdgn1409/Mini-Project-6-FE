/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*.tsx',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      '--black-10': '#e6e6e6',
      '--black-20': '#ccc',
      '--black-30': '#b3b3b3',
      '--black-40': '#999',
      '--black-50': '#808080',
      '--black-60': '#666',
      '--black-70': '#4c4c4c',
      '--black-80': '#333',
      '--black-90': '#191919',
      '--black-100': '#000',
      mw: '#2ac1bc',
      'mw-light': '#6fddd9',
      'mw-dark': '#0d9994',
      'mw-dGray': '#a1a1a1',
      'mw-gray': '#c8c7cc',
      'mw-lGray': '#f9f8f8',
    },
    fontFamily: {
      main: ['Pretendard Variable', 'Apple SD Gothic Neo', 'sans-serif'],
    },
    screens: {
      max: '480px',
    },
    boxShadow: {
      default: '0px 8px 20px rgba(0, 0, 0, 0.1)',
    },
    borderRadius: {
      default: '20px',
    },
  },
};
