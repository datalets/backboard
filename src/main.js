import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import Markdown from 'vue3-markdown-it'
import Countdown from 'vue3-flip-countdown'

import router from './router'

// Import locale messages
import en from './locales/en.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import it from './locales/it.json'
import uk from './locales/uk.json'
import hi from './locales/hi.json'

// Create i18n instance
const i18n = createI18n({
  legacy: false, // for Composition API
  locale: 'en', // set default locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    fr,
    de,
    it,
    uk,
    hi
  }
})

const app = createApp(App)

app.use(router)
app.use(Markdown)
app.use(Countdown)
app.use(i18n)

app.mount('#app')
