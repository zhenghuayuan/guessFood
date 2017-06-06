import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-ydui/dist/ydui.px.css'
import YDUI from 'vue-ydui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import FastClick from 'fastclick'
// attachFastClick(document.body);
// console.log(attachFastClick)
document.addEventListener('DOMContentLoaded', function() {
	FastClick.attach(document.body);
}, false);
Vue.use(YDUI);
// AJAX 拦截
axios.interceptors.request.use((config)=>{
	return config
}, (error)=>{
	return Promise.reject(error)
})
axios.interceptors.response.use((response)=>{
	return response
}, (error)=>{
	return Promise.reject(error);
});
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.utils = {
	getById(){
		alert(1)
	}
}
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
