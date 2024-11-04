import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'
import {createPinia} from "pinia";
const app = createApp(App)
app.use(router);
app.use(createPinia())
app.mount('#app')
