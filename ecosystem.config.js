export const apps = [
  {
    name: "prestigio-web",
    script: ".output/server/index.mjs",
    env: {
      NITRO_PORT: process.env.NITRO_PORT,
      NUXT_PUBLIC_API_BASE_URL: process.env.NITRO_PUBLIC_API_URL,
    },
  },
];
