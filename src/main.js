import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css' // importera bootstrap css stilar

import 'bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'

import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
