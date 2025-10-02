// <v快捷键

<template>
  <!-- 组件的结构 -->
  <div>
    <School></School>
    <hr>
    <Student></Student>
  </div>
</template>>


<script>
import School from './School.vue'
import Student from './Student.vue'

//组件交互相关的代码（数据、方法等）
export default {
  name:'App',
  components:{
    School,
    Student
  }
};
</script>


<style>
/* 组件的样式 */
</style>