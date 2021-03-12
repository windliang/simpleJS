<template>
  <div class="border">
    <p>props 接收到的 age: {{age}}</p>
    <p>childB 的 $attrs: {{$attrs}}</p>
  </div>
</template>
<script>

export default {
  inheritAttrs: false,
  props: {
    age: String
  },
  created() {
    console.log(this.$attrs); 
    // { "gender": "女", "height": "158", "title": "嘿嘿嘿" }
  }
};
</script>
<style scoped>
  .border{border: 1px solid #000;}
</style>