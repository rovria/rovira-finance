import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Services from '@/views/ServicesView.vue'
import About from '@/views/AboutView.vue'
import Contact from '@/views/ContactView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Services',
            name: 'Services',
            component: Services
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        },
    ]
});

export default router;