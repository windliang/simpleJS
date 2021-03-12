<template>
  <div>
    <button @click="additionHandle">+加法器</button>    
  </div>
</template>
<script>
import {bus} from '@/bus.js'
// console.log(bus)
export default {
  data(){
    return{
      num:1
    }
  },
  methods:{
    additionHandle(){
      bus.$emit('addition', {
        num:this.num++
      })
    }
  }
}
</script>