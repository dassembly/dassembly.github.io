/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "highlight-white/5": "inset 0 1px 0 0 #ffffff0d",
      },
      animation: {
        blink: "blink 0.5s steps(2, start) infinite",
      },
      keyframes: {
        blink: {
          to: {
            visibility: "hidden",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
}
