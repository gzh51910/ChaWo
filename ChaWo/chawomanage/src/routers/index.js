import Vue from 'vue';
import VueRouter from 'vue-router';  //1. 导入

Vue.use(VueRouter);  //2. 使用

import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import GoodsList from '../pages/GoodsList.vue';
import GoodClassify from '../pages/GoodClassify.vue';
import OrderList from '../pages/OrderList.vue';
import UserList from '../pages/UserList.vue';
import AddGood from '../pages/AddGood.vue';
import AddName from '../pages/AddName.vue'

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
            name: 'goodslist',
            path: '/goodslist',
            component: GoodsList
        },
        {
            name: 'goodsclassify',
            path: '/goodsclassify',
            component: GoodClassify
        },
        {
            name: 'orderlist',
            path: '/orderlist',
            component: OrderList
        },
        {
            name: 'userlist',
            path: '/userlist',
            component: UserList
        },
        {
            name: 'addgood',
            path: '/addgood',
            component: AddGood
        },
        {
            name: 'addname',
            path: '/addname',
            component: AddName
        },
        
        {
            // 重定向
            path: '/',
            redirect: '/home',
            // component:'login'
        }
    ]
})


// 导入
export default router;