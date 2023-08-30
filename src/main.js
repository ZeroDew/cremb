import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/font-awesome-4.7.0/css/font-awesome.css';
import '@/assets/font_4181420_rdal1w6iq5m/iconfont.css'

import '@/assets/css/reset.css'
import 'normalize.css/normalize.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueLazyload from 'vue-lazyload';
import moment from 'moment';

Vue.use(Vant)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/assets/images/loading.jpg'),
  error: require('@/assets/images/error.webp'),
  attempt: 3
})
Vue.prototype.$moment = moment
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')