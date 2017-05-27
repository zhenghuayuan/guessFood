import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index'
Vue.use(YDUI);
Vue.use(VueAxios, axios);
// Vue.axios.get('/api',{
// 	param: {}
// })

// Vue.config.productionTip = true
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
