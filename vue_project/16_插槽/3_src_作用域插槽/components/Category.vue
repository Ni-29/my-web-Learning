<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="demo1" :games="games"
      >我是默认值，当使用者没有传递具体结构时我会出现</slot
    >
    <slot name="demo2" :games="games"
      >我是默认值，当使用者没有传递具体结构时我会出现</slot
    >
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["恋与深空", "世界之外", "易次元", "开心消消乐"],
    };
  },
};
</script>

<style scoped>
.category {
  height: 300px;
  width: 200px;
  padding: 5px 0;
  background-color: #81cff0;
}
h3 {
  text-align: center;
  padding: 5px 0;
  margin-bottom: 20px;
  background-color: #ffa9a9;
}
li {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>