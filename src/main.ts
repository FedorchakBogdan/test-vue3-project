import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
axios.defaults.headers.common = { Authorization: 'bearer 7968e1496be8cb4a0863661448fc012a' }

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
