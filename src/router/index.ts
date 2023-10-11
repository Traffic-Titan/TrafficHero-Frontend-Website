import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import home from '../shared_interface/home.vue';
import login from '../shared_interface/login.vue';
import register from '../shared_interface/register.vue'
import adminhome from "../admin_page/page/adminhome.vue"
import adminnew from "../admin_page/page/new.vue"
import profile from '../shared_interface/account/profile.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    children: [

    ]
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminhome,
    children: [
      {
        path: 'new',
        component: adminnew
      },
      {
        path: 'profile',
        component: profile
      },
    ]
  },

  {
    path: '/user',
    name: 'user',
    component: adminhome,
    children: [
      {
        path: 'profile',
        component: profile
      },
    ]
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
