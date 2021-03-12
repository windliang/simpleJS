<template>
  <div>计算和: <br>child1Num => {{child1Num}}<br>count + child1Num => {{count}}</div>
</template>
<script>
import { bus } from '@/bus.js'
export default {
  data() {
    return {
      child1Num: 0,
      count: 0,
    }
  },
  mounted() {
    bus.$on('addition', arg=> {
      this.child1Num = arg.num;
      this.count = this.count + arg.num;
    })
  }
}
</script>