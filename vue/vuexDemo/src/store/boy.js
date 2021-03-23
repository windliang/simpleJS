export default {
  state: {
    str: 'boy'
  },
  mutations: {
    'boySetStr': function (state, s){
      console.log('boy 的 setStr');
      state.str=s;
    }
  },
  actions: {
    'boySetStr': function ({commit}, s){
      commit('boySetStr', s);
    }
  }
}