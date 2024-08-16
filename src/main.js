// import './assets/main.css'

import App from './App.vue'
import router from './routerApp'
import { createApp } from 'vue'

createApp(App)
    .use(router)
    .mount('#app')