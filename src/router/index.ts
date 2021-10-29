import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/my/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
