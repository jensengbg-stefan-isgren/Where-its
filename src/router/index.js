import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Staff from '../views/Staff.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
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