import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Staff from '../views/Staff.vue'

import Events from '../views/Events.vue'

import Buy from '../views/Buy.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy,
    props: true
  },
  {
      path: '/staff',
      name: 'Staff',
      component: Staff
  },
  {
      path: '/admin',
      name: 'Admin',
      component: Admin
  }
]

const router = new VueRouter({
    routes
})

export default router