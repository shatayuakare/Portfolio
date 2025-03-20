import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {

  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [
        /^bg-(light|dark):/, // This will keep all light and dark backgrounds
        /^text-(light|dark):/, // This will keep all light and dark text colors
        'bg-primary',
        'text-primary',
        // Add other classes if necessary
      ],
    },
  },
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        light: {
      background: "#121212",
          lightBackground: "#282C3566",
          text: "#f5f5f5",
          lightText: "#a6a6a6",
          border: "#a6a6a6",
          lightBorder: "",
        },
        dark: {
          background: "#121212",
          lightBackground: "#282C3566",
          text: "#f5f5f5",
          lightText: "#a6a6a6",
          border: "#a6a6a6",
          lightBorder: "",
        },
        primary: "#ff2400",
        secondary: "",
        third: "",
      },

    },
  },
  plugins: [
    daisyui,
  ],
}

