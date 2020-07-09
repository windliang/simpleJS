<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in list" :key="item.name"><a :href="`#/${item.name}`">{{item.name}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  created () {
    console.log(this)
    this.setList()
  },
  methods: {
    setList() {
      console.log(this.$router)
      this.list = this.$router.options.routes
      console.log(this.list)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    text-align: left;
  }
  ul>li {
    padding: 3px 0;
  }
</style>
