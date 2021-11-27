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
    {
        path: '/project',
        name: 'project',
        component: () => import('@/views/project')
    },
    {
        path: '/information',
        name: 'information',
        component: () => import('@/views/information')
    },
    {
        path: '/partner',
        name: 'partner',
        component: () => import('@/views/partner')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/contact')
    },
]

export default routes
