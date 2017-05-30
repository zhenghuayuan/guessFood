//引入vue及vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    domain: "http://192.168.2.108:3000",
    userInfo: {},

}
const mutations = {
  SET_USER_INFO(state, userInfo){
    state.userInfo = userInfo;
  }

}
const actions = {
  setUserInfo({commit}, userInfo){
    commit("SET_USER_INFO", userInfo)
  }
}
// const getters = {
//   domain: state => state.domain,
//   userInfo: state => state.userInfo

// }
export default new Vuex.Store({
    state,
    mutations,
    actions,
    // getters
})