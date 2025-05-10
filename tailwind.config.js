/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  prefix: "ps-",
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#00c8ff",
        "typography-light": "#98d9eb",
      },
    },
  },
  plugins: [],
};
