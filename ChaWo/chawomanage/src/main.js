import Vue from 'vue'
import App from './App.vue'

import {
  Row,
  Col,
  Menu,
  MenuItem,
  Badge,
  Button,
  MenuItemGroup,
  Submenu,
  Slider,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Checkbox,
  Pagination,
  Form,
  FormItem,
  Select,
  Option,
  Switch,
  Radio,
  RadioGroup,
  DatePicker,
  TimePicker,
  CheckboxGroup,
  Upload,
  Dialog,
  MessageBox
} from 'element-ui';
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Badge);
Vue.use(Button);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.component(Input.name, Input);
Vue.component(Slider.name, Slider);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Checkbox);
Vue.use(Pagination);

Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Switch.name, Switch);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(DatePicker.name, DatePicker);
Vue.component(TimePicker.name, TimePicker);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Upload.name, Upload);
Vue.component(Dialog.name, Dialog)
Vue.component(MessageBox.name, MessageBox)
Vue.config.productionTip = false

import router from './routers';
import axios from 'axios';
Vue.prototype.$axios = axios;
new Vue({
  router,//把路由注入实例
  render: h => h(App),
}).$mount('#app')
