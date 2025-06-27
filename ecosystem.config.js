require("dotenv").config();

export const apps = [
  {
    name: "prestigio-web",
    script: "node",
    args: ".output/server/index.mjs",
    env: {
      NITRO_PORT: process.env.NITRO_PORT,
      NUXT_PUBLIC_API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
];
