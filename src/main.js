import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const piniaInstance = createPinia()
// for testing purpose
window._piniaInstance = piniaInstance

createApp(App)
    .use(piniaInstance)
    .mount('#app')
