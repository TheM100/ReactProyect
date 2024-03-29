/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10p': '10%',
      },
      colors: {
        'custom-blue': 'rgb(59, 73, 223)',
      },
    },
    theme: {
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '900',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    }
  },
  plugins: [],
}
