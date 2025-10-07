<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear name="hello">
      <!-- 如果没有name,就是.v-enter-active -->
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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

/* 动画 */

.hello-enter-active {
  animation: remove 1s linear;
}
.hello-leave-active {
  animation: remove 1s linear reverse;
}

@keyframes remove {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>