import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home/HomePage.vue'
import LoginPage from '../pages/Login/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/HomePage',
    name: 'home',
    component: HomePage
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
