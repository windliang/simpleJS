<template>
  <div>child 的内容</div>
</template>
<script>
export default {
  data () {
    return {
      name: '我是 child',
    }
  },
  methods: {
    sayHello () {
      console.log('hello');
      alert('hello');
    }
  }
}
</script>