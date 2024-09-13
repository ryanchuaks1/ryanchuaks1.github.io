import type { Config } from 'tailwindcss'
const animate = require('@jcamp/tailwindcss-plugin-animate')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'night': "url('/img/nightsky.jpg')",
      }
    },
    fontFamily: {
      pacifico: ['Pacifico', 'cursive'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    animate({
      
    }),
  ],
}
export default config
