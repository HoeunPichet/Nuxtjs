/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "500": "#0ea5e9",
        },
      },
      fontFamily: {
        "oswald": ["Oswald", "sans-serif"],
      },
      maxWidth: {
        "container": "1280px",
      }
    },
  },
  plugins: [],
}

