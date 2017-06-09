import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import home from '../components/home'
import placeTheOrder from '../components/place-the-order'
import store from '../store/index'

// import user from '../components/user'
// 异步组件
const user = resolve => require(['../components/user'], resolve)
Vue.use(Router)
let router = new Router({
    routes: [
        {
            path: '/',
            component: home,
            meta: {keepAlive: true}
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
    let userid = store.state.userInfo.userid
    console.log(userid)
    if (to.path != '/') {
        if (typeof userid == 'undefined') {
            // router.push({path: "/"})
            next({path: '/' })
        }
    }
    next();
});
router.afterEach((to, from)=>{})
export default router; 
