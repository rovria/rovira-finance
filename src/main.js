import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';

// Create the Vue application
const app = createApp(App);

// Create and configure the meta manager
const head = createHead();

// Use the meta manager
app.use(head);

// Use the router
app.use(router);

// Mount the application
app.mount('#app');
