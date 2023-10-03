import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import home from '../shared_interface/home.vue';
import login from '../shared_interface/login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: home },
    {
      path: '/login',
      name: 'login',
      component: login }
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
