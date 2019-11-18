import Vue from 'vue';
// 1. 引入VueRouter
import VueRouter from 'vue-router'

// 2. 使用（安装）vue-router
Vue.use(VueRouter)

// 3. 实例化VueRouter并配置参数
const router = new VueRouter({
    // mode:'history',//hash(默认)，history
    // 配置参数
    routes: [{
            name: 'home',
            path: '/home',
            // component: Home
            component: r => require.ensure([], () => r(require('@/pages/Home')), 'demo')
        },
        {
            name: 'list',
            path: '/list',
            // component: List
            component: r => require.ensure([], () => r(require('@/pages/List')), 'demo')
        },
        {
            name: 'type',
            path: '/type',
            // component: Type
            component: r => require.ensure([], () => r(require('@/pages/Type')), 'demo')
        },
        {
            name: 'detail',
            path: '/detail',
            // component: Gooddetail,
            component: r => require.ensure([], () => r(require('@/pages/gooddetali')), 'demo')
        },
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: 'reg',
            path: '/reg',
            // component: Reg
            component: r => require.ensure([], () => r(require('@/pages/Reg')), 'demo')
        },
        {
            name: 'login',
            path: '/login',
            // component: Login
            component: r => require.ensure([], () => r(require('@/pages/Login')), 'demo')
        },
        {
            name: 'logout',
            path: '/logout',
            // component: Logout,
            component: r => require.ensure([], () => r(require('@/pages/logout')), 'demo'),
            meta: { requiresAuth: true }
        },
        {
            name: 'mine',
            path: '/mine',
            // component: Mine,
            component: r => require.ensure([], () => r(require('@/pages/Mine')), 'demo'),
            meta: { requiresAuth: true }
        },
        {
            name: 'cart',
            path: '/cart',
            // component: Cart,
            component: r => require.ensure([], () => r(require('@/pages/Cart')), 'demo'),
            meta: { requiresAuth: true }
        },
        {
            name: '404',
            path: '*',
            component: r => require.ensure([], () => r(require('@/pages/NotFound')), 'demo'),
            // component: NotFound
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