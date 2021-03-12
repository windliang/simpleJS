<template>
  <div>
    <button @click="sayHello">sayHello</button>
    <child ref="childForRef"></child>
  </div>
</template>
<script>
import child from './child.vue'
  export default {
    components: { child },
    data () {
      return {
        childForRef: null,
      }
    },
    mounted() {
      this.childForRef = this.$refs.childForRef;
      console.log(this.childForRef.name);
      // this.childForRef.sayHello();
    },
    methods: {
      sayHello() {
        this.childForRef.sayHello()
      }
    }
  }
</script>