
import router from '@/router/index'
import localStorage from '@/utils/localStorage'

router.beforeEach((to, from, next) => {
  let token = localStorage.get('vite-token')
  if (token) {
    next()
  } else if (to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})