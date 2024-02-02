import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css' // importera bootstrap css stilar

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js' // Importera Bootstrap JS filer

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)

app.mount('#app')
