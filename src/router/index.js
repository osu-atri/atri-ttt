import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeaderView from '../views/HeaderView.vue'

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
      components: { default: HeaderView, main: () => import('../views/TranslateView.vue') },
    },
    {
      path: '/timing',
      name: 'timing',
      components: { default: HeaderView, main: () => import('../views/TimingView.vue') },
    },
    {
      path: '/effect',
      name: 'effect',
      components: { default: HeaderView, main: () => import('../views/EffectView.vue') },
    },
    {
      path: '/verify',
      name: 'verify',
      components: { default: HeaderView, main: () => import('../views/VerifyView.vue') },
    },
  ],
})

export default router
