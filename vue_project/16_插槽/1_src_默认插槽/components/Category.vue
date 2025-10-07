<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot>我是默认值，当使用者没有传递具体结构时我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style scoped>
.category {
  height: 270px;
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