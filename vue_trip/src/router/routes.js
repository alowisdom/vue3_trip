
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
    },
    {
        path:'/search',
        component:() => import('../views/search/index.vue'),
        meta:{
            hideTabBar:true
        }
    },
    {
        path:'/detail/:id',
        component:() => import('../views/detail/index.vue')
    }
]

export default routes