// frontend/tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4500',
        dark: '#000000',
        light: '#f5f5f5',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};

export default config;
