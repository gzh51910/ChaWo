import Vue from 'vue'
import App from './App.vue'
import './assets/rem.js'
import store from './store'
// 全部引入
import router from './routers';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Menu,
    MenuItem,
    Icon,
    Carousel,
    CarouselItem,
    Row,
    Col,
    Button,
    Form,
    FormItem,
    Input,
    InputNumber,
    Radio,
    Checkbox,
    pageHeader,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Divider,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Rate,
    Avatar
} from 'element-ui';
Vue.use(Badge);
Vue.use(Avatar),
    Vue.use(Rate);
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem);
Vue.use(Divider);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Row);
Vue.use(Button)
Vue.use(Col);
Vue.use(Radio);
Vue.use(InputNumber);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Checkbox);
Vue.use(pageHeader);



Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')