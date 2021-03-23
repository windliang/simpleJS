<template>
  <div>
    <div>a: {{a}}</div>
    <div>b: {{b}}</div>
    <div>count: {{count}}</div>
    <input type="button" value="a+5" @click="addA(5)" />
    <input type="button" value="b+3" @click="addB(3)" />
    <br>
    <br>
    <input type="button" value="法外狂徒出现" @click="setOnline(5)" />
    <ul>
      <li v-for="user in onlineUsers" :key="user.name">
        名字：{{user.name}}
        年龄：{{user.age}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
  async created(){
    await this.readUsers();
  },
  methods: {
    ...mapActions(['addA', 'addB', 'setOnline', 'readUsers']),
  },
  computed: {
    ...mapState({
      a: state=>state.single.a,
      b: state=>state.single.b,
    }),
    ...mapGetters(['count', 'onlineUsers'])
  }
}
</script>