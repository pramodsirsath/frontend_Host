/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use the 'class' strategy for dark mode
  theme: {
    extend: {
      // Your custom theme here
    },
  },
  plugins: [],
};

