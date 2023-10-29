import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store';

const routes = [
    {
        path: '/',
        name: 'landing',
        component: () => import('./components/LandingComponent.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./components/HomeComponent.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/about-me',
        name: 'aboutMe',
        component: () => import('./components/AboutMeComponent.vue'),
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const { logged_in } = store.state.user;
    if (to.matched.some(({ meta }) => meta.requiresAuth)) {
        logged_in ? next() : next({ name: 'landing' });
    } else {
        next();
    }
});

store.watch(
    ({ user: { logged_in } }) => logged_in,
    (newVal, oldVal) => {
        if (newVal && !oldVal) {
            router.push('/home');
        } else if (!newVal && oldVal) {
            router.push('/');
        }
    }
);

export default router;