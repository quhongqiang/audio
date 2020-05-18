import Vue from 'vue'
import App from './App.vue'
// import mixin from './mixin/index';

import store from './store/index'

import router from './router/index';
import { Picker, Toast, Button, Field, DatetimePicker, Popup,Cell,Calendar,DropdownMenu, DropdownItem, Tab, Tabs} from 'vant';
import 'lib-flexible';
import './style/base.scss';

// 按需引入
Vue.use(Picker);
Vue.use(Toast);
Vue.use(Button);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Cell);
// Vue.use(CellGroup);
Vue.use(Calendar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Tab);
Vue.use(Tabs);

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  // if(to.meta.title){
  //   document.title = to.meta.title
  // }

  next()
})

// Vue.mixin(mixin);
Vue.config.productionTip = false
Vue.prototype.$toast = Toast;
new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')