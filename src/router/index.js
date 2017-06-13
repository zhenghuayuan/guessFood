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
    let userid = store.state.userInfo.userid
    console.log(`userid:${userid}`)
    if (to.path != '/' &&
        to.path != '/historyLottery' &&
        to.path != '/myLotteryRecord') {
        if (typeof userid == 'undefined') {
            // router.push({path: "/"})
            next({path: '/' })
        }
    }
    next();
});
router.afterEach((to, from)=>{})
export default router; 
