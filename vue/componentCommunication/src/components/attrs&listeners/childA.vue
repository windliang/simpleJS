<template>
  <div>
    <p>props 接收到的 name: {{ name}}</p>
    <p>childA 的 $attrs: {{$attrs}}</p>
    <child-b v-bind="$attrs"></child-b>
  </div>
</template>
<script>
const childB = () => import("./childB.vue");
export default {
  components: {
    childB
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    name: String // name作为props属性绑定
  },
  created() {
    console.log(this.$attrs);
     // { "age": "18", "gender": "女", "height": "158", "title": "嘿嘿嘿" }
  }
};
</script>