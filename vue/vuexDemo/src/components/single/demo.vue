<template>
  <div>
    <div>a: {{a}}</div>
    <div>b: {{b}}</div>
    <div>count: {{count}}</div>
    <input type="button" value="a+5" @click="addA(5)" />
    <input type="button" value="b+3" @click="addB(3)" />
    <br>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
  methods: {
    ...mapActions(['addA', 'addB']),
  },
  computed: {
    ...mapState(['a', 'b']),
    ...mapGetters(['count'])
  }
}
</script>