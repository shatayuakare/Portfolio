import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        /^bg-(light|dark):/, // This will keep all light and dark backgrounds
        /^text-(light|dark):/, // This will keep all light and dark text colors
        "bg-primary",
        "text-primary",
      ],
    },
  },
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        light: {
          background: "#1D222B",
          lightBackground: "#1A2B36",
          text: "#f5f5f5",
          lightText: "#a6a6a6",
          border: "#a6a6a6",
          lightBorder: "",
        },
        dark: {
          background: "#1D222B",
          lightBackground: "#1A2B36",
          text: "#f5f5f5",
          lightText: "#a6a6a6",
          border: "#a6a6a6",
          lightBorder: "",
        },
        primary: "#20a4f3",
        primaryDark: "#1A2B36",
        secondary: "",
        third: "",
      },
    },
  },
  plugins: [daisyui],
};


// {
//   background: "#36454F",
//     lightBackground: "#222222",
//       text: "#222222",
//         lightText: "#a6a6a6",
//           border: "#a6a6a6",
//             lightBorder: "",
          
//         }