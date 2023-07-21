module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*. {js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightTheme: {          
          // Define los colores del tema claro
        },
        darkTheme: {
          // Define los colores del tema oscuro
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
