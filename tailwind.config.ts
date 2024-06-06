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
        primary: '#2D9CDB',
        'primary-dark': '#1A73E8',
        secondary: '#27AE60',
        'secondary-dark': '#1C7C46',
        accent: '#F2994A',
        'accent-dark': '#C77936',
        neutralColor: '#F2F2F2',
        'neutralColor-dark': '#E0E0E0',
        textColor: '#333333',
        'textColor-dark': '#111111',
      },
    },
  },
  plugins: [],
};

export default config;
