
const routes = [
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
    },
    {
        path:'/city',
        component:() => import('../views/city/index.vue')
    }
]

export default routes