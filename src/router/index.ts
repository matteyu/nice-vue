import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/intro'
  },
  {
    path: '/intro',
    name: 'intro',
    component: Intro
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
