import Vue from 'vue';
// 1. 引入VueRouter
import VueRouter from 'vue-router'

// 2. 使用（安装）vue-router
Vue.use(VueRouter)

import Home from '../pages/Home.vue';
import List from '../pages/List.vue';
import Type from '../pages/Type.vue';
import Cart from '../pages/Cart.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Logout from '../pages/logout.vue';
import Reg from '../pages/Reg.vue';
import Gooddetail from '../pages/gooddetali.vue';
import NotFound from '../pages/NotFound.vue';

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
        {
            name: 'type',
            path: '/type',
            component: Type
        },
        {
            name: 'detail',
            path: '/detail',
            component: Gooddetail,
        },
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'logout',
            path: '/logout',
            component: Logout,
            meta: { requiresAuth: true }
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: { requiresAuth: true }
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart,
            meta: { requiresAuth: true }
        },
        {
            name: '404',
            path: '*',
            component: NotFound
        }
    ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {

        let $store = router.app.$store
        let Authorization = $store.state.common.user.Authorization;
        if (Authorization) {

            next();

            router.app.$axios.get('http://localhost:8010/verify', {
                headers: Authorization
            }).then(({ data }) => {
                if (data.status === 0) {
                    $store.commit('logout');
                    next({
                        path: '/login',
                        query: {
                            redirectUrl: to.fullPath
                        }
                    })
                }
            })
        } else {

            next({
                path: '/login',
                query: {
                    redirectUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})

export default router;