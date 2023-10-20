import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import home from '../shared_interface/home.vue';
import login from '../shared_interface/login.vue';
import register from '../shared_interface/register.vue'
import adminhome from "../admin_page/page/adminhome.vue"
import adminnew from "../admin_page/page/new.vue"
import profile from '../shared_interface/account/profile.vue'
import tourism from '../admin_page/page/tourism.vue'
import changeBirthday from '../shared_interface/account/changeBirthday.vue'
import changeEmail from '../shared_interface/account/changeEmail.vue'
import changeGender from '../shared_interface/account/changeGender.vue'
import changeName from '../shared_interface/account/changeName.vue'
import weather from '../admin_page/page/weather.vue'
import cms from '../admin_page/page/cms.vue'


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
        component: profile,
      },
      {
        path: 'tourism',
        component: tourism
      },
      {
        path: 'weather',
        component: weather
      },
      {
        path: 'cms',
        component: cms
      },
      {
        path: 'changeBirthday',
        component: changeBirthday
      },
      {
        path: 'changeEmail',
        component: changeEmail
      },
      {
        path: 'changeGender',
        component: changeGender
      },
      {
        path: 'changeName',
        component: changeName
      },
      {
        path: 'PublicTransport',
        component:  () => import('../admin_page/page/publictransport.vue')
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
