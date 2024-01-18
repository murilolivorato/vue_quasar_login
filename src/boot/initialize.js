import axios from 'axios'
import { useCustomerLoginStore } from 'stores/customerLogin'
export default async ({ store, router }) => {
  const setAuthorization = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  // verifyAuth(store, router)
  router.beforeEach((to, from, next) => {
    // USER CUSTOMER
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const currentCustomerUser = useCustomerLoginStore(store).currentUser
    if (currentCustomerUser) {
      setAuthorization(currentCustomerUser.token)
    }

    if (requiresAuth && !currentCustomerUser) {
      next('/')
    } else if (to.path === '/' && requiresAuth) {
      next()
    } else {
      next()
    }
  })
  axios.interceptors.response.use(null, (error) => {
    //  || error.response.status === 401
    if (error.response.status === 403) {
      router.push('/')
    }

    return Promise.reject(error)
  })
}
