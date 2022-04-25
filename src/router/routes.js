import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/index')
    },
    {
        path: '*',
        name: 'error',
        component: () => import('@/views/error')
    },
]

export default routes
