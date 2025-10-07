<template>
  <div>
    <h1 v-text="msg"></h1>
    <MySchool />
    <hr />
    <MyStudent />
  </div>
</template>

<script>
// 引入MyStudent组件
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";

export default {
  name: "App",
  components: {
    MySchool,
    MyStudent,
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
  background-color: #e88888;
}
</style>