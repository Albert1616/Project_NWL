/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,tsx,ts}",
    "./src/**/*.{js,jsx,tsx,ts}"
  ],
  theme: {
    extend: {
      colors:{
        background:'#09090a',
      },
      fontFamily:{
        regular: 'Inter_400Regular',
        extraBold: 'Inter_800ExtraBold',
        bold: 'Inter_700Bold',
        semiBold: 'Inter_600SemiBold'
      }
    },
  },
  plugins: [],
}
