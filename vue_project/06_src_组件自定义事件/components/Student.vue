<template>
  <div class="sc">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="sendStudentName">点我把学生姓名给App</button> &nbsp;&nbsp;
    <button @click="unbind">点我解绑ppp事件</button>
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
      // 触发Student组件实例身上的ppp事件
      this.$emit("ppp", this.name);
      // this.$emit("ggg");
    },
    unbind() {
      this.$off("ppp"); //解绑一个自定义事件
      // this.$off(["ppp", "ggg"]); //解绑多个自定义事件
      // this.$off(); //解绑所有的自定义事件
      console.log("解绑成功");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.sc {
  background-color: #89fc98;
  padding: 10px;
}
button {
  margin-top: 7px;
  background-color: #ffd563;
  border: 1.5px solid #000000;
  padding: 2px;
  cursor: pointer;
}
</style>