import { createWebHistory, RouterOptions } from 'vue-router';

import Home from '@/vue-view/Home.vue';

export default {
    history: createWebHistory(process.env.ROUTE_PREFIX),
    routes: [{ name: 'Home', path: '/', component: Home }],
} as RouterOptions;
