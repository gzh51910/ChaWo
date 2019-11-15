import Vue from 'vue'
import App from './App.vue'
import './assets/rem.js'
import store from './store'
// 全部引入
import router from './routers';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu, MenuItem, Icon, Carousel, CarouselItem,Row,Col,Button,Form,
    FormItem,Input,InputNumber,Radio,Checkbox} from 'element-ui';
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
// import axios from 'axios';


Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// 使用ElementUI
// Vue.use(ElementUI);
// Vue.prototype.$axios = axios;
new Vue({
    // 4.把router实例注入到vue实例中
    router,
    store,
    render: h => h(App),
}).$mount('#app')