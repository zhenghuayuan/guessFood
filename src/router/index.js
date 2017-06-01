import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import home from '../components/home'
import placeTheOrder from '../components/placeTheOrder'

// import user from '../components/user'
// 异步组件
const user = resolve => require(['../components/user'], resolve)
Vue.use(Router)
let router = new Router({
    routes: [
        {
            path: '/',
            component: home,
            meta: {keepAlive: false}
        },
        {
            path: '/placeTheOrder',
            component: placeTheOrder
        },
        {
            path: '/user',
            component: user
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        }
    ]
});
// 路由拦截
router.beforeEach((to, from, next)=>{
    next();
});
router.afterEach((to, from)=>{})
export default router; 
