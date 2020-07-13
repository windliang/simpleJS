import Vue from 'vue'
 import Vuex from 'vuex'
 Vue.use(Vuex)
 const state = {
   // 初始化A和B组件的数据，等待获取
   AMsg: '',
   BMsg: ''
 }
 
 const mutations = {
   receiveAMsg(state, payload) {
     // 将A组件的数据存放于state
     state.AMsg = payload.AMsg
   },
   receiveBMsg(state, payload) {
     // 将B组件的数据存放于state
     state.BMsg = payload.BMsg
   }
 }
 
 export default new Vuex.Store({
   state,
   mutations
 })