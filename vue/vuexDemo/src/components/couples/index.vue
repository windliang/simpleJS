<template>
  <div>
    str: {{str}}<br>
    couples: {{couples}}<br>
    a_str: {{str_boy}}<br>
    b_str: {{str_girl}}<br>
    <input type="button" value="设置 boy" @click="set_boy('aaa')">
    <input type="button" value="设置 girl" @click="set_girl('bbb')">
    <br>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
  // created(){console.log(this.$store)},
  methods: {
    ...mapActions({
      set_boy: 'boySetStr',
      set_girl: 'girlSetStr'
    })
  },
  computed: {
    ...mapState(['str']),
    ...mapState({
      str_boy: state=>state.boy.str,
      str_girl: state=>state.girl.str,
    }),
    ...mapGetters(['couples'])
  }
}
</script>
