import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Remove the import for vue-recaptcha-v3

// Create the Vue application
const app = createApp(App);

// Remove the use of vue-recaptcha-v3
// app.use(VueRecaptcha, {
//   siteKey: '6LffQCMqAAAAAHAbberCqITumz16Ca46lUx3XPlG', // Replace with your actual Site Key
// });

// Use the router
app.use(router);

// Mount the application
app.mount('#app');
