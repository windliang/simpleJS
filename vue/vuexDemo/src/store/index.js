import Vue from 'vue'
// 第一步 引入
// 在主 js 文件 main.js 中引入
import Vuex from 'vuex';

// 第二步 添加到vue身上
// 把 vuex 的操作方法挂到 vue 上
Vue.use(Vuex);

// 第三步 声明 store 对象
// 必须先 use 才能进行操作，然后把 store 对象挂到 vue 上
const store=new Vuex.Store({
  strict: process.env.NODE_ENV!='production',   //严格模式：防止直接修改state，打开时会影响性能，只在开发模式打开；process.env.NODE_ENV 是 webpack 配置取的变量
  state: {a: 12, b: 5},                         //核心：数据
  mutations: {
    add(state, n){
      state.a+=n;
    }
  },
  actions: {
    add({commit}, n){
      commit('add', n);
    }
  },
  getters: {},
  modules: {}
});
export default store