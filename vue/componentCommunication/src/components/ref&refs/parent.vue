<template>
  <child ref="childForRef"></child>
</template>
<script>
import child from './child.vue'
  export default {
    components: { child },
    mounted() {
      const childForRef = this.$refs.childForRef;
      console.log(childForRef.name);
      childForRef.sayHello();
    }
  }
</script>