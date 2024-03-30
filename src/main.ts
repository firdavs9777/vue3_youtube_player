import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import YouTube from 'vue3-youtube'

createApp(App).use(router).component('Youtube', YouTube).mount('#app')
