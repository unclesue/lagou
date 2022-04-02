import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(item => item.meta.requiresAuth)) {
    if (!store.state.user) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
