import Vue from 'vue'
import Vuex from 'vuex';
import { asyncRouterMap, constantRouterMap } from '@/router/index';
Vue.use(Vuex);
const store=new Vuex.Store({
  strict: process.env.NODE_ENV!='production', 
  state: {
    role: '',
    // routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    getRole(state, n){
      state.role=n;
    },
    // SET_ROUTERS: (state, routers) => {
    //   state.addRouters = routers;
    //   state.routers = constantRouterMap.concat(routers);
    // }
  },
  actions: {
    getRole({commit}, n){
      commit('getRole', n);
    },
    // GenerateRoutes({commit}) {
    //   console.log('store里')
    //   return new Promise(resolve => {
    //     commit('SET_ROUTERS', asyncRouterMap);
    //     resolve();
    //   })
    // }
  },
  getters: {},
  modules: {}
});
export default store