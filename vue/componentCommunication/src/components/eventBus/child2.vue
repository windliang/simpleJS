<template>
  <div>计算和: {{count}}</div>
</template>
<script>
import { bus } from '@/bus.js'
export default {
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    bus.$on('addition', arg=> {
      this.count = this.count + arg.num;
    })
  }
}
</script>