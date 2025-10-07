<template>
  <div class="sc">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="sendStudentName">点我把姓名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "小郭",
      gender: "男",
    };
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit("receive", this.name);
    },
  },
};
</script>

<style scoped>
.sc {
  background-color: #89fc98;
}
button {
  cursor: pointer;
}
</style>