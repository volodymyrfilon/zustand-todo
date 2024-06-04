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
  },
  plugins: [],
};
export default config;
