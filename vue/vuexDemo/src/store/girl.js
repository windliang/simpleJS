export default {
  state: {
    str: 'girl'
  },
  mutations: {
    'girlSetStr': function (state, s){
      console.log('girl 的 setStr');
      state.str=s;
    }
  },
  actions: {
    'girlSetStr': function ({commit}, s){
      commit('girlSetStr', s);
    }
  }
}