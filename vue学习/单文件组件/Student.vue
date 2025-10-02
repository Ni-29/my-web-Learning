// <v快捷键

<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生年龄:{{age}}</h2>
  </div>
</template>>


<script>
//组件交互相关的代码（数据、方法等）
export default {
  name:'Student',
  data() {
    return {
      name: '小郭',
      age: 30
    }
  }
};
</script>


<style>
/* 组件的样式 */
</style>