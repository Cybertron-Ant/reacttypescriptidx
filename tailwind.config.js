/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define the content sources that Tailwind should scan for class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JS/TS files in src
    "./public/index.html",         // Include the main HTML file
  ],
  // Extend the default Tailwind theme
  theme: {
    extend: {
      // Custom colors can be added here
      colors: {
        // Example custom color
        'primary': {
          100: '#E6F6FF',
          200: '#BAE3FF',
          300: '#7CC4FA',
          400: '#47A3F3',
          500: '#2186EB',
          600: '#0967D2',
          700: '#0552B5',
          800: '#03449E',
          900: '#01337D',
        },
      },
      // Custom spacing, fonts, etc. can be added here
    },
  },
  // Add custom plugins here if needed
  plugins: [],
}
