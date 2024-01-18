import LoginLayout from 'layouts/LoginLayout.vue'
import AdminLayout from 'layouts/AdminLayout.vue'
import Login from 'pages/Login.vue'
import Home from 'pages/admin/Home.vue'
const routes = [
  {
    path: '/',
    component: LoginLayout,
    children: [{ path: '', component: Login, name: 'Login' }]
  },
  {
    path: '/admin/home',
    component: AdminLayout,
    children: [{ path: '', component: Home, name: 'AdminHome', meta: { requiresAuth: true } }]
  }
]

export default routes
