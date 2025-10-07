<template>
  <div class="sc">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "北大",
      address: "北京",
    };
  },
  mounted() {
    this.$bus.$on("receive", (data) => {
      console.log("我是School组件，我接收到了学生的姓名", data);
    });
  },
  beforeDestroy() {
    this.$off("receive");
  },
};
</script>

<style scoped>
.sc {
  background-color: #7eecff;
}
</style>