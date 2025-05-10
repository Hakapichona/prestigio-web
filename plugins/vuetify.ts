import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import * as labs from "vuetify/labs/components";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { es } from "vuetify/locale";

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: "#00c8ff",
      error: "#B00020",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  };

  const vuetify = createVuetify({
    ssr: true,
    components: { ...components, ...labs },
    directives,
    locale: {
      locale: "es",
      fallback: "es",
      messages: { es },
    },
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);

  return {
    provide: vuetify,
  };
});
