import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import store from "./store/index.js";
const app = createApp(App)
app.use(router);
app.use(store)
app.mount('#app')
