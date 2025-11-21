import { createApp } from 'vue'
import App from './App.vue'
import Markdown from 'vue3-markdown-it';

const app = createApp(App)
app.component('vue-markdown', Markdown);
app.mount('#app')