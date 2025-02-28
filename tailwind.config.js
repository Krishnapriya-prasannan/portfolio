module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // This includes all the files that will use Tailwind CSS
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // Add this line to enable class-based dark mode
  plugins: [],
}
