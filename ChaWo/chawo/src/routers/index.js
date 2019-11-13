import Vue from 'vue';
// 1. 引入VueRouter
import VueRouter from 'vue-router'

// 2. 使用（安装）vue-router
Vue.use(VueRouter)

import Home from '../pages/Home.vue';
import List from '../pages/List.vue';
import Cart from '../pages/Cart.vue';
import Mine from '../pages/Mine.vue';
import NotFound from '../pages/NotFound.vue'
// 3. 实例化VueRouter并配置参数
const router = new VueRouter({
    // mode:'history',//hash(默认)，history
    // 配置参数
    routes: [{
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'list',
            path: '/list',
            component: List
        },
        // {
        //     name: 'goods',
        //     path: '/goods/:id',
        //     component: Goods,
        // },
        {
            path: '/',
            redirect: '/home',
        },
        // {
        //     name: 'reg',
        //     path: '/reg',
        //     component: Reg
        // },
        // {
        //     name: 'login',
        //     path: '/login',
        //     component: Login
        // },
        {
            name: 'mine',
            path: '/mine',
            component: Mine,
            // meta: { requiresAuth: true }
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart,
            // meta: { requiresAuth: true }
        },
        {
            name: '404',
            path: '*',
            component: NotFound
        }
    ]
});
// 4.导出router实例，并把router实例注入到vue实例中
export default router;