module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      xl: {
        max: '1200px',
      },
      clg: {
        max: '1125px',
      },
      lg: {
        max: '1024px',
      },
      md: {
        max: '768px',
      },
      sm: {
        max: '576px',
      },
      xs: {
        max: '480px',
      },
      Twoxs: {
        max: '400px',
      },
    },
    colors: {
      green: '#31D9BD',
      royalGreen: '#039855',
      dark: '#002C50',
      blue: '#3538CD',
      'blue-800': '#2D31A6',
      royalblue: '#4f46e5',
      lightblue: '#536DFE',
      white: '#FFFFFF',
      orange: '#FFBA1F',
      red: '#F03F2B',
      bg: '#F6FDFF',
      transparent: 'transparent',
      gray: '#667085',
      lightgray: '#D0D5DD',
      darkgray: '#475467',
      'gray-300': '#d0d5dd',
      'gray-50': '#f9fafb',
      'gray-500': '#667085',
      'gray-700': '#344054',
      'gray-900': '#101828',
      'borderGray': '#E4E7EC',
      'indigo-50': '#eef4ff',
      'indigo-700': '#3538cd',
      'success-50': '#ecfdf3',
      'success-700': '#027a48',
      'error-50': '#fef3f2',
      'error-100': '#fee4e2',
      'error-600': '#d92d20',
      'error-700': '#b42318',
      'primary-700': '#3538cd',
    },
    extend: {
      boxShadow: {
        xl: '0px 4px 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}

