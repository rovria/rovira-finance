import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import Services from '../pages/ServicesPage.vue';
import About from '../pages/AboutPage.vue';
import Contact from '../pages/ContactPage.vue';
import Error from '../pages/404.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/404',
      name: 'Error',
      component: Error,
    },
  ],
});

export default router;
