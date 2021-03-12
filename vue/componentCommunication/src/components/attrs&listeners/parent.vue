<template>
  <div>
    <child-a :name="name" :age="age" :gender="gender" :height="height" title="嘿嘿嘿"></child-a>
  </div>
</template>
<script>
import ChildA from './ChildA'
export default {
  components: { ChildA },
  data() {
    return {
      name: "zhang",
      age: "18",
      gender: "女",
      height: "168"
    };
  }
};
</script>