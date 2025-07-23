import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
      },
      colors: {
        primary: {
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
    },
  },
  plugins: [],
}
export default config