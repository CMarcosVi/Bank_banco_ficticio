import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cartoes from '../pages/Cartoes.vue'
import CompenteAcoes from '../pages/CompenteAcoes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cartoes',
      name: 'cartoes',
      component: Cartoes
    },
    {
      path: '/compenteAcoes',
      name: 'compenteAcoes',
      component: CompenteAcoes
    }, 
    {
      path: '/redirect',
      redirect: 'http://localhost:3000',
    },
  ]
})

export default router
