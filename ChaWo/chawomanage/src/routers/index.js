import Vue from 'vue';
import VueRouter from 'vue-router';  //1. 导入

Vue.use(VueRouter);  //2. 使用

import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';

// 3. 实例化VueRouter并配置参数
const router = new VueRouter({
    // mode:'history', //hash(默认)   history
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'login',
            path: '/login',
            component:Login
        },
        {
            // 重定向
            path: '/',
            redirect: '/login',
            // component:'login'
        }
    ]
})


// 导入
export default router;