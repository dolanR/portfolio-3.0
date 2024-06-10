import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'lenis-pink': 'var(--lenis-pink)',
      },
    },
  },
} satisfies Config;
