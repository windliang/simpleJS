<template>
  <div class="section">
    <child :list="list"  @onEmitIndex="onEmitIndex"></child>
    <p>{{item}} => {{currentIndex}}</p>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  components: { child },
  data() {
    return {
      currentIndex: -1,
      item: '',
      list: ['a1', 'b2', 'c3']
    }
  },
  methods: {
    onEmitIndex(arg) {
      this.currentIndex = arg.index;
      this.item = arg.item;
    }
  }
}
</script>