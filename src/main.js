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
// AJAX 请求拦截
axios.interceptors.request.use((config)=>{
	return config
}, (error)=>{
	return Promise.reject(error)
})
// AJAX 返回拦截 统一错误处理
axios.interceptors.response.use((response)=>{
	let code = response['data']['code']
	let msg = response['data']['msg']
	if (code == 0){
		return response
	}else if(code == 101 || code == 102){
		vm.$router.replace({path: "/login"})
	}else{
		vm.$dialog.toast({mes: msg, timeout: 2000})
	}
}, (error)=>{
	return Promise.reject(error);
});
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
// Vue.prototype.utils = {
// 	getById(){
// 		alert(1)
// 	}
// }
const vm = new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
