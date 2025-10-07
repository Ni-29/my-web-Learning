<template>
  <div class="sc">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
// import func from "vue-editor-bridge";

export default {
  name: "School",
  data() {
    return {
      name: "北大",
      address: "北京",
    };
  },
  mounted() {
    // this.$bus.$on("receive", (data) => {
    //   console.log("我是School组件，我接收到了学生的姓名", data);
    // });
    this.pubId = pubsub.subscribe("receive", (msgName, data) => {
      console.log("我是School组件，我接收到了学生的姓名", msgName, data);
    });
  },
  beforeDestroy() {
    // this.$off("receive");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.sc {
  background-color: #7eecff;
}
</style>