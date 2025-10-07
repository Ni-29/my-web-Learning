<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的DOM元素</button>

    <MySchool />
  </div>
</template>

<script>
// 引入MySchool组件
import MySchool from "./components/MySchool.vue";

export default {
  name: "App",
  components: {
    MySchool,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
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