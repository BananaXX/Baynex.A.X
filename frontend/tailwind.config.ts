// frontend/tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff3c00',
        secondary: '#ff6f00',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
