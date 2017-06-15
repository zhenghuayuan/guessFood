import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import home from '../components/home'
import placeTheOrder from '../components/place-the-order'
import historyLottery from '../components/history-lottery'
import myLotteryRecord from '../components/my-lottery-record'


import store from '../store/index'

// import userinfo from '../components/userinfo'
// 异步组件
const userinfo = resolve => require(['../components/userinfo'], resolve)
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
            path: '/userinfo',
            component: userinfo
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/historyLottery',
            component: historyLottery
        },
        {
            path: '/myLotteryRecord',
            component: myLotteryRecord
        }
    ]
});
// 路由拦截
router.beforeEach((to, from, next)=>{
    let userid = store.state.userinfo.userid
    let path = to.path
    console.log(path)
    if (!userid 
        && path != '/login'
        && path != '/register'){
        return store.dispatch('getUserinfo', next) 
    }
    next();
});
router.afterEach((to, from)=>{})
export default router; 
