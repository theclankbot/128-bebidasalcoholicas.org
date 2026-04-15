import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base palette — warm dark editorial
        ink: {
          950: '#090807',
          900: '#111009',
          800: '#1a1814',
          700: '#252220',
          600: '#302d2b',
          500: '#403c3a',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#d6d3d1',
            '--tw-prose-headings': '#fafaf9',
            '--tw-prose-lead': '#a8a29e',
            '--tw-prose-links': '#f59e0b',
            '--tw-prose-bold': '#f5f5f4',
            '--tw-prose-counters': '#a8a29e',
            '--tw-prose-bullets': '#57534e',
            '--tw-prose-hr': '#292524',
            '--tw-prose-quotes': '#d6d3d1',
            '--tw-prose-quote-borders': '#f59e0b',
            '--tw-prose-captions': '#78716c',
            '--tw-prose-th-borders': '#292524',
            '--tw-prose-td-borders': '#1c1917',
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
