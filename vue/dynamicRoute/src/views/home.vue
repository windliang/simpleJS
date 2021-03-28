<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu default-active="3" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="b">b</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <!-- <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item> -->
        </el-menu>
      </el-col>
      <el-col :span="20"><div class="grid-content bg-purple"><router-view></router-view></div></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    components: {},
    props:[''],
    data () {
      return {

      };
    },
    watch: {},
    created() {
      console.log(this.$router.options.routes)
    },
    beforeMount() {},
    mounted() {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {}
  }
</script>
<style lang='' scoped>
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>