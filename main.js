import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'

// Motion (para animaciones)
import { MotionPlugin } from '@vueuse/motion'

// Tailwind CSS
import './assets/tailwind.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#e53e3e',
          secondary: '#1a202c',
          accent: '#ff5252',
        },
      },
    },
  },
})

createApp(App)
  .use(vuetify)
  .use(MotionPlugin)
  .mount('#app')