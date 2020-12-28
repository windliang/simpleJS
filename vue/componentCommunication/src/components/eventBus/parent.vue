<template>
  <div>
    <child1></child1>
    <child2></child2>
  </div>
</template>
<script>
import child1 from './child1.vue'
import child2 from './child2.vue'
export default {
  components: { child1, child2 }
}
</script>