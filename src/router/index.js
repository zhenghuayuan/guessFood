import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import user from '../components/user'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: user
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
});
router.beforeEach(function(to, from, next){
    console.log(`to:${to.path}`)
    console.log(`from:${from.path}`)
    // if (to.path == '/') {
    //     router.push({path: "/login"})
    //     return;
    // }
    next();
    // let token = localStorage.getItem('token')
    // if(to.meta.requireAuth) {
    //     if(token) {
    //         next()
    //     } else {
    //         next({
    //             path: '/login',
    //             query: { redirect: to.fullPath }
    //         })
    //     }
    // } else {
    //     next()
    // }
});

export default router; 
