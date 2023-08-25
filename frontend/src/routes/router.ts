//Import tools
import { createRouter, createWebHistory } from 'vue-router';

//Import components
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';

//Create routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsView
    }
];

//Create router
const router = createRouter({
    history: createWebHistory(),
    routes
});

//Export router
export default router;
