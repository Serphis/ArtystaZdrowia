import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        gowum: ['Tenor Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config