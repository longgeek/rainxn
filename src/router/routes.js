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
        path: '/occ-builder-detail',
        name: 'occ-builder-detail',
        component: () => import('@/views/occ-builder-detail')
    },
    {
        path: '*',
        name: 'error',
        component: () => import('@/views/error')
    },
]

export default routes
