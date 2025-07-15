const colors = {
  white: '#ffffff',
  black: '#000000',
  'grey-cool-25': '#f7f8f9',
  'grey-cool-50': '#eff0f3',
  'grey-cool-100': '#dfe1e6',
  'grey-cool-200': '#cacede',
  'grey-cool-300': '#b2b8c4',
  'grey-cool-400': '#9aa2b2',
  'grey-cool-500': '#848da1',
  'grey-cool-600': '#707a91',
  'grey-cool-700': '#606a7d',
  'grey-cool-800': '#525a6a',
  'grey-cool-900': '#454b5a',
  'grey-cool-950': '#323741',
  'red-600': '#d92d20',
  'blue-500': '#2e90fa',
  'green-500': '#12b76a',
  // Add more as needed from data.json
};

const borderRadius = {
  none: '0px',
  sm: '2px',
  md: '4px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '999px',
  DEFAULT: '6px',
};

const fontSize = {
  xs: ['10px', '14px'],
  sm: ['12px', '16px'],
  base: ['14px', '20px'],
  md: ['16px', '24px'],
  lg: ['20px', '28px'],
  xl: ['24px', '32px'],
  '2xl': ['32px', '40px'],
  '3xl': ['36px', '44px'],
  display: ['40px', '48px'],
};

const spacing = {
  px: '1px',
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  13: '56px',
  14: '64px',
  15: '72px',
  16: '80px',
  17: '96px',
};

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
      borderRadius,
      fontSize,
      spacing,
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // Add more as needed
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
