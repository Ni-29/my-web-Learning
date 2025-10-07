<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    // 拓展go:go()括号中跟数字，正数表示向前走几步，负数表示向后退几步
    // go() {
    //   this.$router.go(1);
    // },
  },
};
</script>

<style>
</style>