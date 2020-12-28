<template>
  <div>
    <span v-for="(item, index) in list" :key="index" @click="emitIndex(index)">{{item}}</span>
  </div>
</template>
<script>
export default {
  props: ['list'],
  methods: {
    emitIndex(index) {
      this.$emit('onEmitIndex', index)
    }
  }
}
</script>