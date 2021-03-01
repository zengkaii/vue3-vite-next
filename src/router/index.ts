import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import RouterViews from './router-views'
// import LayoutContainer from '../components/layout/layout-container.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('/@/components/layout/index.vue'),
    // component: LayoutContainer,
    children: RouterViews
  }
]

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes: routes
})
export default router
