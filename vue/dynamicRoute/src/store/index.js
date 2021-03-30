import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
const store=new Vuex.Store({
  strict: process.env.NODE_ENV!='production', 
  state: {
    role: '',
    addRouters: []
  },
  mutations: {
    getRole(state, n){
      state.role=n;
    },
  },
  actions: {
    getRole({commit}, n){
      commit('getRole', n);
    },
  },
  getters: {},
  modules: {}
});
export default store