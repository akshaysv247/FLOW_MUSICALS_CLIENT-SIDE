/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "URL('./src/Assets/backgrounds/signops.jpg')",
        hero1: "URL('./src/Assets/backgrounds/mainBg.jpg')",
        hero2: "URL('./src/Assets/backgrounds/guitar4.jpg')",
        hero3: "URL('./src/Assets/backgrounds/option cover.jpg')",
        hero4: "URL('./src/Assets/backgrounds/artistsignup.jpg')",
      },
    },
  },
  plugins: [],
};
