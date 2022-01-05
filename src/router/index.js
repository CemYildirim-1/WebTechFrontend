import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
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
    name: 'About',
    component: About
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
