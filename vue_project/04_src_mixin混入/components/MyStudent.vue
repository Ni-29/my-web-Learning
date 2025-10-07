<template>
  <div class="sc">
    <h2 @click="showName">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
  </div>
</template>

<script>
// import { hunhe } from "../mixin";

export default {
  name: "MyStudent",
  data() {
    return {
      name: "小郭",
      gender: "男",
    };
  },
  // mixins: [hunhe],
};
</script>

<style>
.sc {
  background-color: #86f394;
}
</style>