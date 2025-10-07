<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- animate.css网站可以看到-->
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
button {
  width: 100px;
  height: 30px;
}
h1 {
  background-color: #68d7ff;
}
</style>