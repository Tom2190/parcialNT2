import App from './App.vue'
import { createApp } from 'vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { router } from './router'
import './form'
import './httpClient'

createApp(App).use(router).mount('#app')
