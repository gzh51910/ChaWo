import Vue from 'vue'
import App from './App.vue'
import './assets/rem'
// 全部引入

import { Menu, MenuItem, Icon, Carousel, CarouselItem,Row,Col,Button} from 'element-ui'
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Row);
Vue.use(Button)
Vue.use(Col);
// import axios from 'axios';

import router from './routers';
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// 使用ElementUI
// Vue.use(ElementUI);
// Vue.prototype.$axios = axios;
new Vue({
    // 4.把router实例注入到vue实例中
    router,
    render: h => h(App),
}).$mount('#app')