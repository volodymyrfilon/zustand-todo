import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        primary: '#606C38',
        'primary-dark': '#3F4B25',
        secondary: '#283618',
        'secondary-dark': '#1C2414',
        accent: '#FEFAE0',
        'accent-dark': '#E4DFC4',
        tertiary: '#DDA15E',
        'tertiary-dark': '#B07A40',
        quaternary: '#BC6C25',
        'quaternary-dark': '#945219',
      },
    },
  },
  plugins: [],
};

export default config;
