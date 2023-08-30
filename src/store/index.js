import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false, //登录状态
    userinfo: {}, //用户信息
  
  },
  getters: {},
  mutations: {
    login(state) {

      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      state.userinfo = {}
      localStorage.removeItem('token')
    },
    setUserinfo(state, val) {
      state.userinfo = val
    },
    setActive(state, val) {
      state.active = val
    }
  },
  actions: {


  },
  modules: {}
})