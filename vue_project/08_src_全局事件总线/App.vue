<template>
  <div>
    <h1 v-text="msg"></h1>
    <hr />
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
// 引入School组件
import School from "./components/School.vue";
// 引入MyStudent组件
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "学生信息",
    };
  },
};
</script>

<style>
h1 {
  height: 80px;
  line-height: 80px;
  background-color: #e88888;
}
</style>