import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Resources from '/src/views/Resources.vue'
import Releases from '/src/views/Releases.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: Home,
    },
    {
        path: '/resources',
        name: 'Resources',
        component: Resources,
    },
    {
        path: '/releases',
        name: 'Releases',
        component: Releases,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;