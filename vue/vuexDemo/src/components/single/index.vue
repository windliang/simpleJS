<template>
    <div>
      a: {{$store.state.single.a}}<br/>
      <input type="button" value="+5" @click="fn()">
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      fn(){
        //this.$store.state.a+=5;// 直接改也可以改，但会报错
        //this.$store.commit('add', 5);// 使用 mutations 也可以改，但是一般不会用
        this.$store.dispatch('add', 5);
      }
    }
  }
  </script>
