export const apps = [
  {
    name: "prestigio-web",
    script: "node",
    args: ".output/server/index.mjs",
    env: {
      PORT: 8080,
      NUXT_PUBLIC_API_URL: "https://tu-backend:3000/api",
    },
  },
];
