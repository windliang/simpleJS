export default {
  state: {a: 12, b: 5, users: []},                         //核心：数据
  mutations: {
    add(state, n){
      state.a+=n;
    },
    addA(state, n){
      state.a+=n;
    },
    addB(state, n){
      state.b+=n;
    },
    setOnline(state, id){
      state.users.forEach(user=>{
        if(user.id==id){
          user.online=true;
        }
      });
    },
    setUsers(state, users){
      state.users=users;
    }
  },
  actions: {
    add({commit}, n){
      commit('add', n);
    },
    addA({commit}, n){
      commit('addA', n);
    },
    addB({commit}, n){
      commit('addB', n);
    },
    setOnline({commit}, id){
      commit('setOnline', id);
    },
    async readUsers({commit}){// 异步
      let res=await fetch('http://localhost:2021/static/user.txt');
      let users=await res.json();

      commit('setUsers', users);
    }
  },
  getters: {
    count(state){
      return state.a+state.b;
    },
    onlineUsers(state){
      return state.users.filter(user=>user.online);
    }
  }
}