/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
    },
    // fontFamily: {
    //   primary: "var(--font-jetbrainsMono)",
    // },
    extend: {
      fontFamily: {
        primary: "var(--font-jetbrainsMono)",
      },
    },
  },
  plugins: [],
}

