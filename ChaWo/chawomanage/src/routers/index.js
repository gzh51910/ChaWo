import Vue from 'vue';
import VueRouter from 'vue-router';  //1. 导入

Vue.use(VueRouter);  //2. 使用

import Home from '../pages/Home.vue';
// import Login from '../pages/Login.vue';
import GoodsList from '../pages/GoodsList.vue';
import GoodClassify from '../pages/GoodClassify.vue';
import OrderList from '../pages/OrderList.vue';
import AdminList from '../pages/AdminList.vue';
import AddGood from '../pages/AddGood.vue';
import AddName from '../pages/AddName.vue';
import GoodAmend from '../pages/GoodAmend.vue'
import AddClassify from '../pages/AddClassify.vue'
import UpdateUser from '../pages/UpdateUser.vue'
import MainPage from '../pages/MainPage.vue'
import UserList from '../pages/UserList.vue'
// 3. 实例化VueRouter并配置参数
const router = new VueRouter({
    // mode:'history', //hash(默认)   history
    routes: [
         {
             name: 'mainpage',
             path: '/mainpage',
            component: MainPage,
         },
        {
            name: 'home',
            path: '/home',
            component: Home,
            // meta: {
            //     requiresAuth: true
            // }
        },
        // {
        //     name: 'login',
        //     path: '/login',
        //     component: Login,
        //         // meta: {
        //         //     requiresAuth: true
        //         // }
        // },
        {
            name: 'goodslist',
            path: '/goodslist',
            component: GoodsList,
                // meta: {
                //     requiresAuth: true
                // }
        },
        {
            name: 'goodsclassify',
            path: '/goodsclassify',
            component: GoodClassify,
                // meta: {
                //     requiresAuth: true
                // }
        },
        {
            name: 'orderlist',
            path: '/orderlist',
            component: OrderList,
                // meta: {
                //     requiresAuth: true
                // }
        },
        {
            name: 'adminlist',
            path: '/adminlist',
            component: AdminList,
                // meta: {
                //     requiresAuth: true
                // }
        },
        {
            name: 'addgood',
            path: '/addgood',
            component: AddGood,
                // meta: {
                //     requiresAuth: true
                // }
        },
        {
            name: 'addname',
            path: '/addname',
            component: AddName,
                // meta: {
                //     requiresAuth: true
                // }
        },
        {
            name: 'goodamend',
            path: '/goodamend',
            component: GoodAmend,
                // meta: {
                //     requiresAuth: true
                // }
        },
         {
             name: 'addclassify',
             path: '/addclassify',
             component: AddClassify,
                //  meta: {
                //      requiresAuth: true
                //  }
         },
        {
            name: 'updateuser',
            path: '/updateuser',
            component: UpdateUser,
                // meta: {
                //     requiresAuth: true
                // }
        },
         {
             name: 'userlist',
             path: '/userlist',
             component: UserList,
                //  meta: {
                //      requiresAuth: true
                //  }
         },
        {
            // 重定向
            path: '/',
            redirect: '/home',
            component:Home
        }
    ]
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth) {
//         // 获取token
//         // let Authorization = localStorage.getItem('Authorization');
//         let $store = router.app.$store
//         let Authorization = $store.state.common.user.Authorization;
//         if (Authorization) {
//             // 登录则放行
//             next();

//             // 发送校验请求
//             router.app.$axios.get('http://10.3.136.107:8010/verify', {
//                 headers: Authorization
//             }).then(({
//                 data
//             }) => {
//                 if (data.status === 0) {
//                     $store.commit('logout');
//                     next({
//                         path: '/login',
//                         query: {
//                             redirectUrl: to.fullPath
//                         }
//                     })
//                 }
//             })
//         } else {
//             // 否则跳到登录页面
//             // router.push('/login')
//             next({
//                 path: '/login',
//                 query: {
//                     redirectUrl: to.fullPath
//                 }
//             })
//         }
//     } else {
//         next();
//     }
// })
// 导入
export default router;