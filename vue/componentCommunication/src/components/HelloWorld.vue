<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in list" :key="item.name" v-show="item.name !== 'HelloWorld'"><a :href="`#/${item.name}`">{{item.name}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hi Boy!',
      list: []
    }
  },
  created () {
    this.setList()
  },
  methods: {
    setList() {
      this.list = this.$router.options.routes
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
