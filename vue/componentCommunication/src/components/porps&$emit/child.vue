<template>
  <div>
    <button v-for="(item, index) in list" :key="index" @click="emitIndex(index, item)">{{item}}</button>
  </div>
</template>
<script>
export default {
  props: ['list'],
  methods: {
    emitIndex(index, item) {
      this.$emit('onEmitIndex', {index, item})
    }
  }
}
</script>