<template>
  <div>
    <h1 v-text="msg"></h1>
    <MyStudent name="小郭" gender="女" :age="20" />
    <MyStudent name="小王" gender="男" :age="26" />
  </div>
</template>

<script>
// 引入MyStudent组件
import MyStudent from "./components/MyStudent.vue";

export default {
  name: "App",
  components: {
    MyStudent,
  },
  data() {
    return {
      msg: "学生信息",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title);
    },
  },
};
</script>

<style>
</style>