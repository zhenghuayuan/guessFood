//引入vue及vuex
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
    domain: "http://192.168.2.108:3000",
    userinfo: {}, 
    foodItems: [
        {name: "炸鸡", classname: "zj", index: 1,  hot: 9.9, active: false,},
        {name: "米饭", classname: "mf", index: 2,  hot: 9.9, active: false,},
        {name: "果汁", classname: "gz", index: 3,  hot: 9.9, active: false,},
        {name: "羊肉串", classname: "yrc", index: 4,  hot: 9.9, active: false,},

        {name: "寿司", classname: "ss", index: 5,  hot: 9.9, active: false,},
        {name: "拉面", classname: "lm", index: 6,  hot: 9.9, active: false,},
        {name: "可乐", classname: "kl", index: 7,  hot: 9.9, active: false,},
        {name: "小龙虾", classname: "xlx", index: 8,  hot: 9.9, active: false,},

        {name: "西瓜", classname: "xg", index: 9,  hot: 9.9, active: false,},
        {name: "火锅", classname: "hg", index: 10,  hot: 9.9, active: false,},
        {name: "扇贝", classname: "sb", index: 11,  hot: 9.9, active: false,},
        {name: "啤酒", classname: "pj", index: 12,  hot: 9.9, active: false,},

        {name: "披萨", classname: "ps", index: 13,  hot: 9.9, active: false,},
        {name: "汉堡", classname: "hb", index: 14,  hot: 9.9, active: false,},
        {name: "牛奶", classname: "nn", index: 15,  hot: 9.9, active: false,},
        {name: "香蕉", classname: "xj", index: 16,  hot: 9.9, active: false,},
    ],
    orderItems: [], // 订单列表
    PRICE: 200, // 每一组价格
    currentPreiods: '', // 当前期号

}
const mutations = {
    SET_USER_INFO(state, userinfo){
        state.userinfo = userinfo;
    },
    PUSH_ORDER(state, orderItem){
        state.orderItems.unshift(orderItem)
    },
    DEL_ORDER_ITEMS(state, index){
        state.orderItems.splice(index, 1)
    },
    SetPreiods(state, preiods){
        state.currentPreiods = preiods
    },
    LOGOUT(state){
        state.orderItems = []
        state.userinfo = {}
    }
}
const actions = {
    pushOrder({commit}, orderItem){
        commit("PUSH_ORDER", orderItem)
    },
    delOrderItems({commit}, index){
        commit("DEL_ORDER_ITEMS", index)
    },
    setPreiods({commit}, preiods){
        commit("SetPreiods", preiods)
    },
    getUserinfo({commit}, next){
        axios.get("/api/userinfo")
        .then(({data})=>{
            commit("SET_USER_INFO", data.body)
            next && next()
        })
        .catch(e=>{
            console.log(`ajax:${e}`)
        })
    },
    logout({commit}, next){
        axios.get('/api/logout')
        .then(({data})=>{
            commit("LOGOUT")
            next && next()
        })
        .catch(e=>{
            console.log(e)
        })
    }
}
// const getters = {
//   domain: state => state.domain,
//   userinfo: state => state.userinfo

// }
export default new Vuex.Store({
    state,
    mutations,
    actions,
    // getters
})