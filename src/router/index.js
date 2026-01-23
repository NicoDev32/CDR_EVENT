import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ServicesPage from '@/pages/ServicesPage.vue';
import RealisationsPage from '@/pages/RealisationsPage.vue';
import AboutPage from '@/pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/services', name: 'services', component: ServicesPage },
    { path: '/realisations', name: 'realisations', component: RealisationsPage },
    { path: '/a-propos', name: 'about', component: AboutPage },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;