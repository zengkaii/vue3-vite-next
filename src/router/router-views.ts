import { RouteRecordRaw } from 'vue-router'
const routerChildren = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/trans',
    name: 'trans',
    component: () => import('@/views/trans/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },

] as RouteRecordRaw[]

export default routerChildren
