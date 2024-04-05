import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/_global.scss'
import 'bootstrap'


gsap.registerPlugin(CSSPlugin);

const app = createApp(App);

app.use(router);

app.mount('#app');
