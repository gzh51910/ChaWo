import Vue from 'vue'
import App from './App.vue'

import {Row,Col,Menu, MenuItem,Badge,Button,MenuItemGroup,Submenu,Slider} from 'element-ui';
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Badge);
Vue.use(Button);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.component(Slider.name,Slider)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
