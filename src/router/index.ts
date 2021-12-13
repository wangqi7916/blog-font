import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/my',
    name: 'My',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/my/index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/detail/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
