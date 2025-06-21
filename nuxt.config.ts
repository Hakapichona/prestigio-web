import "dayjs/locale/es";

export default defineNuxtConfig({
  ssr: false,
  modules: ['@pinia/nuxt'],


  app: {
    head: {
      title: "Prestigio Seguridad",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [],
      style: [],
      script: [],
      noscript: [{ innerHTML: "JavaScript is required" }],
    },
  },

  devServer: {
    host: "localhost",
    port: 8080,
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo", "dayjs-nuxt"],

  svgo: {
    autoImportPath: "./assets/svg/",
  },

  dayjs: {
    locales: ["es"],
    defaultLocale: "es",
  },

  typescript: {
    shim: false,
  },

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/tailwind.css",
  ],

  build: {
    transpile: ["vuetify"],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  runtimeConfig: {
    public: {
      environment: "DEVELOPMENT",
      apiBaseUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  compatibilityDate: "2024-11-01",
});
