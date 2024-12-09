/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Background: '#f4f4f4',
        Text: '#333333',
        Primary: '#3498db',
        Container: '#ffffff',
        Title: '#2c3e50'
      }
    },
  },
  plugins: [],
}