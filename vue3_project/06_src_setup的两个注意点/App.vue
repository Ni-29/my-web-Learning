<template>
  <Demo msg="你好！" school="北大" @hello="showHello">
    <template v-slot:study>
      <span>学习</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";

export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHello(value) {
      alert(`你触发了hello事件，收到的参数是${value}`);
    }

    return { showHello };
  },
};
</script>
