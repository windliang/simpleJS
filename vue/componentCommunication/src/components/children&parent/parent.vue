<template>
  <div>
    <div>{{msg}}</div>
    <child></child>
    <button @click="changeA">点击改变子组件值</button>
  </div>
</template>

<script>
import Child from './child'
export default {
  components: { Child },
  data() {
    return {
      msg: 'Welcome'
    }
  },

  methods: {
    changeA() {
      this.$children[0].messageA = 'this is new value'
    }
  }
}
</script>