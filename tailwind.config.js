module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightTheme: {
          var_color_text:'#e2e8f0',
          var_background:'#374151',
          // Define los colores del tema claro
        },
        darkTheme: {
          var_color_text:'#374151',
          var_background:'#e2e8f0',
          // Define los colores del tema oscuro
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
