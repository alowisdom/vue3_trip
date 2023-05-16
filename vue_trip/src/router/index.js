
import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/explore'
        },
        {
            path:'/explore',
            component:() => import('../views/explore/index.vue')
        },
        {
            path:'/favor',
            component:() => import('../views/favor/index.vue')
        },
        {
            path:'/order',
            component:() => import('../views/order/index.vue')
        },
        {
            path:'/profile',
            component:() => import('../views/profile/index.vue')
        }
    ]
})

export default router