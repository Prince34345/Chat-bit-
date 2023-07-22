/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Base blue color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: '#000000', // Base black color
        Tertiory: '#ffffff', // Base white color

        // Additional message colors
        success: '#48bb78',
        warning: '#f6ad55',
        error: '#e53e3e',
      },
      fontFamily: {
        // Custom fonts
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        heading: ['Roboto', 'Arial', 'sans-serif'],
      },
      transformOrigin: {
           'scale':'scale(1)',
           'scale-up':'scale(1.05)' 
      },      
      lineHeight: {
        // Custom line heights
        normal: '1.5',
        loose: '1.8',
        tight: '1.2',
      },
      margin: {
        // Custom margin sizes
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      container: {
        // Custom container width
        center: true,
        padding: '1rem',
      },
      screens: {
        // Custom screen breakpoints
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  variants: {},
  plugins: [],
  plugins: ['tailwindcss'],
  // tailwind.config.js
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false,
};
