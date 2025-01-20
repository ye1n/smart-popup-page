/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          black: "#222222",
          white: "#ffffff",
          primary: "#0f54df",
          secondary: "#ff9015",
          gray: {
            1: "#444444",
            3: "#888888",
            4: "#bdbdbd",
          },
          form: {
            line: "#e0e0e0",
            bg: "#eeeeee",
            acc: "#fffaf0",
          },
          label: {
            line: "#c1d6e9",
            bg: "#f0f4f9",
          },
          bg: "#e4ecff",
          btn: {
            default: "#244072",
            inForm: "#d8d8d8",
            line: "#f2f2f2",
          },
        },
      },
    },
  },
  plugins: [],
};
