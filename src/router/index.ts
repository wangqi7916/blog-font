/*
 * @Author: wangqi
 * @Date: 2022-03-25 14:40:47
 * @LastEditors: wangqi
 * @LastEditTime: 2022-06-13 17:09:49
 * @FilePath: /code/blog-font/src/router/index.ts
 * @Description: 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/home', redirect: { name: 'Home' } },
  {
    path: '/',
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
