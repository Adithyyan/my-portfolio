/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Optional: you can add variants here if needed
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
};
