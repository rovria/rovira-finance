import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Index.vue';
import Services from '../views/Services.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Error from '../views/404.vue';
import Styleguide from '../views/Styleguide.vue';

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
    {
      path: '/styleguide',
      name: 'styleguide',
      component: Styleguide,
    },
  ],
});

export default router;
