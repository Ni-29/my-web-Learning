<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!--transition里只能有一个元素  -->
    <transition appear name="hello">
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
    <!-- transition-group里放多个元素,需要key值 -->
    <transition-group appear name="hello">
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="!isShow" key="2">Vue！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
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
  /* transition: 0.5s linear; */
}

/* 过渡 */

/* 进入的起点,离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点 ,离开的起点*/
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
/* 离开的起点
.hello-leave {
  transform: translateX(0);
} */
/* 离开的终点
.hello-leave-to {
  transform: translateX(-100%);
} */
</style>