<template>
  <div class="section">
    <child :list="list"  @onEmitIndex="onEmitIndex"></child>
    <p>{{currentIndex}}</p>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  components: { child },
  data() {
    return {
      currentIndex: -1,
      list: ['a1', 'b2', 'c3']
    }
  },
  methods: {
    onEmitIndex(idx) {
      this.currentIndex = idx
    }
  }
}
</script>