/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pink: '#AD28EB',
        'light-pink': '#F8EEFF',
        'dark-purple': '#301534',
        'light-purple': '#8B6990',
      },
    },
  },
  plugins: [],
}
