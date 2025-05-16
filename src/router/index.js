import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/translate',
      name: 'translate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/timing',
      name: 'timing',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/effect',
      name: 'effect',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('../views/MainView.vue'),
    },
  ],
})

export default router
