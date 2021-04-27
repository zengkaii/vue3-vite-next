
import router from '../router/index'
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    next()
})