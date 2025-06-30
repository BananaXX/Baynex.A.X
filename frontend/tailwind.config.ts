import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff4500',
        background: '#0d0d0d'
      }
    }
  },
  plugins: []
};

export default config;
