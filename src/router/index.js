import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NeueNotiz from '../views/NeueNotiz'
import Notizen from '../views/Notizen'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/neue Notiz anlegen',
    name: 'NeueNotiz',
    component: NeueNotiz
  },
  {
    path: '/notizen',
    name: 'Notizen',
    component: Notizen
  },
  {
    path: '/UserLogin',
    name: 'Login',
    component: Login
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
